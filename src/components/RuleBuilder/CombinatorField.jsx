import React from 'react'

import { useField } from 'formik'
import PropTypes from 'prop-types'

import { Combinator } from './Combinator'

export const CombinatorField = ({ name, disabled, options, ...rest }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ value }, _, { setValue }] = useField(name)

  return (
    <Combinator
      value={value}
      onChange={setValue}
      options={options}
      disabled={disabled}
      {...rest}
    />
  )
}

CombinatorField.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.node
    })
  ).isRequired
}
