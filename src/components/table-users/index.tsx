import * as React from 'react';

import { Table } from 'reactstrap';

import { UserState } from '../../types';

type Props = {
  users: UserState[],
};

const TableUsers: React.FC<Props> = ({ users }) => (
  <Table striped>
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map(({ email, username }) => (
        <tr key={email}>
          <td>{username}</td>
          <td>{email}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export { TableUsers };
export default TableUsers;
