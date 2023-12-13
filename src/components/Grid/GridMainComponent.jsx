import { useLayoutEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import { Flex, Icon, Typography } from '@etvas/etvaskit'

import Tooltip from '../Tooltip'
import { GridDot } from './GridDot'

export const GridMainComponent = ({
  children,
  icon,
  iconColor,
  iconPosition,
  dotColor,
  ...props
}) => (
  <Flex alignItems='center' width='100%' pr={2}>
    {!!icon && iconPosition === 'left' && (
      <Flex alignItems='center' mr={3}>
        <Icon name={icon} size='medium' color={iconColor} x />
      </Flex>
    )}
    {!!dotColor && (
      <Flex alignItems='center' mr={4}>
        <GridDot color={dotColor} />
      </Flex>
    )}
    <TruncateGridInfo minWidth='0' fontWeight='normal' {...props}>
      {children}
    </TruncateGridInfo>
    {!!icon && iconPosition === 'right' && (
      <Flex alignItems='center'>
        <Icon name={icon} size='medium' color={iconColor} />
      </Flex>
    )}
  </Flex>
)

export const TruncateGridInfo = ({ children, fontWeight, color, ...props }) => {
  const [isTruncatedText, setIsTruncatedText] = useState(false)
  const ref = useRef()

  useLayoutEffect(() => {
    setIsTruncatedText(isTruncated(ref?.current))
  }, [])

  const text = (
    <Typography
      variant='labelSmall'
      color={color}
      truncate
      ref={ref}
      fontWeight={fontWeight}
    >
      {children}
    </Typography>
  )

  return (
    <Flex alignItems='center' pr={2} {...props}>
      {isTruncatedText ? (
        <Tooltip width='100%' content={children} distance='50px'>
          {text}
        </Tooltip>
      ) : (
        text
      )}
    </Flex>
  )
}

const isTruncated = el => el?.scrollWidth > el?.clientWidth

TruncateGridInfo.propTypes = {
  children: PropTypes.any,
  fontWeight: PropTypes.string,
  color: PropTypes.string
}

TruncateGridInfo.defaultProps = {
  fontWeight: 'lighter',
  color: 'textCardTitle'
}

GridMainComponent.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.string,
  dotColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(['right', 'left'])
}

GridMainComponent.defaultProps = {
  iconColor: 'inputIcon',
  iconPosition: 'left'
}
