import * as React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'reactstrap';

import { Revenue, OverlaysHappyPath, UserImpressions } from '../../charts';

// import { THEME } from '../../../constants';

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
      <Row className="mt-5">
        {[
          {
            title: 'Revenue',
            chart: <Revenue />,
          },
          {
            title: 'User Impressions',
            chart: <UserImpressions />,
          },
          {
            title: 'Overlays Happy Path',
            chart: <OverlaysHappyPath />,
          },
        ].map(({ title, chart }) => (
          <Col key={title}>
            <div className="card mb-3">
              <div className="card-header">
                <h4>{title}</h4>
              </div>
              <div className="card-body" style={{ height: 400 }}>
                {chart}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export { PageHome };
export default PageHome;
