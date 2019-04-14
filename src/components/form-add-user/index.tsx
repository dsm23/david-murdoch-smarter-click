import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import { Form as FinalForm, Field } from 'react-final-form';

type Props = {
  onSubmit: any,
};

type Errors = {
  passwordMatch?: string,
};

type Values = {
  password?: string,
  passwordMatch?: string,
};

const required = (value: string) => (value ? undefined : 'Required');

const formValidation = ({ password, passwordMatch }: Values) => {
  let errors: Errors = {};
  if (password !== passwordMatch) {
    errors.passwordMatch = 'Passwords do not match';
  }
  return errors;
};

const FormAddUser = ({ onSubmit }: Props) => (
  <FinalForm onSubmit={onSubmit} validate={formValidation}>
    {formState => {
      const { handleSubmit, submitting } = formState;
      return (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Username</Label>
            <Field name="username" validate={required}>
              {({ input, meta }) => (
                <>
                  <Input
                    id="name"
                    placeholder="Enter username"
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
            <Label for="exampleEmail">Email</Label>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <>
                  <Input
                    type="email"
                    id="exampleEmail"
                    placeholder="Enter email"
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
                    placeholder="Enter password"
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
            <Label for="examplePasswordMatch">Re-enter Password</Label>
            <Field name="passwordMatch" validate={required}>
              {({ input, meta }) => (
                <>
                  <Input
                    type="password"
                    id="examplePasswordMatch"
                    placeholder="Re-enter password"
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
          <Button type="submit" color="primary" disabled={submitting}>
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
