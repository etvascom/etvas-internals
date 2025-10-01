import { useCallback, useMemo, useState } from 'react'

import moment from 'moment'
import 'moment/locale/de'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { Box, Flex, Icon, Touchable, Typography, styled } from '@etvas/etvaskit'

import { COMMON_FORMAT } from './constants'

export const Calendar = ({
  value,
  browseDate,
  dayFormat,
  monthFormat,
  yearFormat,
  weekdayFormat,
  monthSelector,
  monthNavigation,
  monthNavigationWithinYear,
  yearSelector,
  startOfTime,
  endOfTime,
  onChange,
  onHover,
  highlight,
  secondaryHighlight,
  highlightCurrent,
  canChange,
  label,
  ...props
}) => {
  const [isMonthsShown, setMonthsShown] = useState(false)
  const [isYearsShown, setYearsShown] = useState(false)
  const [yearPanel, setYearPanel] = useState(null)

  const momentDate = useMemo(
    () => moment(browseDate || value),
    [browseDate, value]
  )
  const momentValue = useMemo(() => moment(value), [value])

  const past = useMemo(
    () => (startOfTime ? moment(startOfTime) : moment().add(-160, 'year')),
    [startOfTime]
  )
  const future = useMemo(
    () => (endOfTime ? moment(endOfTime) : moment().add(160, 'year')),
    [endOfTime]
  )

  const isBetweenDate = useCallback(
    date =>
      date.isSameOrAfter(past, 'day') && date.isSameOrBefore(future, 'day'),
    [future, past]
  )
  const isBetweenMonth = useCallback(
    date => {
      const startOfMonth = date.clone().startOf('month')
      const endOfMonth = date.clone().endOf('month')
      return (
        (startOfMonth.isSameOrAfter(past, 'day') &&
          startOfMonth.isSameOrBefore(future, 'day')) ||
        (endOfMonth.isSameOrAfter(past, 'day') &&
          endOfMonth.isSameOrBefore(future, 'day'))
      )
    },
    [future, past]
  )
  const isBetweenYear = useCallback(
    year => past.year() <= year && future.year() >= year,
    [future, past]
  )

  const [days, months] = useMemo(() => {
    const now = moment()
    const start = momentDate.clone().startOf('month')
    const end = momentDate.clone().endOf('month')

    if (start.isSame(start.clone().startOf('week'), 'day')) {
      start.startOf('week').add(-1, 'day')
    }

    if (end.isSame(end.clone().endOf('week'), 'day')) {
      end.endOf('week').add(1, 'day')
    }

    if (
      end.clone().endOf('week').diff(start.clone().startOf('week'), 'week') < 5
    ) {
      start.startOf('week').add(-1, 'day')
    }

    start.startOf('week')
    end.endOf('week')

    const days = []
    for (
      let dayIterator = start.clone();
      dayIterator.isSameOrBefore(end, 'day');
      dayIterator.add(1, 'day')
    ) {
      days.push({
        key: dayIterator.valueOf(),
        label: dayIterator.format(dayFormat),
        value: dayIterator.date(),
        momentDate: dayIterator.clone(),
        current: dayIterator.isSame(momentValue, 'day'),
        month: dayIterator.isSame(momentDate, 'month'),
        today: dayIterator.isSame(now, 'day'),
        highlight: highlight(
          dayIterator.format(COMMON_FORMAT),
          dayIterator.clone()
        ),
        secondaryHighlight: secondaryHighlight(
          dayIterator.format(COMMON_FORMAT),
          dayIterator.clone()
        )
      })
    }

    const months = []
    for (
      let monthIterator = momentDate.clone().startOf('year');
      monthIterator.isSame(momentDate, 'year');
      monthIterator.add(1, 'month')
    ) {
      months.push({
        key: monthIterator.valueOf(),
        label: monthIterator.format(monthFormat),
        value: monthIterator.month(),
        current: monthIterator.isSame(momentValue, 'month'),
        today: monthIterator.isSame(now, 'month'),
        momentDate: monthIterator.clone()
      })
    }

    return [days, months]
  }, [
    dayFormat,
    highlight,
    secondaryHighlight,
    momentDate,
    momentValue,
    monthFormat
  ])

  const week = useMemo(() => {
    const week = []
    const startOfWeek = moment().startOf('week')
    for (
      let dayIterator = startOfWeek.clone();
      dayIterator.isSameOrBefore(startOfWeek, 'week');
      dayIterator.add(1, 'day')
    ) {
      week.push({
        key: dayIterator.format('X'),
        label: dayIterator.format(weekdayFormat)
      })
    }
    return week
  }, [weekdayFormat])

  const years = useMemo(() => {
    const years = []
    const startYear = (yearPanel ? yearPanel : momentValue.year()) - 12
    const now = moment()
    for (
      let yearIterator = startYear;
      yearIterator < startYear + 22;
      yearIterator++
    ) {
      years.push({
        key: yearIterator,
        label: yearIterator,
        value: yearIterator,
        current: momentValue.year() === yearIterator,
        today: now.year() === yearIterator
      })
    }
    return years
  }, [momentValue, yearPanel])

  const canNavigateMonth = offset => {
    const next = momentDate.clone().add(offset, 'month')
    if (!isBetweenMonth(next)) {
      return false
    }
    if (monthNavigationWithinYear && !next.isSame(momentValue, 'year')) {
      return false
    }
    return true
  }

  const canNavigateYear = offset =>
    isBetweenYear((yearPanel ? yearPanel : momentDate.year()) + offset)

  const toggleMonths = () => {
    if (!isMonthsShown) {
      setYearsShown(false)
    }
    setMonthsShown(!isMonthsShown)
  }
  const toggleYears = () => {
    if (!isYearsShown) {
      setMonthsShown(false)
    }
    setYearsShown(!isYearsShown)
  }

  const handleYearChange = year => {
    let next = momentDate.clone().year(year)
    if (next.isBefore(past, 'day')) {
      next = past.clone()
    }
    if (next.isAfter(future, 'day')) {
      next = future.clone()
    }
    onChange && onChange(next.format(COMMON_FORMAT))
    toggleYears()
  }

  const handleYearNavigate = offset => {
    const prev = yearPanel ? yearPanel : momentValue.year()
    setYearPanel(prev + offset)
  }

  const handleMonthChange = month => {
    onChange && onChange(momentDate.month(month).format(COMMON_FORMAT))
    toggleMonths()
  }

  const handleMonthNavigate = offset => {
    setMonthsShown(false)
    onChange && onChange(momentDate.add(offset, 'month').format(COMMON_FORMAT))
  }

  const handleDayChange = day => {
    if (!isBetweenDate(day.momentDate)) {
      return
    }
    if (
      monthNavigationWithinYear &&
      !day.momentDate.isSame(momentValue, 'year')
    ) {
      return
    }

    if (!canChange || canChange(day.momentDate.format(COMMON_FORMAT))) {
      onChange && onChange(day.momentDate.format(COMMON_FORMAT))
    }
  }

  const handleHover = day => {
    onHover && onHover(day.momentDate.format(COMMON_FORMAT))
  }

  return (
    <Flex justifyContent='flex-start' flexWrap='wrap' width='224px' {...props}>
      {!!label && (
        <Box mb={1}>
          <Typography variant='base12Bold' color='baseMetal'>
            {label}
          </Typography>
        </Box>
      )}
      <Flex width='224px' mb={1}>
        {monthSelector && (
          <DropTrigger onClick={stopPropagation(toggleMonths)} mx={1}>
            <Flex alignItems='center'>
              <Typography
                variant='labelSmallBold'
                color={isMonthsShown ? 'accent' : undefined}>
                {momentDate.format(monthFormat)}
              </Typography>
              <Rotated
                justifyContent='center'
                alignItems='center'
                color={isMonthsShown ? 'accent' : undefined}
                aria-expanded={isMonthsShown}>
                <Icon name='chevronLeft' />
              </Rotated>
            </Flex>
          </DropTrigger>
        )}
        {yearSelector && (
          <DropTrigger onClick={stopPropagation(toggleYears)} mx={1}>
            <Flex alignItems='center'>
              <Typography
                variant='labelSmallBold'
                color={isYearsShown ? 'accent' : undefined}>
                {momentDate.format(yearFormat)}
              </Typography>
              <Rotated
                justifyContent='center'
                alignItems='center'
                color={isYearsShown ? 'accent' : undefined}
                aria-expanded={isYearsShown}>
                <Icon name='chevronLeft' />
              </Rotated>
            </Flex>
          </DropTrigger>
        )}
        {monthNavigation && (
          <MonthNav
            onClick={stopPropagation(() => handleMonthNavigate(-1))}
            disabled={!canNavigateMonth(-1)}>
            <Icon name='chevronLeft' />
          </MonthNav>
        )}
        {monthNavigation && (
          <MonthNav
            onClick={stopPropagation(() => handleMonthNavigate(1))}
            disabled={!canNavigateMonth(1)}>
            <Icon name='chevronRight' />
          </MonthNav>
        )}
      </Flex>
      {monthSelector && (
        <ConditionalFlex flexWrap='wrap' my={4} shown={isMonthsShown}>
          {months.map(month => (
            <CellWrapper key={month.key} ratio={1 / 2}>
              <MonthCell
                current={month.current}
                disabled={!isBetweenMonth(month.momentDate)}
                onClick={() => handleMonthChange(month.value)}>
                <Typography
                  variant='default'
                  fontWeight={month.today ? 'bold' : 300}>
                  {month.label}
                </Typography>
              </MonthCell>
            </CellWrapper>
          ))}
        </ConditionalFlex>
      )}
      {yearSelector && (
        <ConditionalFlex flexWrap='wrap' my={4} shown={isYearsShown}>
          <CellWrapper ratio={1 / 4}>
            <YearCell
              disabled={!canNavigateYear(-10)}
              onClick={stopPropagation(() => handleYearNavigate(-10))}>
              <Icon name='chevronLeft' />
            </YearCell>
          </CellWrapper>
          {years.map(year => (
            <CellWrapper ratio={1 / 4} key={year.key}>
              <YearCell
                key={year.key}
                current={year.current}
                disabled={!isBetweenYear(year.value)}
                onClick={stopPropagation(() => handleYearChange(year.value))}>
                <Typography
                  variant='default'
                  fontWeight={year.today ? 'bold' : 300}>
                  {year.label}
                </Typography>
              </YearCell>
            </CellWrapper>
          ))}
          <YearCell
            disabled={!canNavigateYear(10)}
            onClick={stopPropagation(() => handleYearNavigate(10))}>
            <Icon name='chevronRight' />
          </YearCell>
        </ConditionalFlex>
      )}
      {!isMonthsShown &&
        !isYearsShown &&
        week.map(weekDay => (
          <CellWrapper key={weekDay.key} ratio={1 / 7}>
            <WeekCell>
              <Typography variant='default' opacity={0.5}>
                {weekDay.label}
              </Typography>
            </WeekCell>
          </CellWrapper>
        ))}
      {!isMonthsShown &&
        !isYearsShown &&
        days.map(day => (
          <CellWrapper key={day.key} ratio={1 / 7}>
            <DayCell
              onMouseOver={() => handleHover(day)}
              onClick={stopPropagation(() => handleDayChange(day))}
              highlightCurrent={highlightCurrent}
              current={day.current}
              highlight={day.highlight}
              secondaryHighlight={day.secondaryHighlight}
              disabled={!isBetweenDate(day.momentDate)}
              month={day.month}>
              <Typography
                variant='default'
                fontWeight={day.today ? 'bold' : 300}>
                {day.label}
              </Typography>
            </DayCell>
          </CellWrapper>
        ))}
    </Flex>
  )
}

