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

const exportGroups = (groups, absoluteRuleOptions) =>
  groups.map(({ not, absolute, combined, combinator, advancedTargeting }) => ({
    not,
    combinator,
    combined: exportRules(combined),
    absolute: advancedTargeting
      ? exportRules(absolute, absoluteRuleOptions)
      : []
  }))

const exportRules = rules =>
  Object.keys(rules).map(ruleId => {
    const rule = rules[ruleId]

    const { type, operator, value } = getRuleDetails(rule)

    return {
      keypath: type,
      operator,
      value
    }
  })
