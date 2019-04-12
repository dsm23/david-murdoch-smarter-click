import * as React from 'react';
import { useContext } from 'react';

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
    </>
  );
};

export { PageHome };
export default PageHome;
