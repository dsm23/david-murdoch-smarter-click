import * as React from 'react';
import { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
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

import { FormAddUser } from '../../form-add-user';

import { ROUTER } from '../../../constants';

import { ContextUsers } from '../../../contexts';

type Values = {
  passwordMatch: string,
};

const PageAddUser = ({ history }: RouteComponentProps) => {
  const addUser = useContext(ContextUsers)[1];

  const onSubmit = ({ passwordMatch, ...values }: Values) => {
    addUser({
      users: [values],
    });
    return history.push(ROUTER.HOME);
  };
  return <FormAddUser onSubmit={onSubmit} />;
};

PageAddUser.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export { PageAddUser };
export default PageAddUser;
