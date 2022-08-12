import React from 'react'
import { Form, Box, Button } from '@etvas/etvaskit'
import { useField } from 'formik'
import { action } from '@storybook/addon-actions'
import {
  exportRuleBuilder,
  importRuleBuilder,
  RuleBuilder,
  validateRuleBuilder
} from '../src'

export default {
  title: 'Components/RuleBuilder'
}

const required = {
  validator: value =>
    !value || (typeof value === 'string' ? value.trim() : value).length === 0,
  error: 'Required'
}

const numPositive = {
  validator: value => isNaN(value) || parseFloat(value) < 0 || value.length < 1,
  error: 'Number must be positive'
}

const combinedRuleOptions = {
  merchant: {
    label: 'Merchant',
    placeholder: 'Merchant',
    validate: [required],
    operator: {
      label: 'Merchant Condition',
      placeholder: 'Merchant Condition',
      validate: [required],
      options: [
        { label: 'contains', value: '~' },
        { label: 'exact match', value: '=' }
      ]
    },
    value: {
      label: 'Merchant name',
      placeholder: 'Adidas',
      type: 'string',
      validate: [required]
    }
  },
  amount: {
    label: 'Amount',
    placeholder: 'Amount',
    validate: [required],
    operator: {
      label: 'Amount Condition',
      placeholder: 'Amount Condition',
      validate: [required],
      options: [
        { label: 'Greater than', value: '>' },
        { label: 'Less than', value: '<' }
      ]
    },
    value: {
      label: 'Amount value',
      placeholder: '10',
      type: 'number',
      suffix: '€',
      validate: [required, numPositive]
    }
  }
}

const absoluteRuleOptions = {
  timespan: {
    label: 'Timespan',
    placeholder: 'Timespan',
    validate: [required],
    operator: {
      label: 'Timespan Condition',
      placeholder: 'Timespan Condition',
      validate: [required],
      options: [
        { label: 'lower than', value: '<' },
        { label: 'greater than', value: '>' }
      ]
    },
    value: {
      label: 'Timespan value',
      placeholder: '30',
      type: 'number',
      suffix: 'days',
      validate: [required, numPositive]
    }
  },
  count: {
    label: 'Transaction Number',
    placeholder: 'Transaction Number',
    validate: [required],
    operator: {
      label: 'Transaction Number Condition',
      placeholder: '1',
      validate: [required],
      options: [
        { label: 'Greater than', value: '>' },
        { label: 'Less than', value: '<' }
      ]
    },
    value: {
      label: 'Transaction Number Value',
      placeholder: '10',
      type: 'number',
      suffix: '€',
      validate: [required, numPositive]
    }
  }
}

const FormikContextViewer = () => {
  const [context] = useField('cashbacks')

  return <pre>{JSON.stringify(context.value, null, 2)}</pre>
}

export const RuleBuilderExample = () => (
  <Box p={4} bg='white'>
    <Form
      onSubmit={({ cashbacks }) => {
        // eslint-disable-next-line no-console
        console.log(
          importRuleBuilder(
            exportRuleBuilder(cashbacks),
            combinedRuleOptions,
            absoluteRuleOptions
          )
        )
        action('form submitted')()
      }}
      initialValues={{ cashbacks: {} }}
      validate={validateRuleBuilder(
        'cashbacks',
        combinedRuleOptions,
        absoluteRuleOptions
      )}>
      <RuleBuilder
        name='cashbacks'
        label='CASHBACK CONDITIONS'
        addRuleLabel='Add rule'
        addGroupLabel='Add group'
        advancedTargetingLabel='Advanced targeting'
        andLabel='AND'
        orLabel='OR'
        removeRuleIcon='trash'
        combinedRuleOptions={combinedRuleOptions}
        absoluteRuleOptions={absoluteRuleOptions}
      />

      <Button variant='primary' type='submit' mt={4}>
        Submit
      </Button>

      <FormikContextViewer />
    </Form>
  </Box>
)
