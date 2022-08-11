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
    const { type } = rule
    const operator = `${type}Operator`
    const value = `${type}Value`

    const failedOperatorValidator = options[type].operator.validate.find(item =>
      item.validator(rule[operator])
    )

    if (failedOperatorValidator) {
      acc[ruleIndex] = acc[ruleIndex] ?? {}
      acc[ruleIndex][operator] = failedOperatorValidator.error
    }

    const failedValueValidator = options[type].value.validate.find(item =>
      item.validator(rule[value])
    )

    if (failedValueValidator) {
      acc[ruleIndex] = acc[ruleIndex] ?? {}
      acc[ruleIndex][value] = failedValueValidator.error
    }

    return acc
  }, [])
