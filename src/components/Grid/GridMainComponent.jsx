import React, { useLayoutEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import { Flex, Icon, Typography } from '@etvas/etvaskit'

import Tooltip from '../Tooltip'
import { GridDot } from './GridDot'

export const GridMainComponent = ({
  children,
  icon,
  iconColor,
  dotColor,
  ...props
}) => (
  <Flex alignItems='center' width='100%' pr={2}>
    {!!icon && (
      <Flex alignItems='center' mr={3}>
        <Icon name={icon} size='medium' color={iconColor} />
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
      fontWeight={fontWeight}>
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
  iconColor: PropTypes.string
}

GridMainComponent.defaultProps = {
  iconColor: 'inputIcon'
}
