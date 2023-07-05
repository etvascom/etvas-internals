import { getRuleDetails } from './rule'

export const validateRuleBuilder =
  (field, combinedRuleOptions, absoluteRuleOptions) => values => {
    const errors = []

    values[field].groups.forEach((group, groupIndex) => {
      const combinedErrors = generateRuleErrors(
        group.combined,
        combinedRuleOptions
      )

      const absoluteErrors = group.advancedTargeting
        ? generateRuleErrors(group.absolute, absoluteRuleOptions)
        : []

      if (Object.keys(combinedErrors).length) {
        errors[groupIndex] = errors[groupIndex] ?? {}
        errors[groupIndex].combined = combinedErrors
      }

      if (Object.keys(absoluteErrors).length) {
        errors[groupIndex] = errors[groupIndex] ?? {}
        errors[groupIndex].absolute = absoluteErrors
      }
    })

    return Object.keys(errors).length ? { [field]: { groups: errors } } : {}
  }

const generateRuleErrors = (rules, options) =>
  Object.keys(rules).reduce((acc, ruleId) => {
    const rule = rules[ruleId]

    const { type, operator, value, operatorKey, valueKey } =
      getRuleDetails(rule)

    const failedOperatorValidator = options[type].operator.validate.find(item =>
      item.validator(operator)
    )

    if (failedOperatorValidator) {
      acc[ruleId] = acc[ruleId] ?? {}
      acc[ruleId][operatorKey] = failedOperatorValidator.error
    }

    const optionValue =
      options[type]?.operatorValue?.[operator] ?? options[type].value

    const failedValueValidator = optionValue.validate.find(item =>
      item.validator(value)
    )

    if (failedValueValidator) {
      acc[ruleId] = acc[ruleId] ?? {}
      acc[ruleId][valueKey] = failedValueValidator.error
    }

    return acc
  }, {})
