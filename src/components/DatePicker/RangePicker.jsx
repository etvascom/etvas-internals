import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'

import moment from 'moment'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import {
  Box,
  Button,
  Checkbox,
  Dropdown,
  Flex,
  Icon,
  Typography,
  styled
} from '@etvas/etvaskit'

import { Calendar } from './Calendar'
import {
  COMMON_FORMAT,
  CURRENT_MONTH_FORMAT,
  compareMethods
} from './constants'

export const RangePicker = ({
  multiple,
  startOfTime,
  endOfTime,
  value: rawValue,
  displayFormat,
  yearDisplayStart,
  yearDisplayEnd,
  navigationByYear,
  disabled,
  onChange,
  label,
  placeholder,
  labelCompareWith,
  labelCompareDivider,
  labelLastPeriod,
  compareLabels,
  ...props
}) => {
  const wrapRef = useRef()
  const [isExpanded, setExpanded] = useState(false)
  const [isSettingEnd, setSettingEnd] = useState(false)
  const [currentHover, setCurrentHover] = useState(null)
  const [isComparing, setComparing] = useState(false)
  const [compareMethod, setCompareMethod] = useState(compareMethods.lastPeriod)

  const value = multiple ? rawValue?.[0] : rawValue
  const compareValue = multiple ? rawValue?.[1] : null

  const [currentMonth, setCurrentMonth] = useState(() => {
    const { start } = value || {}
    const currentMonth = moment(start || moment().startOf('month'))
    return currentMonth
  })

  const resetDateRange = val => {
    const { start, end } = val || {}

    const mStart = moment(start || moment())
    const mEnd = moment(end || moment())

    return { mStart, mEnd }
  }

  const [{ mStart, mEnd }, setDateRange] = useState(() => resetDateRange(value))

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

  const rangeStartOfTime = useMemo(() => {
    const mPast = moment(
      startOfTime || moment().add(-160, 'year').startOf('year')
    )
    if (!isSettingEnd) {
      return mPast
    }
    return mStart.isSameOrAfter(mPast) ? mStart : mPast
  }, [startOfTime, mStart, isSettingEnd])

  const rangeEndOfTime = useMemo(() => {
    const eot = moment.utc(
      endOfTime || moment.utc().add(160, 'year').endOf('year')
    )

    if (isSettingEnd && navigationByYear) {
      const eoy = mStart.clone().endOf('year')

      if (eoy.isBefore(eot)) {
        return eoy
      }
    }

    return eot
  }, [endOfTime, isSettingEnd, mStart, navigationByYear])

  const nextMonth = useMemo(
    () => currentMonth.clone().add(1, 'month'),
    [currentMonth]
  )

  const navigateMonth = dir => {
    setCurrentMonth(currentMonth.clone().add(dir, 'month'))
  }

  const handleCanChange = pos => value =>
    currentMonth.clone().add(pos, 'month').isSame(moment.utc(value), 'month')

  const computeSecondInterval = ({ start, end }, compareMethod) => {
    const _start = moment(start)
    const _end = moment(end)

    if (compareMethod === compareMethods.lastPeriod) {
      const diff = _end.diff(_start, 'days') + 1
      return {
        start: _start.subtract(diff, 'days').format(COMMON_FORMAT),
        end: _end.subtract(diff, 'days').format(COMMON_FORMAT)
      }
    }

    return {
      start: _start.subtract(1, 'year').format(COMMON_FORMAT),
      end: _end.subtract(1, 'year').format(COMMON_FORMAT)
    }
  }

  const handleChange = ({ start, end }, isComparing, compareMethod) => {
    if (!onChange) {
      return
    }

    if (!multiple) {
      onChange({ start, end })
      return
    }

    if (!isComparing) {
      onChange([{ start, end }])
      return
    }

    const secondInterval = computeSecondInterval({ start, end }, compareMethod)

    onChange([{ start, end }, secondInterval])
  }

  const handleCalendarClick = value => {
    if (isSettingEnd) {
      const _mEnd = moment.utc(value)
      setDateRange({ mStart: mStart.clone(), mEnd: _mEnd })
      handleChange(
        {
          start: mStart.format(COMMON_FORMAT),
          end: _mEnd.format(COMMON_FORMAT)
        },
        isComparing,
        compareMethod
      )
      setSettingEnd(false)
      setExpanded(false)
      return
    }
    const _mStart = moment.utc(value)
    setDateRange({ mStart: _mStart, mEnd: _mStart })
    setSettingEnd(true)
  }

  const handleComparingChange = () => {
    setComparing(!isComparing)
    handleChange(value, !isComparing, compareMethod)
  }

  const handleCompareMethodChange = method => {
    setCompareMethod(method)
    handleChange(value, isComparing, method)
  }

  const toggleExpanded = () => {
    if (!value?.start && isExpanded) {
      return
    }

    setSettingEnd(false)
    setDateRange(resetDateRange(value))

    !disabled && setExpanded(!isExpanded)
  }

  const highlight = day =>
    isSettingEnd
      ? mStart.isSameOrBefore(moment.utc(day)) &&
        currentHover &&
        mStart.isSameOrBefore(currentHover) &&
        moment.utc(day).isSameOrBefore(currentHover) &&
        rangeEndOfTime.isSameOrAfter(moment.utc(day))
      : mStart.isSameOrBefore(moment.utc(day)) &&
        mEnd.isSameOrAfter(moment.utc(day))

  const handleHover = day => setCurrentHover(moment.utc(day))

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
                {moment.utc(value.start).format(displayFormat)} &divide;{' '}
                {moment.utc(value.end).format(displayFormat)}
                {multiple && isComparing && (
                  <>
                    {' '}
                    {labelCompareDivider}{' '}
                    {moment.utc(compareValue.start).format(displayFormat)}{' '}
                    &divide;{' '}
                    {moment.utc(compareValue.end).format(displayFormat)}
                  </>
                )}
              </>
            )}
          </Typography>
          <Flex mr={2} opacity={disabled ? 0.35 : 1}>
            <Icon name='calendar' />
          </Flex>
        </FakeInput>
        {isExpanded && (
          <DropdownWrapper>
            <Box>
              <Flex>
                <Box mx={2}>
                  <CalendarHeading>
                    <Button
                      icon='chevronLeft'
                      variant='link'
                      onClick={() => navigateMonth(-1)}
                    />
                    <Typography variant='base14Bold'>
                      {currentMonth.format(CURRENT_MONTH_FORMAT)}
                    </Typography>
                    <div></div>
                  </CalendarHeading>
                  <Calendar
                    value={mStart.format(COMMON_FORMAT)}
                    browseDate={currentMonth.format(COMMON_FORMAT)}
                    monthSelector={false}
                    yearSelector={false}
                    monthNavigation={false}
                    onChange={handleCalendarClick}
                    canChange={handleCanChange(0)}
                    onHover={handleHover}
                    startOfTime={rangeStartOfTime.format(COMMON_FORMAT)}
                    endOfTime={rangeEndOfTime.format(COMMON_FORMAT)}
                    highlight={highlight}
                    highlightCurrent={false}
                    label={false}
                  />
                </Box>
                <Box mx={2}>
                  <CalendarHeading>
                    <div></div>
                    <Typography variant='base14Bold'>
                      {nextMonth.format(CURRENT_MONTH_FORMAT)}
                    </Typography>
                    <Button
                      icon='chevronRight'
                      variant='link'
                      onClick={() => navigateMonth(1)}
                    />
                  </CalendarHeading>
                  <Calendar
                    value={mEnd.format(COMMON_FORMAT)}
                    browseDate={nextMonth.format(COMMON_FORMAT)}
                    monthSelector={false}
                    yearSelector={false}
                    monthNavigation={false}
                    monthNavigationWithinYear={false}
                    onChange={handleCalendarClick}
                    canChange={handleCanChange(1)}
                    onHover={handleHover}
                    startOfTime={rangeStartOfTime.format(COMMON_FORMAT)}
                    endOfTime={rangeEndOfTime.format(COMMON_FORMAT)}
                    highlight={highlight}
                    highlightCurrent={false}
                    label={false}
                  />
                </Box>
              </Flex>

              {multiple && (
                <Flex alignItems='center' mt={4} mx={2}>
                  <Checkbox
                    checked={isComparing}
                    onChange={handleComparingChange}
                  />
                  <Typography variant='base12Light' mx={2}>
                    {labelCompareWith}:
                  </Typography>
                  <Dropdown
                    width='200px'
                    value={compareMethod}
                    required
                    onChange={handleCompareMethodChange}
                    valueRender={value => compareLabels[value]}
                    noBottomSpace>
                    {Object.keys(compareMethods).map(method => (
                      <Dropdown.Option key={method} value={method}>
                        {compareLabels[method]}
                      </Dropdown.Option>
                    ))}
                  </Dropdown>
                </Flex>
              )}
            </Box>
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

const CalendarHeading = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`

RangePicker.propTypes = {
  multiple: PropTypes.bool,
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
  labelCompareWith: PropTypes.node,
  labelCompareDivider: PropTypes.node,
  labelLastPeriod: PropTypes.node,
  compareLabels: PropTypes.shape({
    [compareMethods.lastPeriod]: PropTypes.node
  }),
  placeholder: PropTypes.node,
  navigationByYear: PropTypes.bool
}

RangePicker.defaultProps = {
  multiple: false,
  displayFormat: 'D MMMM YYYY',
  navigationByYear: true
}
