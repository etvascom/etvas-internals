import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Button, Box, Flex, CheckboxField } from '@etvas/etvaskit'
import { Rule } from './Rule'
import { Combinator } from './Combinator'
import { CombinatorField } from './CombinatorField'

export const Group = ({
  disabled,
  canDelete,
  group,
  advancedTargeting,
  name,
  combinedRuleOptions,
  absoluteRuleOptions,
  removeRuleIcon,
  addRuleLabel,
  advancedTargetingLabel,
  andLabel,
  orLabel,
  onRemoveRule,
  onAddRule
}) => {
  const andCombinatorOptions = useMemo(
    () => [{ value: 'and', label: andLabel }],
    [andLabel]
  )

  const completeCombinatorOptions = useMemo(
    () => [
      { value: 'and', label: andLabel },
      { value: 'or', label: orLabel }
    ],
    [andLabel, orLabel]
  )

  return (
    <Box bg='baseGrayLightest' p={4}>
      {group.combined.map((rule, ruleIndex) => (
        <Box key={rule.id}>
          <Rule
            disabled={disabled}
            name={`${name}.combined[${ruleIndex}]`}
            removeRuleIcon={canDelete && removeRuleIcon}
            rule={rule}
            options={combinedRuleOptions}
            onRemove={onRemoveRule(group.id, rule.id)}
          />
          {ruleIndex < group.combined.length - 1 && (
            <CombinatorField
              name={`${name}.combinator`}
              options={completeCombinatorOptions}
              mb={4}
            />
          )}
        </Box>
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
          <Box key={rule.id}>
            <Rule
              disabled={disabled}
              name={`${name}.absolute[${ruleIndex}]`}
              rule={rule}
              options={absoluteRuleOptions}
              onRemove={onRemoveRule(group.id, rule.id)}
              isAbsolute
            />
            {ruleIndex < group.absolute.length - 1 && (
              <Combinator options={andCombinatorOptions} value='and' mb={4} />
            )}
          </Box>
        ))}
    </Box>
  )
}

Group.propTypes = {
  advancedTargeting: PropTypes.bool,
  combinedRuleOptions: PropTypes.object,
  absoluteRuleOptions: PropTypes.object,
  addRuleLabel: PropTypes.node,
  advancedTargetingLabel: PropTypes.node,
  andLabel: PropTypes.node,
  orLabel: PropTypes.node,
  onRemoveRule: PropTypes.func,
  onAddRule: PropTypes.func,
  disabled: PropTypes.bool,
  canDelete: PropTypes.bool,
  name: PropTypes.string,
  removeRuleIcon: PropTypes.string,
  group: PropTypes.object
}
