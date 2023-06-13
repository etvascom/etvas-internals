import React, { useMemo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import {
  Flex,
  DropdownField,
  TextField,
  Button,
  Icon,
  Box,
  SubdomainField
} from '@etvas/etvaskit'
import { TagField } from '../TagInput/TagField'
import { IntervalField } from '../IntervalField'
import { useClearField } from '../../hooks'

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

  const operatorName = useMemo(() => `${name}.${type}Operator`, [name, type])
  const [{ value: operatorValue }, , { setValue: setOperatorValue }] =
    useField(operatorName)
  const operator = useMemo(() => options[type].operator, [options, type])
  const value = useMemo(
    () => options[type]?.operatorValue?.[operatorValue] ?? options[type].value,
    [options, type, operatorValue]
  )

  const typePlaceholder = useMemo(
    () => options[type].placeholder,
    [options, type]
  )

  const valuePlaceholder = useMemo(() => value.placeholder, [value])

  const isSuffixType = useMemo(() => value.suffix, [value])
  const [, , { setValue: setRuleValue }] = useField(`${name}.${type}Value`)

  const onChangeRuleValue = useClearField([setRuleValue])
  const [shouldReset, setShouldReset] = useState(false)

  const handleOperatorChange = newValue => {
    if (operatorValue === newValue) {
      return
    }
    setOperatorValue(newValue)
    setShouldReset(true)
  }

  useEffect(() => {
    if (shouldReset) {
      onChangeRuleValue()
      setShouldReset(false)
    }
  }, [onChangeRuleValue, shouldReset])

  return (
    <Flex width={1} justifyContent='space-between' alignItems='flex-start'>
      <DropdownField
        disabled={disabled}
        options={typeOptions}
        name={`${name}.type`}
        placeholder={typePlaceholder}
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
        onChange={handleOperatorChange}
        required
        mr={4}
      />

      {value.type === 'tag' ? (
        <TagField
          disabled={disabled}
          name={`${name}.${type}Value`}
          type='text'
          label={value.label}
          placeholder={valuePlaceholder}
          separator=','
          required
        />
      ) : value.type === 'between' ? (
        <IntervalField
          disabled={disabled}
          name={`${name}.${type}Value`}
          label={value.label}
          placeholder={valuePlaceholder}
          suffix={value.suffix}
          suffixSpace={value.suffixSpace || 0}
          required
        />
      ) : isSuffixType ? (
        <SubdomainField
          disabled={disabled}
          name={`${name}.${type}Value`}
          type={value.type}
          label={value.label}
          placeholder={valuePlaceholder}
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
          placeholder={valuePlaceholder}
          suffix={value.suffix}
          suffixSpace={value.suffixSpace || 0}
          required
        />
      )}

      {!disabled && removeRuleIcon ? (
        <Button variant='link' ml={4} mt={6} onClick={onRemove}>
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