const ConditionalFlex = styled(Flex)(({ shown }) =>
  css({
    display: shown ? 'flex' : 'none'
  })
)

const Rotated = styled(Flex)`
  transform: rotate(-90deg);
  &[aria-expanded='true'] {
    transform: rotate(90deg);
  }
`

const cellStyle = {
  userSelect: 'none',
  borderRadius: '100%',
  height: '100%',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
}

const CellWrapper = styled(Flex)(({ ratio }) =>
  css({
    height: '32px',
    padding: '1px',
    alignItems: 'center',
    justifyContent: 'center',
    flex: `0 0 ${100 * ratio}%`
  })
)

const YearCell = styled(Touchable)(({ current, disabled, theme }) =>
  css({
    ...cellStyle,
    flex: '1 1 25%',
    borderRadius: 6,
    height: '32px',
    opacity: disabled ? 0.35 : 1,
    backgroundColor: current ? theme.colors.accentFade : 'transparent',
    border: '1px solid transparent',
    '&:hover': {
      color: current ? theme.colors.accentDarkest : theme.colors.accent,
      borderColor: disabled ? 'transparent' : theme.colors.accent
    }
  })
)

const MonthCell = styled(Touchable)(({ current, disabled, theme }) =>
  css({
    ...cellStyle,
    flex: '1 1 50%',
    borderRadius: 6,
    height: '32px',
    opacity: disabled ? 0.35 : 1,
    backgroundColor: current ? theme.colors.accentFade : 'transparent',
    border: '1px solid transparent',
    '&:hover': {
      color: current ? theme.colors.accentDarkest : theme.colors.accent,
      borderColor: disabled ? 'transparent' : theme.colors.accent
    }
  })
)

