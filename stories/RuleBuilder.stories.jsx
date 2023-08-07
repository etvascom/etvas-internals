import React from 'react'

import { action } from '@storybook/addon-actions'
import { useField } from 'formik'
import * as yup from 'yup'

import { Box, Button, Form } from '@etvas/etvaskit'

import {
  RuleBuilder,
  createRuleBuilderYupSchema,
  exportRuleBuilder,
  importRuleBuilder
} from '../src'

export default {
  title: 'Components/RuleBuilder'
}

yup.setLocale({
  mixed: {
    required: 'Required'
  },
  number: {
    positive: 'Must be positive'
  }
})

const betweenRequired = value => {
  const split = value?.split(',')
  const [leftValue, rightValue] = [split?.shift(), split?.pop()]
  return leftValue && rightValue
}

const betweenPositive = value => {
  const split = value?.split(',')
  const [leftValue, rightValue] = [split?.shift(), split?.pop()]
  return leftValue > 0 && rightValue > 0
}

const minMax = value => {
  const split = value?.split(',')
  const [leftValue, rightValue] = [split?.shift(), split?.pop()]
  return Number(leftValue) < Number(rightValue)
}

const combinedRuleOptions = {
  merchant: {
    label: 'Merchant',
    placeholder: 'Merchant',
    allowCount: num => num <= 1,
    validate: yup.string().required(),
    operator: {
      label: 'Merchant Condition',
      placeholder: 'Merchant Condition',
      validate: yup.string().required(),
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
      validate: yup.string().required()
    },
    operatorValue: {
      '~~': {
        label: 'Merchant name tag',
        placeholder: 'Adidas, Nike, Puma',
        type: 'tag',
        validate: yup.string().required()
      },
      '~=': {
        label: 'Merchant name tag',
        placeholder: 'Adidas, Nike, Puma',
        type: 'tag',
        validate: yup.string().required()
      }
    }
  },
  amount: {
    label: 'Amount',
    placeholder: 'Amount',
    validate: yup.string().required(),
    allowCount: num => num <= 1,
    operator: {
      label: 'Amount Condition',
      placeholder: 'Amount Condition',
      validate: yup.string().required(),
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
      validate: yup.number().positive().required()
    },
    operatorValue: {
      '><': {
        label: 'Between',
        placeholder: '5-100',
        type: 'between',
        suffix: '€',
        suffixSpace: 1,
        validate: yup
          .mixed()
          .test(
            'between',
            'Invalid range',
            value =>
              betweenRequired(value) && betweenPositive(value) && minMax(value)
          )
      }
    }
  }
}

const absoluteRuleOptions = {
  timespan: {
    label: 'Timespan',
    placeholder: 'Timespan',
    validate: yup.string().required(),
    operator: {
      label: 'Timespan Condition',
      placeholder: 'Timespan Condition',
      validate: yup.string().required(),
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
      validate: yup.number().positive().required()
    }
  },
  count: {
    label: 'Transaction Number',
    placeholder: 'Transaction Number',
    validate: yup.string().required(),
    operator: {
      label: 'Transaction Number Condition',
      placeholder: '1',
      validate: yup.string().required(),
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
      validate: yup.number().positive().required()
    }
  }
}

const FormikContextViewer = () => {
  const [context] = useField('cashbacks')

  return <pre>{JSON.stringify(context.value, null, 2)}</pre>
}

const createValidationSchema = (combinedRuleOptions, absoluteRuleOptions) =>
  yup.object().shape({
    cashbacks: createRuleBuilderYupSchema(
      combinedRuleOptions,
      absoluteRuleOptions
    )
  })

export const RuleBuilderExample = () => (
  <Box p={4} bg='white'>
    <Form
      onSubmit={({ cashbacks }) => {
        // eslint-disable-next-line no-console
        console.log(exportRuleBuilder(cashbacks))
        action('form submitted')()
      }}
      initialValues={{ cashbacks: {} }}
      validationSchema={createValidationSchema(
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
          operator: '><',
          value: '61,123'
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
