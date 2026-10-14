'use client';

import { Button } from '@/components/ui/button';
import { useCatalogFilters } from '@/hooks/useCatalogFilters';
import { PRODUCTS_PAGE_SIZE, useProducts } from '@/hooks/useProducts';
import { ProductCard } from './ProductCard';
import Link from 'next/link';
import { pages } from '@/config/menu.config';

const SKELETON_ITEMS = Array.from({ length: PRODUCTS_PAGE_SIZE }, (_, index) => index);

const gridClassName = 'grid grid-cols-2 gap-4 lg:grid-cols-3';

export const ProductList = () => {
  const { filters, hasFilters, resetFilters } = useCatalogFilters();
  const { products, totalCount, hasNextPage, isLoading, isLoadingMore, error, loadMore } =
    useProducts(filters);

  if (error) {
    return (
      <section className="rounded-lg border border-border p-6 text-sm text-error">
        Couldn&apos;t load products. Try again later.
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={gridClassName}>
        {SKELETON_ITEMS.map((item) => (
          <div key={item} className="aspect-[3/4] animate-pulse rounded-lg bg-surface" />
        ))}
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="flex flex-col items-center gap-4 rounded-lg border border-border p-10 text-center">
        <p className="font-medium text-foreground">No products found</p>
        {hasFilters && (
          <Button type="button" variant="outline" size="lg" onClick={resetFilters}>
            Reset filters
          </Button>
        )}
      </section>
    );
  }

  return (
    <section>
      <p className="mb-4 text-sm text-muted-foreground">{totalCount} products</p>
      <div className={gridClassName}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={pages.PRODUCT(product.id)}
            className="block h-full rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      {hasNextPage && (
        <div className="mt-6 flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={loadMore}
            disabled={isLoadingMore}>
            {isLoadingMore ? 'Loading…' : 'Load more'}
          </Button>
        </div>
      )}
    </section>
  );
};
