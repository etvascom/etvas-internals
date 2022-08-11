import React from 'react'
import PropTypes from 'prop-types'
import { Button, Box, Flex, CheckboxField } from '@etvas/etvaskit'
import { Rule } from './Rule'
import { Combinator } from './Combinator'

export const Group = ({
  disabled,
  group,
  advancedTargeting,
  name,
  combinedRuleOptions,
  absoluteRuleOptions,
  removeRuleIcon,
  addRuleLabel,
  advancedTargetingLabel,
  onRemoveRule,
  onAddRule
}) => (
  <Box bg='baseGrayLightest' p={4}>
    {group.combined.map((rule, ruleIndex) => (
      <>
        <Rule
          key={rule.id}
          name={`${name}.combined[${ruleIndex}]`}
          removeRuleIcon={removeRuleIcon}
          rule={rule}
          options={combinedRuleOptions}
          onRemove={onRemoveRule(group.id, rule.id)}
        />
        {ruleIndex < group.combined.length - 1 && (
          <Combinator
            name={`${name}.combinator`}
            options={completeCombinatorOptions}
            mb={4}
          />
        )}
      </>
    ))}

    <Flex my={4}>
      <Button
        variant='link'
        disabled={disabled}
        onClick={onAddRule(group.id)}
        mr={8}>
        {addRuleLabel}
      </Button>

      <CheckboxField
        label={advancedTargetingLabel}
        name={`${name}.advancedTargeting`}
      />
    </Flex>

    {advancedTargeting &&
      group.absolute.map((rule, ruleIndex) => (
        <>
          <Rule
            key={rule.id}
            name={`${name}.absolute[${ruleIndex}]`}
            rule={rule}
            options={absoluteRuleOptions}
            onRemove={onRemoveRule(group.id, rule.id)}
          />
          {ruleIndex < group.absolute.length - 1 && (
            <Combinator options={andCombinatorOptions} mb={4} />
          )}
        </>
      ))}
  </Box>
)

Group.propTypes = {
  advancedTargeting: PropTypes.bool,
  combinedRuleOptions: PropTypes.object,
  absoluteRuleOptions: PropTypes.object,
  addRuleLabel: PropTypes.node,
  advancedTargetingLabel: PropTypes.node,
  onRemoveRule: PropTypes.func,
  onAddRule: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  removeRuleIcon: PropTypes.string,
  group: PropTypes.object
}

const andCombinatorOptions = [{ value: 'and', label: 'AND' }]

const completeCombinatorOptions = [
  { value: 'and', label: 'AND' },
  { value: 'or', label: 'OR' }
]
