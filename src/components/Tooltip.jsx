import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Typography } from '@etvas/etvaskit'

const Tooltip = ({
  placement,
  children,
  content,
  delay,
  distance,
  ...props
}) => {
  const [isTooltipShown, setIsToolTipShown] = useState(false)
  const timeoutRef = useRef()

  const showTip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsToolTipShown(true)
    }, delay || 350)
  }

  const hideTip = () => {
    clearInterval(timeoutRef.current)
    setIsToolTipShown(false)
  }

  return (
    <StyledFlex onMouseEnter={showTip} onMouseLeave={hideTip} {...props}>
      {children}
      {isTooltipShown && (
        <StyledTypography
          px={4}
          py={2}
          color='baseWhite'
          variant='base14Light'
          distance={distance}
          placement={placement}>
          {content}
        </StyledTypography>
      )}
    </StyledFlex>
  )
}
const StyledFlex = styled(Flex)`
  display: inline;
  position: relative;
`

const StyledTypography = styled(Typography)`
  z-index: 50;
  border-radius: 3px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  background: #536083;
  width: max-content;
  max-width: 300px;

  ${({ placement, distance }) =>
    placement === 'right'
      ? ` left: calc(100% + ${distance});
  top: 50%;
  transform: translateX(0) translateY(-50%);`
      : placement === 'left'
      ? `left: auto;
  right: calc(100% + ${distance});
  top: 50%;
  transform: translateX(0) translateY(-50%);`
      : `
${placement}: calc(${distance} * -1);
`};
`

Tooltip.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  delay: PropTypes.number,
  placement: PropTypes.string,
  distance: PropTypes.string
}

Tooltip.defaultProps = {
  placement: 'top',
  distance: '35px'
}

export default Tooltip
