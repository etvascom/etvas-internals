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
  Object.keys(rules).map(ruleId => {
    const rule = rules[ruleId]

    const { type, operator, value } = getRuleDetails(rule)

    const parse = value => {
      if (options[type].value.type !== 'number') {
        return value
      }

      if (options[type]?.operatorValue[operator]?.type !== 'between') {
        return parseInt(value, 10)
      }

      const split = value.split(',')
      return `${parseInt(split?.shift(), 10)},${parseInt(split?.pop(), 10)}`
    }

    const parsedValue = JSON.stringify(parse(value))

    return {
      keypath: type,
      operator,
      value: parsedValue
    }
  })
