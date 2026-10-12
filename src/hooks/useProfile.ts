import { useQuery } from '@apollo/client/react';
import { graphql } from '@/gql';

export const GetMeDocument = graphql(`
  query GetMe {
    me {
      id
      username
      email
      role
      avatar {
        smallUrl
        largeUrl
      }
    }
  }
`);

export const useProfile = () => {
  const { data, loading } = useQuery(GetMeDocument);
  return { user: data?.me ?? null, isLoading: loading };
};
