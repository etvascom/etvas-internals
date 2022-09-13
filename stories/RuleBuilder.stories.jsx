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

const betweenRequired = {
  validator: value => {
    const split = value.split('.')
    const [leftValue, rightValue] = [split?.shift(), split?.pop()]
    return !leftValue || !rightValue
  },
  error: 'Both values are required'
}

const betweenPositive = {
  validator: value => {
    const split = value.split('.')
    const [leftValue, rightValue] = [split?.shift(), split?.pop()]
    return numPositive.validator(leftValue) || numPositive.validator(rightValue)
  },
  error: 'Both numbers must be positive'
}

const minTags = num => ({
  validator: value =>
    !value ||
    value
      .split(',')
      .filter(val => !!val)
      .map(val => val.trim()).length < num,
  error: `Min ${num} tags needed`
})

const numPositive = {
  validator: value => isNaN(value) || parseFloat(value) < 0 || value.length < 1,
  error: 'Number must be positive'
}

const combinedRuleOptions = {
  merchant: {
    label: 'Merchant',
    placeholder: 'Merchant',
    allowCount: num => num <= 1,
    validate: [required],
    operator: {
      label: 'Merchant Condition',
      placeholder: 'Merchant Condition',
      validate: [required],
      options: [
        { label: 'contains', value: '~' },
        { label: 'exact match', value: '=' },
        { label: 'includes one of', value: '~~' },
        { label: 'is one of', value: '~=' }
      ]
    },
    value: {
      label: 'Merchant name',
      placeholder: 'Adidas',
      type: 'string',
      validate: [required]
    },
    operatorValue: {
      '~~': {
        label: 'Merchant name tag',
        placeholder: 'Adidas, Nike, Puma',
        type: 'tag',
        validate: [required]
      },
      '~=': {
        label: 'Merchant name tag',
        placeholder: 'Adidas, Nike, Puma',
        type: 'tag',
        validate: [required, minTags(3)]
      }
    }
  },
  amount: {
    label: 'Amount',
    placeholder: 'Amount',
    validate: [required],
    allowCount: num => num <= 1,
    operator: {
      label: 'Amount Condition',
      placeholder: 'Amount Condition',
      validate: [required],
      options: [
        { label: 'Greater than', value: '>' },
        { label: 'Less than', value: '<' },
        { label: 'is between', value: '><' }
      ]
    },
    value: {
      label: 'Amount value',
      placeholder: '10',
      type: 'number',
      suffix: '€',
      validate: [required, numPositive]
    },
    operatorValue: {
      '><': {
        label: 'Between',
        placeholder: '5-100',
        type: 'between',
        suffix: '€',
        suffixSpace: 1,
        validate: [required, betweenRequired, betweenPositive]
      }
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
      suffixSpace: 1,
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
      suffix: 'transactions',
      suffixSpace: 1,
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
          exportRuleBuilder(cashbacks, combinedRuleOptions, absoluteRuleOptions)
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
        typeLabel='Type'
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

const cashbacksData = {
  combinator: 'or',
  groups: [
    {
      not: false,
      combinator: 'and',
      combined: [
        {
          keypath: 'merchant',
          operator: '~',
          value: 'Uber'
        },
        {
          keypath: 'amount',
          operator: '<',
          value: '20'
        },
        {
          keypath: 'amount',
          operator: '>',
          value: '10'
        }
      ],
      absolute: []
    },
    {
      not: false,
      combinator: 'and',
      combined: [
        {
          keypath: 'merchant',
          operator: '~',
          value: 'Bolt'
        },
        {
          keypath: 'amount',
          operator: '>',
          value: '100'
        }
      ],
      absolute: [
        {
          keypath: 'timespan',
          operator: '>',
          value: '25'
        },
        {
          keypath: 'count',
          operator: '>',
          value: '1'
        }
      ]
    }
  ]
}

export const RuleBuilderDisabled = () => (
  <Box p={4} bg='white'>
    <Form
      initialValues={{
        cashbacks: importRuleBuilder(
          cashbacksData,
          combinedRuleOptions,
          absoluteRuleOptions
        )
      }}>
      <RuleBuilder
        name='cashbacks'
        label='CASHBACK CONDITIONS'
        addRuleLabel='Add rule'
        addGroupLabel='Add group'
        advancedTargetingLabel='Advanced targeting'
        andLabel='AND'
        orLabel='OR'
        removeRuleIcon='trash'
        typeLabel='Type'
        combinedRuleOptions={combinedRuleOptions}
        absoluteRuleOptions={absoluteRuleOptions}
        disabled
      />
      <FormikContextViewer />
    </Form>
  </Box>
)
