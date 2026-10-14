import type { GetProductByIdQuery, GetProductsQuery } from '@/gql/graphql';

export type TypeCatalogProduct = NonNullable<NonNullable<GetProductsQuery['products']>['nodes']>[number];

export interface ICatalogFilters {
  category: string | null;
  minPrice: string;
  maxPrice: string;
  inStock: boolean;
  minRating: string | null;
}

export type TypeCatalogFilterKey = keyof ICatalogFilters;

export type TypeCatalogFiltersPatch = Partial<Record<TypeCatalogFilterKey, string | null>>;

export type TypeProductDetails = NonNullable<GetProductByIdQuery['productById']>;

export type TypeProductImage = TypeProductDetails['images'][number];
