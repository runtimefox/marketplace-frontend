'use client';

import { useState } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { makeApolloClient } from '@/lib/apollo/client';

export function Providers({ children }: { children: React.ReactNode }) {
  const [apolloClient] = useState(makeApolloClient);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </QueryClientProvider>
  );
}
