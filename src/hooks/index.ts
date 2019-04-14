import * as React from 'react';
import { useReducer } from 'react';

import { UsersState } from '../types';

const reducerAddUser = (
  { users }: UsersState,
  { users: newUser }: UsersState,
) => ({
  users: [...users, ...newUser],
});

export const useAddUser = (initialState: UsersState): [UsersState, any] =>
  useReducer(reducerAddUser, initialState);
