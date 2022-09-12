import React, { useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { v4 } from 'uuid'
import { Flex, Typography, SubdomainInput } from '@etvas/etvaskit'
import { SubLabel } from './TagInput/SubLabel'

export const IntervalField = ({
  id,
  name,
  label,
  placeholder,
  error,
  noPreserveSpace,
  disabled,
  separator,
  suffix,
  suffixSpace
}) => {
  const [{ value }, , { setValue }] = useField(name)

  const [idLeft, idRight] = useMemo(() => {
    const idOrNameId = id || `${name}-${v4()}`
    return [`${idOrNameId}-left`, `${idOrNameId}-right`]
  }, [id, name])

  useEffect(() => {
    if (!value.toString().includes('-')) {
      setValue(`${value}-`)
    }
  }, [value, setValue])

  const placeholderSplit = placeholder?.split('-')
  const [placeholderLeft, placeholderRight] = [
    placeholderSplit?.shift(),
    placeholderSplit?.pop()
  ]

  const valueSplit = value?.toString().split('-')
  const [leftValue, rightValue] = [valueSplit?.shift(), valueSplit?.pop()]

  const handleLeftChange = useCallback(
    event => {
      const val = event.target.value
      setValue(`${val}-${value?.split('-').pop()}`)
    },
    [setValue, value]
  )

  const handleRightChange = useCallback(
    event => {
      const val = event.target.value
      setValue(`${value?.split('-').shift()}-${val}`)
    },
    [setValue, value]
  )

  return (
    <Flex
      width={1}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <Flex width={1} justifyContent='space-between' alignItems='flex-end'>
        <SubdomainInput
          id={idLeft}
          label={label}
          disabled={disabled}
          type='number'
          placeholder={placeholderLeft}
          suffix={suffix}
          suffixSpace={suffixSpace || 0}
          prefix=''
          value={leftValue}
          onChange={handleLeftChange}
          noBottomSpace
          required
        />
        <Typography variant='base12Bold' px={2} mb='14px'>
          {separator}
        </Typography>
        <SubdomainInput
          id={idRight}
          disabled={disabled}
          type='number'
          placeholder={placeholderRight}
          suffix={suffix}
          suffixSpace={suffixSpace || 0}
          prefix=''
          value={rightValue}
          onChange={handleRightChange}
          noBottomSpace
          required
        />
      </Flex>
      <SubLabel noPreserveSpace={noPreserveSpace} variant='error' mt={1}>
        {error}
      </SubLabel>
    </Flex>
  )
}

IntervalField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  noPreserveSpace: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  separator: PropTypes.string,
  suffix: PropTypes.string,
  suffixSpace: PropTypes.number
}

IntervalField.defaultProps = {
  separator: '-'
}
