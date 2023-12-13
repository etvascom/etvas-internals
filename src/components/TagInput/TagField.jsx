import { forwardRef } from 'react'

import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import { TagInput } from './TagInput'
import { tagShape } from './shape'

export const TagField = forwardRef((props, ref) => {
  const { submitCount } = useFormikContext()
  const [field, meta, helpers] = useField(props)
  const id = props.id || `${props.name}-${v4()}`
  const error = meta.touched && meta.error

  const displayedError = submitCount > 0 ? error : field.value && error

  return (
    <TagInput
      {...props}
      {...field}
      exportHandler={exportHandler(props.separator)}
      importHandler={importHandler(props.separator)}
      onChange={helpers.setValue}
      onBlur={field.onBlur}
      value={field.value}
      id={id}
      error={displayedError}
      forceAddTagKeys={[props.separator]}
      ref={ref}
    />
  )
})

const exportHandler = separator => values => values.join(separator)
const importHandler = separator => values =>
  values
    .split(separator)
    .filter(val => !!val)
    .map(val => val.trim())

TagField.propTypes = {
  ...tagShape,
  separator: PropTypes.string
}

TagField.defaultProps = {
  separator: ','
}
