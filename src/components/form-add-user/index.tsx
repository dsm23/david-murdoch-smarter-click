import * as React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import { Form as FinalForm, Field } from 'react-final-form';

// import { InputBootstrap } from '../input-bootstrap';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values, null, 2));
};

const required = (value: string) => (value ? undefined : 'Required');

const FormAddUser: React.FC<{}> = () => (
  <FinalForm onSubmit={onSubmit}>
    {formState => {
      const { handleSubmit, submitting } = formState;
      return (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <>
                  <Input
                    type="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    {...input}
                    {...meta}
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
                    {...meta}
                  />
                  {meta.touched && meta.error && (
                    <FormFeedback>{meta.error}</FormFeedback>
                  )}
                </>
              )}
            </Field>
          </FormGroup>
          <Button disabled={submitting}>Submit</Button>
          <h4>Form State</h4>
          {process.env.NODE_ENV === 'development' && (
            <pre>{JSON.stringify(formState, undefined, 2)}</pre>
          )}
        </Form>
      );
    }}
  </FinalForm>
);

export { FormAddUser };
export default FormAddUser;
