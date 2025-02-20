import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

import moment from 'moment'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { v4 } from 'uuid'

import {
  Box,
  Button,
  Checkbox,
  Chip,
  Dropdown,
  Flex,
  Icon,
  Touchable,
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
  id,
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
  labelCurrent,
  labelCompare,
  labelLastPeriod,
  compareLabels,
  isComparing,
  setIsComparing,
  ...props
}) => {
  const inputId = id || v4()

  const wrapRef = useRef()
  const [isExpanded, setExpanded] = useState(false)
  const [isSettingEnd, setSettingEnd] = useState(false)
  const [currentHover, setCurrentHover] = useState(null)
  const [compareMethod, setCompareMethod] = useState(compareMethods.lastPeriod)
  const [showCurrentPeriod, setShowCurrentPeriod] = useState(true)

  const value = multiple ? rawValue?.[0] : rawValue
  const compareValue = multiple ? rawValue?.[1] : null

  const canSwitchToCompare =
    compareMethod === compareMethods.customPeriod && isComparing

  const [currentMonth, setCurrentMonth] = useState(() =>
    moment.utc(value?.start || moment.utc().startOf('month'))
  )

  const resetDateRange = value => {
    const { start, end } = value || {}

    const momentStart = moment.utc(start || moment.utc())
    const momentEnd = moment.utc(end || moment.utc())

    return { momentStart, momentEnd }
  }

  const [{ momentStart, momentEnd }, setDateRange] = useState(() =>
    resetDateRange(value)
  )

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
    const momentPast = moment(
      startOfTime || moment().add(-160, 'year').startOf('year')
    )
    if (!isSettingEnd) {
      return momentPast
    }
    return momentStart.isSameOrAfter(momentPast) ? momentStart : momentPast
  }, [startOfTime, momentStart, isSettingEnd])

  const rangeEndOfTime = useMemo(() => {
    const momentFuture = moment.utc(
      endOfTime || moment.utc().add(160, 'year').endOf('year')
    )

    if (isSettingEnd && navigationByYear) {
      const endOfYear = momentStart.clone().endOf('year')

      if (endOfYear.isBefore(momentFuture)) {
        return endOfYear
      }
    }

    return momentFuture
  }, [endOfTime, isSettingEnd, momentStart, navigationByYear])

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
    if (compareMethod === compareMethods.lastYear) {
      return {
        start: start.subtract(1, 'year').format(COMMON_FORMAT),
        end: end.subtract(1, 'year').format(COMMON_FORMAT)
      }
    }

    const diff = end.diff(start, 'days') + 1
    return {
      start: start.subtract(diff, 'days').format(COMMON_FORMAT),
      end: end.subtract(diff, 'days').format(COMMON_FORMAT)
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

    const secondInterval = computeSecondInterval(
      { start: moment.utc(start), end: moment.utc(end) },
      compareMethod
    )

    if (canSwitchToCompare) {
      onChange(
        showCurrentPeriod
          ? [{ start, end }, compareValue ?? { start, end }]
          : [value, { start, end }]
      )

      return
    }

    onChange([{ start, end }, secondInterval])
  }

  const handleCalendarClick = value => {
    if (isSettingEnd) {
      const momentValue = moment.utc(value)
      setDateRange({ momentStart: momentStart.clone(), momentEnd: momentValue })
      handleChange(
        {
          start: momentStart.format(COMMON_FORMAT),
          end: momentValue.format(COMMON_FORMAT)
        },
        isComparing,
        compareMethod
      )
      setSettingEnd(false)
      setExpanded(canSwitchToCompare)
      setShowCurrentPeriod(!canSwitchToCompare)
      return
    }
    const momentValue = moment.utc(value)
    setDateRange({ momentStart: momentValue, momentEnd: momentValue })
    setSettingEnd(true)
  }

  const handleComparingChange = () => {
    setIsComparing && setIsComparing(!isComparing)
    handleChange(value, !isComparing, compareMethod)
  }

  const handleCompareMethodChange = method => {
    if (
      compareMethod === compareMethods.customPeriod &&
      method !== compareMethod
    ) {
      setShowCurrentPeriod(true)
    }

    setCompareMethod(method)
    handleChange(value, isComparing, method)
  }

  const handleShowCurrentPeriodChange = newShowCurrentPeriod => () => {
    setShowCurrentPeriod(newShowCurrentPeriod)

    const shownValue = newShowCurrentPeriod ? value : compareValue
    setCurrentMonth(moment.utc(shownValue?.start))
  }

  useEffect(() => {
    const shownValue = showCurrentPeriod ? value : compareValue

    setDateRange({
      momentStart: moment.utc(shownValue?.start),
      momentEnd: moment.utc(shownValue?.end)
    })
  }, [value, compareValue, showCurrentPeriod])

  const toggleExpanded = event => {
    event.stopPropagation()

    if (!value?.start && isExpanded) {
      return
    }

    setSettingEnd(false)
    setDateRange(resetDateRange(value))

    !disabled && setExpanded(!isExpanded)
  }

  const highlight = day =>
    isSettingEnd
      ? momentStart.isSameOrBefore(moment.utc(day)) &&
        currentHover &&
        momentStart.isSameOrBefore(currentHover) &&
        moment.utc(day).isSameOrBefore(currentHover) &&
        rangeEndOfTime.isSameOrAfter(moment.utc(day))
      : momentStart.isSameOrBefore(moment.utc(day)) &&
        momentEnd.isSameOrAfter(moment.utc(day))

  const secondaryHighlight = day => {
    const secondaryValue =
      !showCurrentPeriod && compareMethod === compareMethods.customPeriod
        ? value
        : compareValue

    if (!secondaryValue) {
      return false
    }

    const { start, end } = secondaryValue
    return moment
      .utc(day)
      .isBetween(
        moment.utc(start).subtract(1, 'day'),
        moment.utc(end).add(1, 'day')
      )
  }

  const handleHover = day => setCurrentHover(moment.utc(day))

  return (
    <Flex flexDirection='column' {...props}>
      {label && (
        <Flex mb={1} alignItems='center'>
          <Typography
            as='label'
            htmlFor={inputId?.toString()}
            onClick={toggleExpanded}
            variant='base12Bold'
            color='baseMetal'
            width='fit-content'>
            {label}
          </Typography>
        </Flex>
      )}
      <Wrapper ref={wrapRef}>
        <FakeInput
          id={inputId}
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
                {multiple && isComparing && compareValue && (
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
                    value={momentStart.format(COMMON_FORMAT)}
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
                    secondaryHighlight={secondaryHighlight}
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
                    value={momentEnd.format(COMMON_FORMAT)}
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
                    secondaryHighlight={secondaryHighlight}
                    highlightCurrent={false}
                    label={false}
                  />
                </Box>
              </Flex>

              {multiple && (
                <Flex
                  alignItems='center'
                  justifyContent='space-between'
                  mt={4}
                  mx={2}>
                  <Flex alignItems='center'>
                    <Checkbox
                      checked={isComparing}
                      onChange={handleComparingChange}
                    />
                    <Typography variant='base12Light' mx={2}>
                      {labelCompareWith}:
                    </Typography>
                    <Dropdown
                      width='150px'
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
                  {canSwitchToCompare && (
                    <Flex alignItems='center'>
                      <Touchable onClick={handleShowCurrentPeriodChange(true)}>
                        <Chip
                          color={showCurrentPeriod ? 'etvas' : 'white'}
                          contentColor={showCurrentPeriod ? 'white' : 'black'}>
                          {labelCurrent}
                        </Chip>
                      </Touchable>
                      <Touchable onClick={handleShowCurrentPeriodChange(false)}>
                        <Chip
                          color={!showCurrentPeriod ? 'etvas' : 'white'}
                          contentColor={!showCurrentPeriod ? 'white' : 'black'}>
                          {labelCompare}
                        </Chip>
                      </Touchable>
                    </Flex>
                  )}
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
    border: `1px solid ${getDefaultBorderColor({ expanded, disabled, theme })}`,
    borderRadius: 2,
    cursor: disabled ? 'not-allowed' : 'pointer',
    pointerEvents: disabled ? 'none' : 'all',
    '&:hover': {
      borderColor: disabled ? theme.colors.inputBorderGray : theme.colors.accent
    }
  })
)

const getDefaultBorderColor = ({ expanded, disabled, theme }) => {
  if (disabled) {
    return theme.colors.inputBorderGray
  }
  if (expanded) {
    return theme.colors.accent
  }
  return theme.colors.inputBorderGray
}

const Wrapper = styled(Flex)`
  width: 100%;
  position: relative;
`

const CalendarHeading = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`

RangePicker.propTypes = {
  id: PropTypes.string,
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
  labelCurrent: PropTypes.node,
  labelCompare: PropTypes.node,
  labelLastPeriod: PropTypes.node,
  compareLabels: PropTypes.shape({
    [compareMethods.lastPeriod]: PropTypes.node
  }),
  placeholder: PropTypes.node,
  navigationByYear: PropTypes.bool,
  isComparing: PropTypes.bool,
  setIsComparing: PropTypes.func
}

RangePicker.defaultProps = {
  multiple: false,
  displayFormat: 'D MMMM YYYY',
  navigationByYear: true
}
