import {
  ApolloClient,
  ApolloLink,
  CombinedGraphQLErrors,
  HttpLink,
  InMemoryCache,
  ServerError,
  type FieldPolicy,
} from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import { from, switchMap } from 'rxjs';

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5086';

let refreshPromise: Promise<boolean> | null = null;

function refreshTokens() {
  refreshPromise ??= fetch(`${API_URL}/api/auth/refresh`, { method: 'POST', credentials: 'include' })
    .then((res) => res.ok)
    .catch(() => false)
    .finally(() => {
      refreshPromise = null;
    });
  return refreshPromise;
}

function isUnauthenticated(error: unknown) {
  if (ServerError.is(error)) return error.statusCode === 401;
  if (CombinedGraphQLErrors.is(error)) {
    return error.errors.some((e) => e.extensions?.code === 'AUTH_NOT_AUTHENTICATED');
  }
  return false;
}

const refreshLink = new ErrorLink(({ error, operation, forward }) => {
  if (!isUnauthenticated(error) || operation.getContext().retried) return;

  operation.setContext({ retried: true });

  return from(refreshTokens()).pipe(
    switchMap((ok) => {
      if (!ok) throw error;
      return forward(operation);
    }),
  );
});

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: 'include',
});

const connectionPolicy: FieldPolicy<{ nodes?: unknown[] }> = {
  keyArgs: ['search', 'where', 'order'],
  merge(existing, incoming, { args }) {
    if (!existing || !args?.after) return incoming;
    return { ...incoming, nodes: [...(existing.nodes ?? []), ...(incoming.nodes ?? [])] };
  },
};

export function makeApolloClient() {
  return new ApolloClient({
    link: ApolloLink.from([refreshLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            products: connectionPolicy,
          },
        },
      },
    }),
  });
}
