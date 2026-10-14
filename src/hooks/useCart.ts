import { useQuery } from '@apollo/client/react';
import { graphql } from '@/gql';
import { selectGuestCartQuantity, useGuestCartStore } from '@/store/guestCart.store';

export const GetMyCartDocument = graphql(`
  query GetMyCart {
    myCart {
      totalQuantity
    }
  }
`);

export const useCart = (isAuthenticated: boolean) => {
  const { data, loading } = useQuery(GetMyCartDocument, { skip: !isAuthenticated });
  const guestQuantity = useGuestCartStore(selectGuestCartQuantity);

  return {
    totalQuantity: isAuthenticated ? (data?.myCart.totalQuantity ?? 0) : guestQuantity,
    isLoading: loading,
  };
};
