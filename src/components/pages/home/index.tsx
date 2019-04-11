import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ROUTER } from '../../../constants';

import { ContextUsers } from '../../../contexts';

const PageHome = () => {
  const { users } = useContext(ContextUsers)[0];
  return (
    <>
      <Link to={ROUTER.ADD_USER}>Add a new user</Link>
      <Link to={ROUTER.IMAGE_PREVIEWER}>Image Previewer</Link>
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
