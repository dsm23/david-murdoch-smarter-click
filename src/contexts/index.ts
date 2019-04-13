import * as React from 'react';
import { createContext } from 'react';

import { initialUsers } from '../constants';

import { UsersState } from '../types';

export const ContextUsers = createContext<[UsersState, any]>(
  [{ users: [initialUsers] }, () => {}]
);
