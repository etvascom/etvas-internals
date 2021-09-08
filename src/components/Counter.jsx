import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Typography, Chip } from '@etvas/etvaskit'

export const Counter = ({
  label,
  value,
  chipBgColor,
  chipTextColor,
  ...props
}) => (
  <Flex alignItems='center' {...props}>
    <Typography variant='base16Light' mr={2}>
      {label}
    </Typography>
    <Chip color={chipBgColor} isRounded>
      <Typography variant='base14Light' color={chipTextColor}>
        {value}
      </Typography>
    </Chip>
  </Flex>
)

Counter.propTypes = {
  label: PropTypes.node,
  value: PropTypes.node,
  chipBgColor: PropTypes.string,
  chipTextColor: PropTypes.string
}

Counter.defaultProps = {
  chipBgColor: 'etvas',
  chipTextColor: 'baseWhite'
}
