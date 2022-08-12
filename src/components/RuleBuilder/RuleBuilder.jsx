import React, { useCallback, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import { useField } from 'formik'
import { cloneDeep } from 'lodash'
import { Box, Typography, Button } from '@etvas/etvaskit'
import { Group } from './Group'
import { CombinatorField } from './CombinatorField'
import { getRuleDetails } from './utils/rule'

export const RuleBuilder = ({
  name,
  disabled,
  label,
  andLabel,
  orLabel,
  addRuleLabel,
  addGroupLabel,
  advancedTargetingLabel,
  removeRuleIcon,
  combinedRuleOptions,
  absoluteRuleOptions,
  ...rest
}) => {
  // eslint-disable-next-line no-unused-vars
  const [{ value: data }, _, { setValue: setData }] = useField(name)

  const createNewRule = useCallback(() => {
    const [type] = Object.keys(combinedRuleOptions)

    const defaultOperatorValues = Object.keys(combinedRuleOptions).reduce(
      (acc, type) => {
        const { operatorKey, valueKey } = getRuleDetails({ type })

        return {
          ...acc,
          [operatorKey]: combinedRuleOptions[type].operator.options[0].value,
          [valueKey]: ''
        }
      },
      {}
    )

    return {
      id: uuid(),
      type,
      ...defaultOperatorValues
    }
  }, [combinedRuleOptions])

  const createAbsoluteRules = useCallback(
    () =>
      Object.keys(absoluteRuleOptions).map(type => {
        const { operatorKey, valueKey } = getRuleDetails({ type })

        return {
          id: uuid(),
          type,
          [operatorKey]: absoluteRuleOptions[type].operator.options[0].value,
          [valueKey]: ''
        }
      }),
    [absoluteRuleOptions]
  )

  const createNewGroup = useCallback(
    () => ({
      id: uuid(),
      not: false,
      advancedTargeting: false,
      absolute: createAbsoluteRules(),
      combined: [createNewRule()],
      combinator: 'and'
    }),
    [createNewRule, createAbsoluteRules]
  )

  const handleAddGroup = () => {
    setData({ ...data, groups: [...data.groups, createNewGroup()] })
  }

  useEffect(() => {
    if (!Object.keys(data).length) {
      setData({ combinator: 'and', groups: [createNewGroup()] })
    }
  }, [data, setData, createNewGroup])

  const handleRemoveRule = (groupId, ruleId) => () => {
    const groups = cloneDeep(data.groups).reduce((acc, group) => {
      if (group.id === groupId) {
        group.combined = group.combined.filter(rule => rule.id !== ruleId)
      }

      // only add groups with at least one condition
      // (delete group on last rule delete)
      if (group.combined.length) {
        acc.push(group)
      }

      return acc
    }, [])

    setData({ ...data, groups })
  }

  const handleAddRule = groupId => () => {
    const groups = cloneDeep(data.groups).map(group => {
      if (group.id === groupId) {
        group.combined.push(createNewRule())
      }

      return group
    })

    setData({ ...data, groups })
  }

  const canDelete = useMemo(
    () => data.groups?.length > 1 || data.groups?.[0].combined.length > 1,
    [data]
  )

  const combinatorOptions = useMemo(
    () => [
      { value: 'and', label: andLabel },
      { value: 'or', label: orLabel }
    ],
    [andLabel, orLabel]
  )

  return (
    <Box {...rest}>
      <Typography variant='base12Bold' color='baseGrayLight' mb={1}>
        {label}
      </Typography>

      {data.groups?.map((group, index) => (
        <Box key={group.id}>
          <Group
            disabled={disabled}
            group={group}
            name={`${name}.groups[${index}]`}
            canDelete={canDelete}
            advancedTargeting={group.advancedTargeting}
            combinedRuleOptions={combinedRuleOptions}
            absoluteRuleOptions={absoluteRuleOptions}
            removeRuleIcon={removeRuleIcon}
            addRuleLabel={addRuleLabel}
            advancedTargetingLabel={advancedTargetingLabel}
            andLabel={andLabel}
            orLabel={orLabel}
            onRemoveRule={handleRemoveRule}
            onAddRule={handleAddRule}
          />
          {index < data.groups.length - 1 && (
            <CombinatorField
              name={`${name}.combinator`}
              options={combinatorOptions}
              disabled={disabled}
              my={4}
            />
          )}
        </Box>
      ))}

      {!disabled && (
        <Button
          variant='link'
          mt={4}
          disabled={disabled}
          onClick={handleAddGroup}>
          {addGroupLabel}
        </Button>
      )}
    </Box>
  )
}

const validatorProps = PropTypes.shape({
  validator: PropTypes.func,
  error: PropTypes.node
})

const ruleOptionsProps = PropTypes.objectOf(
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
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
      )
    }),
    value: PropTypes.shape({
      label: PropTypes.node,
      placeholder: PropTypes.string,
      type: PropTypes.string,
      suffix: PropTypes.string,
      validate: PropTypes.arrayOf(validatorProps)
    })
  })
).isRequired

RuleBuilder.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.node.isRequired,
  andLabel: PropTypes.node.isRequired,
  orLabel: PropTypes.node.isRequired,
  addRuleLabel: PropTypes.node.isRequired,
  addGroupLabel: PropTypes.node.isRequired,
  advancedTargetingLabel: PropTypes.node.isRequired,
  removeRuleIcon: PropTypes.string.isRequired,
  combinedRuleOptions: ruleOptionsProps,
  absoluteRuleOptions: ruleOptionsProps
}

RuleBuilder.defaultProps = {
  disabled: false
}
