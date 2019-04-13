import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import { Form as FinalForm, Field } from 'react-final-form';

const required = (value: string) => (value ? undefined : 'Required');

type Props = {
  onSubmit: any,
};

const FormAddUser = ({ onSubmit }: Props) => (
  <FinalForm onSubmit={onSubmit}>
    {formState => {
      const { handleSubmit, submitting } = formState;
      return (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Field name="user" validate={required}>
              {({ input, meta }) => (
                <>
                  <Input
                    type="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    {...input}
                    invalid={meta.invalid}
                    valid={meta.valid}
                  />
                  {meta.touched && meta.error && (
                    <FormFeedback>{meta.error}</FormFeedback>
                  )}
                </>
              )}
            </Field>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Field name="password" validate={required}>
              {({ input, meta }) => (
                <>
                  <Input
                    type="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                    {...input}
                    invalid={meta.invalid}
                    valid={meta.valid}
                  />
                  {meta.touched && meta.error && (
                    <FormFeedback>{meta.error}</FormFeedback>
                  )}
                </>
              )}
            </Field>
          </FormGroup>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          {process.env.NODE_ENV === 'development' && (
            <>
              <h4>Form State</h4>
              <pre>{JSON.stringify(formState, undefined, 2)}</pre>
            </>
          )}
        </Form>
      );
    }}
  </FinalForm>
);

FormAddUser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { FormAddUser };
export default FormAddUser;
