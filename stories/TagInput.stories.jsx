import { useState } from 'react'

import { TagInput } from '../src'

export default {
  title: 'Components/TagInput'
}

const defaultTags = Array.from({ length: 20 }).map((_, i) => `tag${i}`)

const MockTagInput = props => {
  const [value, setValue] = useState([...defaultTags].join(','))
  const handleChange = value => setValue(value)

  const importHandler = values =>
    values
      .split(',')
      .filter(val => !!val)
      .map(val => val.trim())
  const exportHandler = values => values.join(',')

  return (
    <TagInput
      value={value}
      onChange={handleChange}
      importHandler={importHandler}
      exportHandler={exportHandler}
      forceAddTagKeys={[',']}
      maxTags={50}
      {...props}
    />
  )
}

export const Default = () => (
  <>
    <MockTagInput label='Default tag input' placeholder='Type here' />
    <MockTagInput label='Disabled tag input' placeholder='Type here' disabled />
    <MockTagInput
      label='Error tag input'
      placeholder='Type here'
      error='Too many tags'
    />
    <MockTagInput label='Warning tag input' placeholder='Type here' warning />
  </>
)
