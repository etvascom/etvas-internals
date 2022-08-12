import { getRuleDetails } from './rule'

// this accepts the formik field data as input
// and returns a common version
export const exportRuleBuilder = (
  { combinator, groups },
  combinedRuleOptions,
  absoluteRuleOptions
) => ({
  combinator,
  groups: exportGroups(groups, combinedRuleOptions, absoluteRuleOptions)
})

const exportGroups = (groups, combinedRuleOptions, absoluteRuleOptions) =>
  groups.map(({ not, absolute, combined, combinator, advancedTargeting }) => ({
    not,
    combinator,
    combined: exportRules(combined, combinedRuleOptions),
    absolute: advancedTargeting
      ? exportRules(absolute, absoluteRuleOptions)
      : []
  }))

const exportRules = (rules, options) =>
  rules.map(rule => {
    const { type, operator, value } = getRuleDetails(rule)

    const parsedValue =
      options[type].value.type === 'number' ? parseInt(value, 10) : value

    return {
      keypath: type,
      operator,
      value: parsedValue
    }
  })
