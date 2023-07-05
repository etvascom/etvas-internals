import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from '@etvas/etvaskit'

export const GridButton = ({ children, ...props }) => (
  <StyledButton variant='link' {...props}>
    {children}
  </StyledButton>
)

GridButton.propTypes = {
  children: PropTypes.any
}

const StyledButton = styled(Button)`
  font-weight: 800;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.4px;
`
