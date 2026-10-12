'use client';

import { useState } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';
import { getAuthSchema, type TypeAuthForm } from '@/schemas/auth.schema';
import { AvatarInput } from './AvatarInput';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { mutate, isPending } = useAuth(isLogin);

  const {
    register,
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<TypeAuthForm>({
    resolver: zodResolver(getAuthSchema(isLogin)),
    defaultValues: { email: '', password: '', username: '', avatar: null },
  });

  const onSubmit: SubmitHandler<TypeAuthForm> = (data: TypeAuthForm) => mutate(data);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    clearErrors();
  };

  return (
    <div className="flex min-h-screen items-center justify-center border-x border-gray-200 bg-gray-50 ">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          {!isLogin && (
            <>
              <Controller
                control={control}
                name="avatar"
                render={({ field }) => (
                  <AvatarInput label="Profile photo" onChange={field.onChange} />
                )}
              />
              <Input
                id="username"
                label="Username"
                type="text"
                register={register('username')}
                error={errors.username?.message}
              />
            </>
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            register={register('email')}
            error={errors.email?.message}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register('password')}
            error={errors.password?.message}
          />
          <button
            type="submit"
            disabled={isPending}
            className="h-11 w-full rounded-md bg-primary px-4 font-medium text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleMode}
            className="font-medium text-primary hover:text-primary-hover">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};
