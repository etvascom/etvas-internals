import { Formik, useField } from 'formik'

import { IntervalField } from '../src'

export default {
  title: 'Components/IntervalField'
}

const FormikContextViewer = () => {
  const [context] = useField('interval')

  return <pre>{context.value}</pre>
}
export const Default = () => (
  <Formik initialValues={{ interval: '' }}>
    <>
      <IntervalField
        label='Default tag input'
        placeholder='5-20'
        name='interval'
      />

      <IntervalField
        label='Default tag input'
        placeholder='15-20'
        name='interval'
        error='Type something here'
      />

      <IntervalField
        label='Default tag input'
        placeholder='15-20'
        name='interval'
        disabled
      />

      <IntervalField
        label='Default tag input'
        placeholder='15-20'
        name='interval'
        type='suffix'
        suffix='EUR'
        suffixSpace={1}
      />

      <FormikContextViewer />
    </>
  </Formik>
)
