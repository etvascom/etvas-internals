import { useMemo } from 'react'

import moment from 'moment'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { Box, Flex, Touchable, Typography, styled } from '@etvas/etvaskit'

export const Years = ({
  value,
  startOfTime,
  endOfTime,
  displayStart,
  displayEnd,
  perRow,
  onChange,
  label,
  ...props
}) => {
  const interval = useMemo(() => {
    const interval = []
    const start = displayStart || value - 10
    const end = displayEnd || value + 9
    const sot = startOfTime || displayStart
    const eot = endOfTime || displayEnd
    for (let i = start; i <= end; i++) {
      interval.push({
        id: i,
        label: i,
        value: i,
        current: value === i,
        disabled: i < sot || i > eot
      })
    }
    return interval
  }, [displayEnd, displayStart, endOfTime, startOfTime, value])

  const handleCellClick = cell => {
    if (cell.disabled) {
      return
    }
    onChange(cell.value)
  }

  const today = moment().year()

  return (
    <Box width='224px' {...props}>
      {!!label && (
        <Box mb={1}>
          <Typography variant='base12Bold' color='baseMetal' px={3}>
            {label}
          </Typography>
        </Box>
      )}
      <Typography variant='labelSmallBold' px={3} mt={2}>
        {value}
      </Typography>
      <Flex justifyContent='flex-start' flexWrap='wrap' mt={2}>
        {interval.map(cell => (
          <CellTouch
            key={cell.id}
            perRow={perRow}
            current={cell.current}
            disabled={cell.disabled}
            onClick={() => handleCellClick(cell)}
          >
            <Typography
              variant={cell.value === today ? 'labelSmallBold' : 'labelSmall'}
            >
              {cell.label}
            </Typography>
          </CellTouch>
        ))}
      </Flex>
    </Box>
  )
}

const CellTouch = styled(Touchable)(({ current, disabled, perRow, theme }) =>
  css({
    flex: `0 0 ${100 / perRow}%`,
    borderRadius: 6,
    height: '32px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.35 : 1,
    justifyContent: 'center',
    backgroundColor: current ? theme.colors.accentFade : 'transparent',
    '&:hover': {
      color: current ? theme.colors.accentDarkest : theme.colors.accent
    }
  })
)

Years.propTypes = {
  value: PropTypes.number.isRequired,
  perRow: PropTypes.number,
  startOfTime: PropTypes.number,
  endOfTime: PropTypes.number,
  displayStart: PropTypes.number,
  displayEnd: PropTypes.number,
  displayStatus: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.node
}

Years.defaultProps = {
  perRow: 4
}
