import { getRuleDetails } from './rule'

export const validateRuleBuilder = (
  field,
  combinedRuleOptions,
  absoluteRuleOptions
) => values => {
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
  rules.reduce((acc, rule, ruleIndex) => {
    const { type, operator, value, operatorKey, valueKey } = getRuleDetails(
      rule
    )

    const failedOperatorValidator = options[type].operator.validate.find(item =>
      item.validator(operator)
    )

    if (failedOperatorValidator) {
      acc[ruleIndex] = acc[ruleIndex] ?? {}
      acc[ruleIndex][operatorKey] = failedOperatorValidator.error
    }

    const failedValueValidator = options[type].value.validate.find(item =>
      item.validator(value)
    )

    if (failedValueValidator) {
      acc[ruleIndex] = acc[ruleIndex] ?? {}
      acc[ruleIndex][valueKey] = failedValueValidator.error
    }

    return acc
  }, [])
