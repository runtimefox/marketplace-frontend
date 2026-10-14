'use client';

import { Button } from '@/components/ui/button';
import { useCatalogFilters } from '@/hooks/useCatalogFilters';
import { PRODUCTS_PAGE_SIZE, useProducts } from '@/hooks/useProducts';
import { ProductCard } from './ProductCard';

const SKELETON_ITEMS = Array.from({ length: PRODUCTS_PAGE_SIZE }, (_, index) => index);

const gridClassName = 'grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4';

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
          <ProductCard key={product.id} product={product} />
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
