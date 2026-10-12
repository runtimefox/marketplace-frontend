import { authService } from '@/services/auth.service';
import { useApolloClient } from '@apollo/client/react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { errorCatch } from '@/api/error';

export const useLogout = () => {
  const client = useApolloClient();
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => client.resetStore(),
    onError: (error) => toast.error(errorCatch(error)),
  });
};
