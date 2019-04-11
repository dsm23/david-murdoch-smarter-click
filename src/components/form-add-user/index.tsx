import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Form as FinalForm, Field } from 'react-final-form';

// import { InputBootstrap } from '../input-bootstrap';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values, null, 2));
};

const FormAddUser: React.FC<{}> = () => (
  <FinalForm onSubmit={onSubmit}>
    {({ handleSubmit, values, submitting }) => (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Field
            name="email"
            type="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          >
            {({ input, meta }) => <Input {...input} {...meta} />}
          </Field>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Field
            name="password"
            type="password"
            id="examplePassword"
            placeholder="password placeholder"
          >
            {({ input, meta }) => <Input {...input} {...meta} />}
          </Field>
        </FormGroup>
        <Button disabled={submitting}>Submit</Button>
        {process.env.NODE_ENV === 'development' && (
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        )}
      </Form>
    )}
  </FinalForm>
);

export { FormAddUser };
export default FormAddUser;
