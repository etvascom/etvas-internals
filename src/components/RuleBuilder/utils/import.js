import { v4 as uuid } from 'uuid'
import { getRuleDetails } from './rule'

// this accepts the common format as input
// and returns a formik acceptable input
export const importRuleBuilder = (
  { combinator, groups },
  combinedRuleOptions,
  absoluteRuleOptions
) => ({
  combinator,
  groups: importGroups(groups, combinedRuleOptions, absoluteRuleOptions)
})

const importGroups = (groups, combinedRuleOptions, absoluteRuleOptions) =>
  groups.map(({ not, combinator, absolute, combined }) => ({
    not,
    combinator,
    id: uuid(),
    advancedTargeting: !!absolute.length,
    combined: importCombinedRules(combined, combinedRuleOptions),
    absolute: importAbsoluteRules(absolute, absoluteRuleOptions)
  }))

const importCombinedRules = (rules, options) =>
  Object.fromEntries(
    rules.map(({ keypath, operator, value }) => {
      const defaultValues = Object.keys(options).reduce((acc, type) => {
        const { operatorKey, valueKey } = getRuleDetails({ type })

        return {
          ...acc,
          [operatorKey]: options[type].operator.options[0].value,
          [valueKey]: ''
        }
      }, {})

      const operatorKey = `${keypath}Operator`
      const valueKey = `${keypath}Value`
      const parsedValue = JSON.parse(value)

      return [
        uuid(),
        {
          type: keypath,
          ...defaultValues,
          [operatorKey]: operator,
          [valueKey]: parsedValue
        }
      ]
    })
  )

const importAbsoluteRules = (rules, options) =>
  rules.length
    ? Object.fromEntries(
        Object.keys(options).map(type => {
          const { operatorKey, valueKey } = getRuleDetails({ type })
          const rule = rules.find(rule => rule.keypath === type)
          const { value } = rule
          const parsedValue = rule && JSON.parse(value)

          return [
            uuid(),
            {
              type,
              [operatorKey]: rule?.operator,
              [valueKey]: parsedValue
            }
          ]
        })
      )
    : null
