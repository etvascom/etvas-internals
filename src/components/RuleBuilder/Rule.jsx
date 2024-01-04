import { useMemo } from 'react'

import { useField } from 'formik'
import PropTypes from 'prop-types'

import {
  Box,
  Button,
  DropdownField,
  Flex,
  Icon,
  SubdomainField,
  TextField
} from '@etvas/etvaskit'

import { useClearField } from '../../hooks'
import { IntervalField } from '../IntervalField'
import { TagField } from '../TagInput/TagField'

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

  const typeConfig = options[type]

  const valuePlaceholder = useMemo(() => value.placeholder, [value])

  const isSuffixType = useMemo(() => value.suffix, [value])
  const [{ value: fieldValue }, , { setValue: setRuleValue }] = useField(
    `${name}.${type}Value`
  )

  const onChangeRuleValue = useClearField([setRuleValue])

  const handleOperatorChange = newValue => {
    if (operatorValue === newValue) {
      return
    }
    setOperatorValue(newValue)
    onChangeRuleValue()
  }

  return (
    <Flex width={1} justifyContent='space-between' alignItems='flex-start'>
      <DropdownField
        disabled={disabled}
        options={typeOptions}
        name={`${name}.type`}
        placeholder={typeConfig.placeholder}
        label={typeLabel}
        required
        id={typeConfig.id}
        showTooltip={!!typeConfig.tooltip}
        mr={4}
      />
      {typeConfig.tooltip}
      <DropdownField
        disabled={disabled}
        options={operator.options}
        name={`${name}.${type}Operator`}
        placeholder={operator.placeholder}
        label={operator.label}
        onChange={handleOperatorChange}
        id={operator.id}
        showTooltip={!!operator.renderTooltip}
        required
        mr={4}
      />
      {operator.renderTooltip && operator.renderTooltip(operatorValue)}

      {value.type === 'searchMultiple' ? (
        <DropdownField
          {...operatorValueWidthProps}
          disabled={disabled}
          options={value.options}
          name={`${name}.${type}Value`}
          placeholder={valuePlaceholder}
          label={value.label}
          multiple
          required
          id={typeConfig.value.id}
          showTooltip={!!value.tooltip}
        />
      ) : value.type === 'tag' ? (
        <TagField
          {...operatorValueWidthProps}
          disabled={disabled}
          name={`${name}.${type}Value`}
          type='text'
          label={value.label}
          placeholder={valuePlaceholder}
          separator=','
          required
          id={typeConfig.value.id}
          showTooltip={!!value.tooltip}
        />
      ) : value.type === 'between' ? (
        <IntervalField
          {...operatorValueWidthProps}
          disabled={disabled}
          name={`${name}.${type}Value`}
          label={value.label}
          placeholder={valuePlaceholder}
          suffix={value.suffix}
          suffixSpace={value.suffixSpace || 0}
          required
          id={typeConfig.value.id}
          showTooltip={!!value.tooltip}
        />
      ) : isSuffixType ? (
        <SubdomainField
          {...operatorValueWidthProps}
          disabled={disabled}
          name={`${name}.${type}Value`}
          type={value.type}
          label={value.label}
          placeholder={valuePlaceholder}
          suffix={value.suffix}
          suffixSpace={value.suffixSpace || 0}
          prefix=''
          required
          id={typeConfig.value.id}
          showTooltip={!!value.tooltip}
        />
      ) : (
        <TextField
          {...operatorValueWidthProps}
          disabled={disabled}
          name={`${name}.${type}Value`}
          type={value.type}
          label={value.label}
          placeholder={valuePlaceholder}
          suffix={value.suffix}
          suffixSpace={value.suffixSpace || 0}
          id={typeConfig.value.id}
          showTooltip={!!value.tooltip}
          required
        />
      )}
      {value.tooltip ||
        (value.renderTooltip && value.renderTooltip(fieldValue))}
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

const operatorValueWidthProps = {
  width: '31%',
  minWidth: '31%',
  maxWidth: '31%'
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
