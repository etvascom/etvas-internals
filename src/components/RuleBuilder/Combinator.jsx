import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'
import { useField } from 'formik'
import { Touchable, Typography } from '@etvas/etvaskit'

export const Combinator = ({ name, options, ...rest }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ value: currentValue }, meta, { setValue }] = useField(name)

  return options.map(({ value, label }) => (
    <Touchable key={value} onClick={() => name && setValue(value)} {...rest}>
      <CustomChip isSelected={!name || value === currentValue}>
        <Typography variant='base12Bold' color='inherit'>
          {label}
        </Typography>
      </CustomChip>
    </Touchable>
  ))
}

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

Combinator.defaultProps = {
  options: ['and', 'or']
}
