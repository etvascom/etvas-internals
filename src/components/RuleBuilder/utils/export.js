import { getRuleDetails } from './rule'

// this accepts the formik field data as input
// and returns a common formatted version
export const exportRuleBuilder = ({ combinator, groups }) => ({
  combinator,
  groups: exportGroups(groups)
})

const exportGroups = groups =>
  groups.map(({ not, absolute, combined, combinator, advancedTargeting }) => ({
    not,
    combinator,
    combined: exportRules(combined),
    absolute: advancedTargeting ? exportRules(absolute) : []
  }))

const exportRules = rules =>
  rules.map(rule => {
    const { type, operator, value } = getRuleDetails(rule)

    return {
      keypath: type,
      operator,
      value
    }
  })
