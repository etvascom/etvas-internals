import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  DropdownField,
  TextField,
  Button,
  Icon,
  Box,
  SubdomainField
} from '@etvas/etvaskit'

export const Rule = ({
  disabled,
  rule,
  name,
  options,
  removeRuleIcon,
  isAbsolute,
  typeLabel,
  onRemove
}) => {
  const allTypeOptions = useMemo(
    () =>
      Object.keys(options).map(type => ({
        label: options[type].label,
        value: type
      })),
    [options]
  )

  const typeOptions = useMemo(
    () =>
      isAbsolute
        ? allTypeOptions.filter(option => option.value === rule.type)
        : allTypeOptions,
    [allTypeOptions, isAbsolute, rule]
  )

  const type = useMemo(() => rule.type, [rule])

  const placeholder = useMemo(() => options[type].placeholder, [options, type])
  const operator = useMemo(() => options[type].operator, [options, type])
  const value = useMemo(() => options[type].value, [options, type])

  const isSuffixType = useMemo(() => value.suffix, [value])

  return (
    <Flex width={1} justifyContent='space-between' alignItems='center'>
      <DropdownField
        disabled={disabled}
        options={typeOptions}
        name={`${name}.type`}
        placeholder={placeholder}
        label={typeLabel}
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

      {isSuffixType ? (
        <SubdomainField
          disabled={disabled}
          name={`${name}.${type}Value`}
          type={value.type}
          label={value.label}
          placeholder={value.placeholder}
          suffix={value.suffix}
          suffixSpace={value.suffixSpace || 0}
          prefix=''
          required
        />
      ) : (
        <TextField
          disabled={disabled}
          name={`${name}.${type}Value`}
          type={value.type}
          label={value.label}
          placeholder={value.placeholder}
          required
        />
      )}

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
  isAbsolute: PropTypes.bool,
  name: PropTypes.string,
  removeRuleIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  typeLabel: PropTypes.node,
  rule: PropTypes.object
}
