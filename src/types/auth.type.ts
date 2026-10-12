import type { IUser } from './user.type';

export interface IAuthResponse {
  expiresAt: string;
}
export interface ILoginRequest {
  email: string;
  password: string;
}
export interface IRegisterRequest {
  email: string;
  password: string;
  username: string;
  avatar?: File | null;
}
export interface IImageResponse {
  smallUrl: string;
  largeUrl: string;
}
