import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && !!error}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Your Topic: </label>
        <div>
          <Field
            name="card"
            component={renderTextField}
          />
        </div>
      </div>
      <div>
        <Button
          style={{marginRight:'10px'}}
          type="submit"
          color="primary"
          disabled={pristine || submitting}>
          Submit
        </Button>

        <Button
          type="submit"
          color="secondary"
          disabled={pristine || submitting}
          onClick={reset}>
          Clear
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'cards'
})(Form)
