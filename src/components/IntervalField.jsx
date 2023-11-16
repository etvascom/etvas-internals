import React, { useCallback, useEffect, useMemo } from 'react'

import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import { Flex, SubdomainInput, Typography } from '@etvas/etvaskit'

import { SubLabel } from './TagInput/SubLabel'

export const IntervalField = ({
  id,
  name,
  label,
  placeholder,
  noPreserveSpace,
  disabled,
  separator,
  stringSeparator,
  suffix,
  suffixSpace,
  ...props
}) => {
  const [{ value }, { touched, error }, { setValue }] = useField(name)
  const { submitCount } = useFormikContext()

  const _error = touched && error
  const displayedError = submitCount > 0 ? _error : value && _error

  const [idLeft, idRight] = useMemo(() => {
    const idOrNameId = id || `${name}-${v4()}`
    return [`${idOrNameId}-left`, `${idOrNameId}-right`]
  }, [id, name])

  useEffect(() => {
    if (value && !value?.toString().includes(stringSeparator)) {
      setValue(`${value}${stringSeparator}`)
    }
  }, [value, setValue, stringSeparator])

  const placeholderSplit = placeholder?.split('-')
  const [placeholderLeft, placeholderRight] = [
    placeholderSplit?.shift(),
    placeholderSplit?.pop()
  ]

  const valueSplit = value?.toString().split(stringSeparator)
  const [leftValue, rightValue] = [valueSplit?.shift(), valueSplit?.pop()]

  const handleLeftChange = useCallback(
    event => {
      const val = event.target.value
      const right = value ? value?.split(stringSeparator).pop() : ''
      setValue(`${val}${stringSeparator}${right}`)
    },
    [setValue, value, stringSeparator]
  )

  const handleRightChange = useCallback(
    event => {
      const val = event.target.value
      const left = value ? value?.split(stringSeparator).shift() : ''
      setValue(`${left}${stringSeparator}${val}`)
    },
    [setValue, value, stringSeparator]
  )

  return (
    <Flex
      width={1}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      {...props}>
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
          error={!!displayedError}
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
          error={!!displayedError}
          noBottomSpace
          required
        />
      </Flex>
      <SubLabel noPreserveSpace={noPreserveSpace} variant='error' mt={1}>
        {displayedError}
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
  disabled: PropTypes.bool,
  separator: PropTypes.string,
  stringSeparator: PropTypes.string,
  suffix: PropTypes.string,
  suffixSpace: PropTypes.number
}

IntervalField.defaultProps = {
  separator: '-',
  stringSeparator: ','
}
