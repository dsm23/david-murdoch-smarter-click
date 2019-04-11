export interface UserState {
  user: string;
  password: string;
}

export interface UsersState {
  users: UserState[];
}
