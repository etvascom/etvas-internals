import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  DropdownField,
  TextField,
  Button,
  Icon,
  Box
} from '@etvas/etvaskit'

export const Rule = ({
  disabled,
  rule,
  name,
  options,
  removeRuleIcon,
  onRemove
}) => {
  const typeOptions = Object.keys(options).map(type => ({
    label: options[type].label,
    value: type
  }))

  const type = useMemo(() => rule.type, [rule])

  const label = useMemo(() => options[type].label, [options, type])
  const placeholder = useMemo(() => options[type].placeholder, [options, type])
  const operator = useMemo(() => options[type].operator, [options, type])
  const value = useMemo(() => options[type].value, [options, type])

  return (
    <Flex width={1} justifyContent='space-between' alignItems='center'>
      <DropdownField
        disabled={disabled || !removeRuleIcon}
        options={typeOptions}
        name={`${name}.type`}
        placeholder={placeholder}
        label={label}
        required
        mr={4}
      />
      <DropdownField
        disabled={disabled}
        options={operator.options}
        name={`${name}.${type}Operator`}
        placeholder={operator.placeholder}
        label={operator.label}
        required
        mr={4}
      />
      <TextField
        disabled={disabled}
        name={`${name}.${type}Value`}
        type={value.type}
        label={value.label}
        placeholder={value.placeholder}
        required
      />
      {!disabled && removeRuleIcon ? (
        <Button variant='link' ml={4} onClick={onRemove}>
          <Icon name={removeRuleIcon} size='large' />
        </Button>
      ) : (
        <Box ml={12} bg='red' />
      )}
    </Flex>
  )
}

Rule.propTypes = {
  options: PropTypes.object,
  onRemove: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  removeRuleIcon: PropTypes.string,
  rule: PropTypes.object
}
