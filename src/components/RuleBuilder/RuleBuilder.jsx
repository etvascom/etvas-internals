import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import { useField } from 'formik'
import { cloneDeep } from 'lodash'
import { Box, Typography, Button } from '@etvas/etvaskit'
import { Group } from './Group'
import { Combinator } from './Combinator'

export const RuleBuilder = ({
  name,
  label,
  addRuleLabel,
  addGroupLabel,
  removeRuleIcon,
  options,
  disabled,
  ...rest
}) => {
  // eslint-disable-next-line no-unused-vars
  const [{ value: groups }, meta, { setValue: setGroups }] = useField(name)

  const createNewRule = useCallback(
    () => ({
      id: uuid(),
      type: Object.keys(options)[0]
    }),
    [options]
  )

  const handleAddGroup = useCallback(() => {
    const newGroup = {
      id: uuid(),
      not: false,
      absolute: [],
      combined: [createNewRule()],
      combinator: 'and'
    }

    setGroups([...groups, newGroup])
  }, [groups, setGroups, createNewRule])

  useEffect(() => {
    if (!groups.length) {
      handleAddGroup()
    }
  }, [groups, setGroups, handleAddGroup])

  const handleRemoveRule = (groupId, ruleId) => () => {
    const groupsClone = cloneDeep(groups).map(group => {
      if (group.id === groupId) {
        group.combined = group.combined.filter(rule => rule.id !== ruleId)
      }

      return group
    })

    setGroups(groupsClone)
  }

  const handleAddRule = groupId => () => {
    const groupsClone = cloneDeep(groups).map(group => {
      if (group.id === groupId) {
        group.combined.push(createNewRule())
      }

      return group
    })

    setGroups(groupsClone)
  }

  return (
    <Box {...rest}>
      <Typography variant='base12Bold' color='baseGrayLight' mb={1}>
        {label}
      </Typography>

      {groups.map((group, index) => (
        <>
          <Group
            key={group.id}
            disabled={disabled}
            group={group}
            name={`${name}[${index}]`}
            options={options}
            removeRuleIcon={removeRuleIcon}
            addRuleLabel={addRuleLabel}
            onRemove={() => {}}
            onRemoveRule={handleRemoveRule}
            onAddRule={handleAddRule}
          />
          {index < groups.length - 1 && (
            <Combinator options={andCombinatorOptions} my={4} />
          )}
        </>
      ))}

      <Button
        variant='link'
        mt={4}
        disabled={disabled}
        onClick={handleAddGroup}>
        {addGroupLabel}
      </Button>
    </Box>
  )
}

const validatorProps = PropTypes.shape({
  validator: PropTypes.func,
  error: PropTypes.node
})

RuleBuilder.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  addRuleLabel: PropTypes.node.isRequired,
  addGroupLabel: PropTypes.node.isRequired,
  removeRuleIcon: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.node,
      placeholder: PropTypes.string,
      validate: PropTypes.arrayOf(validatorProps),
      operator: PropTypes.shape({
        label: PropTypes.node,
        placeholder: PropTypes.string,
        validate: PropTypes.arrayOf(validatorProps),
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.oneOf(PropTypes.string, PropTypes.number)
          })
        )
      }),
      value: PropTypes.shape({
        label: PropTypes.node,
        placeholder: PropTypes.string,
        type: PropTypes.string,
        validate: PropTypes.arrayOf(validatorProps)
      })
    })
  ).isRequired
}

RuleBuilder.defaultProps = {
  disabled: false
}

const andCombinatorOptions = [{ value: 'and', label: 'AND' }]
