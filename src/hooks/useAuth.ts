import { pages } from '@/config/menu.config';
import { authService } from '@/services/auth.service';
import type { IRegisterRequest } from '@/types/auth.type';
import { useMutation } from '@tanstack/react-query';
import { useApolloClient } from '@apollo/client/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { errorCatch } from '@/api/error';
import { useSyncGuestCart } from './useSyncGuestCart';
export const useAuth = (isLogin: boolean) => {
  const { push } = useRouter();
  const client = useApolloClient();
  const syncGuestCart = useSyncGuestCart();
  const { mutate, data, isPending, isError } = useMutation({
    mutationKey: [isLogin ? 'login' : 'register'],
    mutationFn: async ({ avatar, ...data }: IRegisterRequest) => {
      if (isLogin) {
        return authService.login(data);
      }
      const response = await authService.register(data);
      if (avatar) {
        await authService.uploadAvatar(avatar);
      }
      return response;
    },
    onSuccess: async () => {
      await syncGuestCart();
      await client.resetStore();
      toast.success(isLogin ? 'Login successful' : 'Registration successful');
      push(pages.HOME);
    },
    onError: (error) => {
      toast.error(errorCatch(error));
    },
  });
  return { mutate, data, isPending, isError };
};
