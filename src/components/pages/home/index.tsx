import * as React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'reactstrap';

import { Revenue, UserImpressions } from '../../charts';

import { ContextUsers } from '../../../contexts';

const PageHome = () => {
  const { users } = useContext(ContextUsers)[0];
  return (
    <>
      <h2>List of Users</h2>
      <ul className="list-group">
        {users.map(({ user }) => (
          <li key={user} className="list-group-item">
            {user}
          </li>
        ))}
      </ul>
      <Row>
        <Col style={{ height: 400 }}>
          <h2>Revenue</h2>
          <Revenue />
        </Col>
        <Col style={{ height: 400 }}>
          <h2>User Impressions</h2>
          <UserImpressions />
        </Col>
      </Row>
    </>
  );
};

export { PageHome };
export default PageHome;
