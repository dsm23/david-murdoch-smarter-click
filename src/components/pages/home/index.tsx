import * as React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'reactstrap';

import { Revenue, OverlaysHappyPath, UserImpressions } from '../../charts';

import { ContextUsers } from '../../../contexts';

import { TableUsers } from '../../table-users';

const charts = [
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
];

const PageHome = () => {
  const { users } = useContext(ContextUsers)[0];
  return (
    <>
      <h2>List of Users</h2>
      <TableUsers users={users} />
      <Row className="mt-5">
        {charts.map(({ title, chart }) => (
          <Col sm="12" key={title}>
            <div className="card mb-3">
              <div className="card-header">
                <h4>{title}</h4>
              </div>
              {/* Responsive components from nivo require a parent with a height style */}
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