const WeekCell = styled(Typography)(({ theme }) =>
  css({
    ...cellStyle,
    opacity: 0.65
  })
)

const DayCell = styled(Touchable)(
  ({
    current,
    disabled,
    highlight,
    secondaryHighlight,
    hidden,
    month,
    theme,
    highlightCurrent
  }) =>
    css({
      ...cellStyle,
      backgroundColor: () => {
        if ((highlightCurrent && current) || highlight) {
          return theme.colors.accentFade
        }

        if (secondaryHighlight) {
          return theme.colors.accentFade
        }

        return 'transparent'
      },
      cursor: disabled || hidden ? 'not-allowed' : 'pointer',
      opacity: hidden
        ? 0.05
        : disabled || (secondaryHighlight && !highlight)
          ? 0.35
          : month
            ? 1
            : 0.1,
      border: '1px solid transparent',
      '&:hover': {
        color: current
          ? theme.colors.accentDarkest
          : month
            ? theme.colors.accent
            : theme.colors.baseBlack,
        borderColor:
          disabled || hidden
            ? 'transparent'
            : month
              ? theme.colors.accent
              : 'transparent'
      }
    })
)

const MonthNav = styled(Touchable)(() =>
  css({
    flex: '0 0 32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
)

const DropTrigger = styled(Touchable)`
  height: 32px;
  flex: 1 1;
`

Calendar.propTypes = {
  value: PropTypes.string,
  browseDate: PropTypes.string,
  startOfTime: PropTypes.string,
  endOfTime: PropTypes.string,
  dayFormat: PropTypes.string,
  monthFormat: PropTypes.string,
  yearFormat: PropTypes.string,
  weekdayFormat: PropTypes.string,
  monthSelector: PropTypes.bool,
  yearSelector: PropTypes.bool,
  monthNavigation: PropTypes.bool,
  monthNavigationWithinYear: PropTypes.bool,
  onChange: PropTypes.func,
  onHover: PropTypes.func,
  highlight: PropTypes.func,
  secondaryHighlight: PropTypes.func,
  highlightCurrent: PropTypes.bool,
  canChange: PropTypes.func,
  label: PropTypes.node
}

Calendar.defaultProps = {
  dayFormat: 'D',
  monthFormat: 'MMMM',
  yearFormat: 'YYYY',
  weekdayFormat: 'dd',
  monthSelector: true,
  yearSelector: true,
  monthNavigation: true,
  monthNavigationWithinYear: false,
  highlightCurrent: true,
  highlight: () => false,
  secondaryHighlight: () => false
}

const stopPropagation = fun => event => {
  event.stopPropagation()
  fun && fun()
}
