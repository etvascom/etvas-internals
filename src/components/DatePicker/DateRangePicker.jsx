import { useLayoutEffect, useMemo, useRef, useState } from 'react'

import moment from 'moment'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { v4 } from 'uuid'

import { Flex, Icon, Typography, styled } from '@etvas/etvaskit'

import { Calendar } from './Calendar'
import { Years } from './Years'
import { COMMON_FORMAT } from './constants'

export const DateRangePicker = ({
  id,
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
  const inputId = id || v4()

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

  const momentStartOfTime = moment(
    startOfTime || moment().add(-160, 'year').startOf('year')
  )
  const momentEndOfTime = moment(
    endOfTime || moment().add(160, 'year').endOf('year')
  )

  const [momentStart, momentEnd] = useMemo(() => {
    const { start, end } = value || {}
    const momentStart = moment(
      start || moment().add(-1, 'month').startOf('month')
    )
    const momentEnd = moment(end || moment())
    return [momentStart, momentEnd]
  }, [value])

  const currentYear = useMemo(() => momentStart.year(), [momentStart])

  const emitChange = (start, end) => {
    if (!onChange) {
      return
    }
    onChange({
      start: start || momentStart.format(COMMON_FORMAT),
      end: end || momentEnd.format(COMMON_FORMAT)
    })
  }

  const handleChangeCurrentYear = value => {
    let dateStart = momentStart.year(value)
    let dateEnd = momentEnd.year(value)
    if (dateStart.isBefore(momentStartOfTime, 'day')) {
      dateStart = momentStartOfTime.clone()
    }
    if (dateEnd.isAfter(momentEndOfTime, 'day')) {
      dateEnd = momentEndOfTime.clone()
    }
    emitChange(dateStart.format(COMMON_FORMAT), dateEnd.format(COMMON_FORMAT))
  }

  const handleChangeDateStart = value => {
    emitChange(value)
  }

  const handleChangeDateEnd = value => {
    emitChange(null, value)
  }

  const toggleExpanded = event => {
    event.stopPropagation()
    !disabled && setExpanded(!isExpanded)
  }

  const highlight = day =>
    momentStart.isSameOrBefore(day) && momentEnd.isSameOrAfter(day)

  console.warn('* Deprecated: please use RangePicker component *')

  return (
    <Flex flexDirection='column' {...props}>
      {label && (
        <Flex mb={1} alignItems='center'>
          <Typography
            as='label'
            variant='base12Bold'
            htmlFor={inputId?.toString()}
            onClick={toggleExpanded}
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
                {momentStart.format(displayFormat)} &divide;{' '}
                {momentEnd.format(displayFormat)}
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
                startOfTime={momentStartOfTime.year()}
                endOfTime={momentEndOfTime.year()}
                onChange={handleChangeCurrentYear}
                label={labelYear}
              />
            )}
            <Calendar
              mx={2}
              value={momentStart.format(COMMON_FORMAT)}
              monthNavigationWithinYear={navigationByYear}
              yearSelector={!navigationByYear}
              onChange={handleChangeDateStart}
              startOfTime={momentStartOfTime.format(COMMON_FORMAT)}
              endOfTime={momentEnd.format(COMMON_FORMAT)}
              highlight={highlight}
              label={labelStartDate}
            />
            <Calendar
              yearSelector={!navigationByYear}
              ml={2}
              value={momentEnd.format(COMMON_FORMAT)}
              monthNavigationWithinYear={navigationByYear}
              onChange={handleChangeDateEnd}
              startOfTime={momentStart.format(COMMON_FORMAT)}
              endOfTime={momentEndOfTime.format(COMMON_FORMAT)}
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

DateRangePicker.propTypes = {
  id: PropTypes.string,
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
