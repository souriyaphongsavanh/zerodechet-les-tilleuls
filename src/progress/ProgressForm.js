import React from 'react'
import { Formik, Form } from 'formik';

import IconCalendar from '../common-ui/icons/IconCalendar'
import InputPretty from '../common-ui/InputPretty'
import Options from '../common-ui/Options'

const ProgressForm = (props) => (
  <Formik
    initialValues={{period: props.period}}
  >
    {() => (
      <Form>
        <InputPretty
          name='period'
          type='select'
          value={props.period}
          onChange={props.onChange}
          icon={<IconCalendar />}
          options={<Options items={['toto']} />}
        />
      </Form>
    )}
  </Formik>
)

export default ProgressForm