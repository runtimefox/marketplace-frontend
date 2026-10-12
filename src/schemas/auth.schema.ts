import { z } from 'zod';

export const getAuthSchema = (isLogin: boolean) =>
  z.object({
    email: z.email('Enter a valid email').max(100, 'Max 100 characters'),
    password: isLogin
      ? z.string().min(1, 'Enter your password')
      : z.string().min(8, 'At least 8 characters').max(128, 'Max 128 characters'),
    username: isLogin
      ? z.string()
      : z.string().trim().min(1, 'Enter a username').max(100, 'Max 100 characters'),
    avatar: z.instanceof(File).nullable(),
  });

export type TypeAuthForm = z.infer<ReturnType<typeof getAuthSchema>>;
