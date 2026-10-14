import { useQuery } from '@apollo/client/react';
import { graphql } from '@/gql';

export const GetCategoriesDocument = graphql(`
  query GetCategories {
    categories(order: [{ name: ASC }]) {
      id
      name
    }
  }
`);

export const useCategories = () => {
  const { data, loading } = useQuery(GetCategoriesDocument);
  return { categories: data?.categories ?? [], isLoading: loading };
};
