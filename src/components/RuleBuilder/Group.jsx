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
  typeLabel,
  advancedTargetingLabel,
  hideAdvancedTargeting,
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
      {Object.keys(group.combined).map((ruleId, ruleIndex) => (
        <Box key={ruleId}>
          <Rule
            disabled={disabled}
            name={`${name}.combined.${ruleId}`}
            removeRuleIcon={canDelete && removeRuleIcon}
            rule={group.combined[ruleId]}
            options={combinedRuleOptions}
            onRemove={onRemoveRule(group.id, ruleId)}
            typeLabel={typeLabel}
          />
          {ruleIndex < Object.keys(group.combined).length - 1 && (
            <CombinatorField
              name={`${name}.combinator`}
              options={completeCombinatorOptions}
              disabled={disabled}
              mb={4}
            />
          )}
        </Box>
      ))}

      {disabled ? (
        advancedTargeting ? (
          <Combinator
            options={andCombinatorOptions}
            value='and'
            disabled={disabled}
            mb={4}
          />
        ) : null
      ) : (
        <Flex my={4}>
          <Button
            variant='link'
            disabled={disabled}
            onClick={onAddRule(group.id)}
            mr={8}>
            {addRuleLabel}
          </Button>

          {!hideAdvancedTargeting && (
            <CheckboxField
              label={advancedTargetingLabel}
              name={`${name}.advancedTargeting`}
              disabled={disabled}
            />
          )}
        </Flex>
      )}

      {advancedTargeting &&
        Object.keys(group.absolute).map((ruleId, ruleIndex) => (
          <Box key={ruleId}>
            <Rule
              disabled={disabled}
              name={`${name}.absolute.${ruleId}`}
              rule={group.absolute[ruleId]}
              options={absoluteRuleOptions}
              onRemove={onRemoveRule(group.id, ruleId)}
              typeLabel={typeLabel}
              isAbsolute
            />
            {ruleIndex < Object.keys(group.absolute).length - 1 && (
              <Combinator
                options={andCombinatorOptions}
                value='and'
                disabled={disabled}
                mb={4}
              />
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
  typeLabel: PropTypes.node,
  advancedTargetingLabel: PropTypes.node,
  hideAdvancedTargeting: PropTypes.bool,
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
