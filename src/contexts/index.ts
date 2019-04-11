import * as React from 'react';
import { createContext } from 'react';

import { initialUsers } from '../constants';

import { UsersState } from '../types';

const ContextUsers = createContext<[UsersState, any]>([
    { users: [initialUsers] },
    () => {},
  ]);

// const ContextUsers =
//   createContext<{}
//   [UsersState, any] >
//   [
//     {
//       users: initialUsers,
//     },
//     () => {},
//   ];

export { ContextUsers };
export default ContextUsers;
