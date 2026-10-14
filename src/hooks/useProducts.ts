import { useCallback, useMemo } from 'react';
import { NetworkStatus } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { graphql } from '@/gql';
import type { ProductDtoFilterInput } from '@/gql/graphql';
import type { ICatalogFilters } from '@/types/catalog.type';

export const PRODUCTS_PAGE_SIZE = 12;

export const GetProductsDocument = graphql(`
  query GetProducts($first: Int!, $after: String, $where: ProductDtoFilterInput) {
    products(first: $first, after: $after, where: $where, order: [{ name: ASC }, { id: ASC }]) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        name
        price
        stock
        rating
        reviewCount
        mainImage {
          smallUrl
        }
        seller {
          id
          name
        }
      }
    }
  }
`);

const buildWhere = (filters: ICatalogFilters): ProductDtoFilterInput | undefined => {
  const where: ProductDtoFilterInput = {};

  if (filters.category) where.category = { id: { eq: filters.category } };

  if (filters.minPrice || filters.maxPrice) {
    where.price = {
      ...(filters.minPrice && { gte: Number(filters.minPrice) }),
      ...(filters.maxPrice && { lte: Number(filters.maxPrice) }),
    };
  }

  if (filters.inStock) where.stock = { gt: 0 };

  if (filters.minRating) where.rating = { gte: Number(filters.minRating) };

  return Object.keys(where).length > 0 ? where : undefined;
};

export const useProducts = (filters: ICatalogFilters) => {
  const where = useMemo(() => buildWhere(filters), [filters]);

  const { data, error, networkStatus, fetchMore } = useQuery(GetProductsDocument, {
    variables: { first: PRODUCTS_PAGE_SIZE, where },
    notifyOnNetworkStatusChange: true,
  });

  const products = useMemo(() => data?.products?.nodes ?? [], [data]);
  const pageInfo = data?.products?.pageInfo;

  const loadMore = useCallback(() => {
    if (!pageInfo?.hasNextPage) return;
    void fetchMore({ variables: { after: pageInfo.endCursor } });
  }, [fetchMore, pageInfo]);

  return {
    products,
    totalCount: data?.products?.totalCount ?? 0,
    hasNextPage: pageInfo?.hasNextPage ?? false,
    isLoading: networkStatus === NetworkStatus.loading || networkStatus === NetworkStatus.setVariables,
    isLoadingMore: networkStatus === NetworkStatus.fetchMore,
    error,
    loadMore,
  };
};
