import * as yup from 'yup'

import { getRuleDetails } from './rule'

export const createRuleBuilderYupSchema = (
  combinedRuleOptions,
  absoluteRuleOptions
) => {
  const groupSchema = yup.object().shape({
    combinator: yup.string().required(),
    not: yup.boolean().required(),
    combined: createRulesYupSchema(combinedRuleOptions),
    absolute: yup
      .mixed()
      .nullable()
      .when('advancedTargeting', {
        is: true,
        then: () => createRulesYupSchema(absoluteRuleOptions),
        otherwise: schema => schema.notRequired()
      })
  })

  const ruleBuilderSchema = yup.object().shape({
    combinator: yup.string().required(),
    groups: yup.array().of(groupSchema)
  })

  return ruleBuilderSchema
}

const createRulesYupSchema = options =>
  yup.lazy(value =>
    yup.object().shape(
      mapObject(value, rule => {
        const { type, operator, operatorKey, valueKey } = getRuleDetails(rule)

        const optionValue =
          options[type]?.operatorValue?.[operator] ?? options[type].value

        const operatorValidationRule = options[type].operator.validate
        const valueValidationRule = optionValue.validate

        return yup
          .object()
          .shape({
            [valueKey]: valueValidationRule,
            [operatorKey]: operatorValidationRule
          })
          .required()
      })
    )
  )

const mapObject = (object, callback) =>
  Object.keys(object).reduce((acc, key) => {
    acc[key] = callback(object[key], key)
    return acc
  }, {})
