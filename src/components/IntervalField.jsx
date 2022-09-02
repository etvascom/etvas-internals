import React, { useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Flex, Input, Typography, SubdomainInput } from '@etvas/etvaskit'
import { SubLabel } from './TagInput/SubLabel'

export const IntervalField = ({
  name,
  label,
  placeholder,
  error,
  noPreserveSpace,
  disabled,
  separator,
  type,
  suffix,
  suffixSpace,
  ...rest
}) => {
  const [{ value }, , { setValue }] = useField(name)

  useEffect(() => {
    if (!value.includes('-')) {
      setValue(`${value}-`)
    }
  }, [value, setValue])

  const placeholderLeft = useMemo(() => placeholder?.split('-')?.shift(), [
    placeholder
  ])

  const placeholderRight = useMemo(() => placeholder?.split('-')?.pop(), [
    placeholder
  ])

  const leftValue = useMemo(() => value?.split('-')?.shift(), [value])
  const rightValue = useMemo(() => value?.split('-')?.pop(), [value])

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
    <>
      <Flex width={1} justifyContent='space-between' alignItems='flex-end'>
        {type === 'text' ? (
          <Input
            placeholder={placeholderLeft}
            label={label}
            value={leftValue}
            onChange={handleLeftChange}
            disabled={disabled}
            noBottomSpace
            required
          />
        ) : (
          <SubdomainInput
            label={label}
            disabled={disabled}
            type='text'
            placeholder={placeholderLeft}
            suffix={suffix}
            suffixSpace={suffixSpace || 0}
            prefix=''
            value={leftValue}
            onChange={handleLeftChange}
            noBottomSpace
            required
          />
        )}
        <Typography variant='base12Bold' px={2} mb='14px'>
          {separator}
        </Typography>
        {type === 'text' ? (
          <Input
            placeholder={placeholderRight}
            value={rightValue}
            onChange={handleRightChange}
            disabled={disabled}
            noBottomSpace
            required
          />
        ) : (
          <SubdomainInput
            disabled={disabled}
            type='text'
            placeholder={placeholderRight}
            suffix={suffix}
            suffixSpace={suffixSpace || 0}
            prefix=''
            value={rightValue}
            onChange={handleRightChange}
            noBottomSpace
            required
          />
        )}
      </Flex>
      <SubLabel noPreserveSpace={noPreserveSpace} variant='error' mt={1}>
        {error}
      </SubLabel>
    </>
  )
}

IntervalField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  noPreserveSpace: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  separator: PropTypes.string,
  suffix: PropTypes.string,
  suffixSpace: PropTypes.number,
  type: PropTypes.oneOf('text', 'suffix')
}

IntervalField.defaultProps = {
  separator: '-',
  type: 'text'
}
