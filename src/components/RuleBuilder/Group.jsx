import React from 'react'
import PropTypes from 'prop-types'
import { Button, Box } from '@etvas/etvaskit'
import { Rule } from './Rule'
import { Combinator } from './Combinator'

export const Group = ({
  disabled,
  group,
  name,
  options,
  removeRuleIcon,
  addRuleLabel,
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
          options={options}
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
    <Button
      variant='link'
      mt={4}
      disabled={disabled}
      onClick={onAddRule(group.id)}>
      {addRuleLabel}
    </Button>
  </Box>
)

Group.propTypes = {
  options: PropTypes.object,
  addRuleLabel: PropTypes.node,
  onRemoveRule: PropTypes.func,
  onAddRule: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  removeRuleIcon: PropTypes.string,
  group: PropTypes.object
}

const completeCombinatorOptions = [
  { value: 'and', label: 'AND' },
  { value: 'or', label: 'OR' }
]
