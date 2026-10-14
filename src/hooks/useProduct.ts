import { useQuery } from '@apollo/client/react';
import { graphql } from '@/gql';

export const GetProductByIdDocument = graphql(`
  query GetProductById($id: UUID!) {
    productById(id: $id) {
      id
      name
      description
      price
      stock
      rating
      reviewCount
      category {
        id
        name
      }
      seller {
        id
        name
        rating
        logo {
          smallUrl
        }
      }
      images {
        id
        position
        smallUrl
        largeUrl
      }
    }
  }
`);

export const useProduct = (id: string) => {
  const { data, loading, error } = useQuery(GetProductByIdDocument, { variables: { id } });
  return { product: data?.productById ?? null, isLoading: loading, error };
};
