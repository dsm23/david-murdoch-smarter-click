export interface UserState {
  email: string;
  username: string;
  password: string;
}

export interface UsersState {
  users: UserState[];
}
