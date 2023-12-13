import { useLayoutEffect, useMemo, useRef, useState } from 'react'

import moment from 'moment'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { Flex, Icon, Typography, styled } from '@etvas/etvaskit'

import { Calendar } from './Calendar'
import { COMMON_FORMAT } from './constants'

export const DatePicker = ({
  value,
  displayFormat,
  collapseOnPick,
  disabled,
  onChange,
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

  const mDate = useMemo(() => (value ? moment(value) : moment()), [value])

  const handleChangeDate = value => {
    if (collapseOnPick) {
      setExpanded(false)
    }
    onChange && onChange(value)
  }

  const toggleExpanded = () => {
    !disabled && setExpanded(!isExpanded)
  }

  return (
    <Wrapper ref={wrapRef}>
      <FakeInput
        onClick={toggleExpanded}
        expanded={isExpanded}
        disabled={disabled}
      >
        <Typography
          mx={2}
          truncate
          color={disabled ? 'textInputDisabled' : 'baseBlack'}
        >
          {mDate.format(displayFormat)}
        </Typography>
        <Flex mr={2} opacity={disabled ? 0.35 : 1}>
          <Icon name='calendar' />
        </Flex>
      </FakeInput>
      {isExpanded && (
        <DropdownWrapper>
          <Calendar
            value={mDate.format(COMMON_FORMAT)}
            onChange={handleChangeDate}
            {...props}
          />
        </DropdownWrapper>
      )}
    </Wrapper>
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

DatePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  displayFormat: PropTypes.string,
  collapseOnPick: PropTypes.bool,
  disabled: PropTypes.bool
}

DatePicker.defaultProps = {
  displayFormat: 'dddd, LL',
  collapseOnPick: true
}
