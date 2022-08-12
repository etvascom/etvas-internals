import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Touchable, Typography } from '@etvas/etvaskit'

export const Combinator = ({
  options,
  value: currentValue,
  onChange,
  ...rest
}) =>
  options.map(({ value, label }) => (
    <Touchable key={value} onClick={() => onChange(value)} {...rest}>
      <CustomChip isSelected={value === currentValue}>
        <Typography variant='base12Bold' color='inherit'>
          {label}
        </Typography>
      </CustomChip>
    </Touchable>
  ))

const CustomChip = styled.div(({ isSelected }) =>
  css({
    py: 1,
    px: 2,
    mr: 2,
    whiteSpace: 'nowrap',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: 3,
    backgroundColor: isSelected ? 'etvasLight' : 'transparent',
    color: isSelected ? 'baseWhite' : 'etvasDark',
    opacity: isSelected ? 1 : 0.2
  })
)

Combinator.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.node
    })
  ).isRequired
}
