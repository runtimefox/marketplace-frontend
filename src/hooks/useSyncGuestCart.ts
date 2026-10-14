import { useCallback } from 'react';
import { useMutation } from '@apollo/client/react';
import { toast } from 'react-hot-toast';
import { errorCatch } from '@/api/error';
import { useGuestCartStore } from '@/store/guestCart.store';
import { AddToCartDocument } from './useAddToCart';

export const useSyncGuestCart = () => {
  const [mutate] = useMutation(AddToCartDocument);

  return useCallback(async () => {
    const { items, clear } = useGuestCartStore.getState();

    for (const item of items) {
      try {
        await mutate({ variables: { input: { productId: item.productId, quantity: item.quantity } } });
      } catch (error) {
        toast.error(`${item.name} wasn't added to cart: ${errorCatch(error)}`);
      }
    }

    clear();
  }, [mutate]);
};
