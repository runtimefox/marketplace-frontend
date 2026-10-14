import { useCallback } from 'react';
import { useMutation } from '@apollo/client/react';
import { toast } from 'react-hot-toast';
import { graphql } from '@/gql';
import { errorCatch } from '@/api/error';
import { useGuestCartStore } from '@/store/guestCart.store';
import { GetMyCartDocument } from './useCart';
import { useProfile } from './useProfile';

export const AddToCartDocument = graphql(`
  mutation AddToCart($input: AddToCartDtoInput!) {
    addToCart(input: $input) {
      totalQuantity
    }
  }
`);

interface IAddToCartProduct {
  id: string;
  name: string;
}

export const useAddToCart = () => {
  const { user } = useProfile();
  const addGuestItem = useGuestCartStore((state) => state.addItem);
  const [mutate, { loading }] = useMutation(AddToCartDocument, {
    update: (cache, { data }) => {
      if (!data) return;
      cache.writeQuery({ query: GetMyCartDocument, data: { myCart: data.addToCart } });
    },
  });

  const addToCart = useCallback(
    async (product: IAddToCartProduct) => {
      if (!user) {
        addGuestItem({ productId: product.id, name: product.name });
        toast.success('Added to cart');
        return;
      }

      try {
        await mutate({ variables: { input: { productId: product.id, quantity: 1 } } });
        toast.success('Added to cart');
      } catch (error) {
        toast.error(errorCatch(error));
      }
    },
    [user, addGuestItem, mutate],
  );

  return { addToCart, isLoading: loading };
};
