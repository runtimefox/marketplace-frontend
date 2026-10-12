export type UserRole = 'Customer' | 'Admin';
export interface IUser {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}

export type TypeUserResponse = Omit<IUser, 'password'> & {
  id: string;
  role: UserRole;
};
