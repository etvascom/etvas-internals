import React, { useLayoutEffect, useRef, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Flex, Typography, Icon, Box, styled } from '@etvas/etvaskit'
import { css } from 'styled-components'

import { Years } from './Years'
import { Calendar } from './Calendar'

import { COMMON_FORMAT } from './constants'

export const DateRangePicker = ({
  startOfTime,
  endOfTime,
  value,
  displayFormat,
  yearDisplayStart,
  yearDisplayEnd,
  navigationByYear,
  disabled,
  onChange,
  label,
  placeholder,
  labelYear,
  labelStartDate,
  labelEndDate,
  ...props
}) => {
  const wrapRef = useRef()
  const [isExpanded, setExpanded] = useState(false)

  useLayoutEffect(() => {
    const listener = event => {
      if (
        wrapRef?.current?.contains(event.target) ||
        wrapRef?.current?.contains(event.srcElement)
      ) {
        return
      }
      setExpanded(false)
    }
    window.addEventListener('click', listener)
    return () => window.removeEventListener('click', listener)
  }, [])

  const mSot = moment.utc(
    startOfTime || moment.utc().add(-160, 'year').startOf('year')
  )
  const mEot = moment.utc(
    endOfTime || moment.utc().add(160, 'year').endOf('year')
  )

  const [mStart, mEnd] = useMemo(() => {
    const { start, end } = value || {}
    const mStart = moment.utc(
      start || moment.utc().add(-1, 'month').startOf('month')
    )
    const mEnd = moment.utc(end || moment.utc())
    return [mStart, mEnd]
  }, [value])

  const currentYear = useMemo(() => mStart.year(), [mStart])

  const emitChange = (start, end) => {
    if (!onChange) {
      return
    }
    onChange({
      start: start || mStart.format(COMMON_FORMAT),
      end: end || mEnd.format(COMMON_FORMAT)
    })
  }

  const handleChangeCurrentYear = value => {
    let ds = mStart.year(value)
    let de = mEnd.year(value)
    if (ds.isBefore(mSot, 'day')) {
      ds = mSot.clone()
    }
    if (de.isAfter(mEot, 'day')) {
      de = mEot.clone()
    }
    emitChange(ds.format(COMMON_FORMAT), de.format(COMMON_FORMAT))
  }

  const handleChangeDateStart = value => {
    emitChange(value)
  }

  const handleChangeDateEnd = value => {
    emitChange(null, value)
  }

  const toggleExpanded = () => {
    !disabled && setExpanded(!isExpanded)
  }

  const highlight = day => mStart.isSameOrBefore(day) && mEnd.isSameOrAfter(day)

  console.warn('* Deprecated: please use RangePicker component *')

  return (
    <Flex flexDirection='column' {...props}>
      {label && (
        <Box mb={1}>
          <Typography
            as='label'
            variant='base12Bold'
            color='baseMetal'
            width='fit-content'>
            {label}
          </Typography>
        </Box>
      )}
      <Wrapper ref={wrapRef}>
        <FakeInput
          onClick={toggleExpanded}
          expanded={isExpanded}
          disabled={disabled}>
          <Typography
            mx={2}
            truncate
            variant='labelSmall'
            color={disabled ? 'textInputDisabled' : 'baseBlack'}>
            {placeholder && !value ? (
              placeholder
            ) : (
              <>
                {mStart.format(displayFormat)} &divide;{' '}
                {mEnd.format(displayFormat)}
              </>
            )}
          </Typography>
          <Flex mr={2} opacity={disabled ? 0.35 : 1}>
            <Icon name='calendar' />
          </Flex>
        </FakeInput>
        {isExpanded && (
          <DropdownWrapper>
            {navigationByYear && (
              <Years
                mr={2}
                value={currentYear}
                displayStart={yearDisplayStart}
                displayEnd={yearDisplayEnd}
                startOfTime={mSot.year()}
                endOfTime={mEot.year()}
                onChange={handleChangeCurrentYear}
                label={labelYear}
              />
            )}
            <Calendar
              mx={2}
              value={mStart.format(COMMON_FORMAT)}
              monthNavigationWithinYear={navigationByYear}
              yearSelector={!navigationByYear}
              onChange={handleChangeDateStart}
              startOfTime={mSot.format(COMMON_FORMAT)}
              endOfTime={mEnd.format(COMMON_FORMAT)}
              highlight={highlight}
              label={labelStartDate}
            />
            <Calendar
              yearSelector={!navigationByYear}
              ml={2}
              value={mEnd.format(COMMON_FORMAT)}
              monthNavigationWithinYear={navigationByYear}
              onChange={handleChangeDateEnd}
              startOfTime={mStart.format(COMMON_FORMAT)}
              endOfTime={mEot.format(COMMON_FORMAT)}
              highlight={highlight}
              label={labelEndDate}
            />
          </DropdownWrapper>
        )}
      </Wrapper>
    </Flex>
  )
}

const DropdownWrapper = styled(Flex)(({ theme }) =>
  css({
    backgroundColor: theme.colors.white,
    padding: '16px',
    border: `1px solid ${theme.colors.accent}`,
    boxShadow: theme.shadows.etvasCard,
    position: 'absolute',
    left: 0,
    top: '44px',
    borderRadius: 2,
    zIndex: theme.zIndices.menu
  })
)

const FakeInput = styled(Flex)(({ expanded, disabled, theme }) =>
  css({
    width: '100%',
    height: '40px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: disabled ? theme.colors.backgroundInputGray : 'white',
    border: `1px solid ${
      disabled
        ? theme.colors.inputBorderGray
        : expanded
        ? theme.colors.accent
        : theme.colors.inputBorderGray
    }`,
    borderRadius: 2,
    cursor: disabled ? 'not-allowed' : 'pointer',
    pointerEvents: disabled ? 'none' : 'all',
    '&:hover': {
      borderColor: disabled ? theme.colors.inputBorderGray : theme.colors.accent
    }
  })
)

const Wrapper = styled(Flex)`
  width: 100%;
  position: relative;
`

DateRangePicker.propTypes = {
  yearDisplayStart: PropTypes.number,
  yearDisplayEnd: PropTypes.number,
  startOfTime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number
  ]),
  endOfTime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number
  ]),
  value: PropTypes.shape({
    start: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.number
    ]),
    end: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.number
    ])
  }),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  displayFormat: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.node,
  navigationByYear: PropTypes.bool,
  labelYear: PropTypes.node,
  labelStartDate: PropTypes.node,
  labelEndDate: PropTypes.node
}

DateRangePicker.defaultProps = {
  displayFormat: 'D MMMM YYYY',
  navigationByYear: true
}
