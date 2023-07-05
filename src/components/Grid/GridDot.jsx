import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box, themed } from '@etvas/etvaskit'

export const GridDot = ({ color, ...props }) => <Dot color={color} {...props} />

GridDot.propTypes = {
  color: PropTypes.string
}

const Dot = styled(Box)`
  ${themed('GridDot')}
  background-color: ${({ color }) => themed(`colors.${color}`)};
`
