import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Icon, Typography } from '@etvas/etvaskit'

export const Tag = ({ value, disabled, onRemove, ...rest }) => (
  <Container disabled={disabled} rest={rest}>
    <Typography color='baseWhite' variant='base14Light'>
      {value}
    </Typography>
    {!disabled && <Icon name='close' size={1} onClick={onRemove} />}
  </Container>
)

const Container = styled.span(({ disabled, rest }) =>
  css({
    display: 'inline-flex',
    justifyContent: 'space-between',
    py: 1,
    px: 2,
    mr: 2,
    whiteSpace: 'nowrap',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: 3,
    backgroundColor: disabled ? 'baseGray' : 'etvas',
    color: 'baseWhite',
    '> svg': {
      cursor: 'pointer',
      pl: 2
    },
    ...rest
  })
)

Tag.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onRemove: PropTypes.func
}
