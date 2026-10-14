'use client';

import { useCallback, type ChangeEvent } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { useCatalogFilters } from '@/hooks/useCatalogFilters';
import { FilterRadio } from './FilterRadio';
import { PriceFilter } from './PriceFilter';

const RATING_OPTIONS = [
  { label: 'Any rating', value: null },
  { label: '4 & up', value: '4' },
  { label: '3 & up', value: '3' },
];

export const SidebarFilters = () => {
  const { categories, isLoading } = useCategories();
  const { filters, hasFilters, setFilters, resetFilters } = useCatalogFilters();

  const selectCategory = useCallback((value: string | null) => setFilters({ category: value }), [setFilters]);

  const selectRating = useCallback((value: string | null) => setFilters({ minRating: value }), [setFilters]);

  const toggleInStock = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFilters({ inStock: e.target.checked ? '1' : null }),
    [setFilters],
  );

  const applyPrice = useCallback(
    (minPrice: string, maxPrice: string) => setFilters({ minPrice, maxPrice }),
    [setFilters],
  );

  return (
    <aside className="self-start rounded-lg border border-border p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-semibold">Filter</h2>
        {hasFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-sm font-medium text-primary hover:text-primary-hover">
            Reset
          </button>
        )}
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="mb-3 font-medium">Category</h3>
          <div className="space-y-2">
            <FilterRadio
              name="category"
              label="All categories"
              value={null}
              checked={!filters.category}
              onSelect={selectCategory}
            />
            {isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}
            {categories.map((category) => (
              <FilterRadio
                key={category.id}
                name="category"
                label={category.name}
                value={category.id}
                checked={filters.category === category.id}
                onSelect={selectCategory}
              />
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 font-medium">Price</h3>
          <PriceFilter
            key={`${filters.minPrice}-${filters.maxPrice}`}
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            onApply={applyPrice}
          />
        </section>

        <section>
          <h3 className="mb-3 font-medium">Availability</h3>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={toggleInStock}
              className="size-4 accent-primary"
            />
            In stock only
          </label>
        </section>

        <section>
          <h3 className="mb-3 font-medium">Rating</h3>
          <div className="space-y-2">
            {RATING_OPTIONS.map((option) => (
              <FilterRadio
                key={option.label}
                name="rating"
                label={option.label}
                value={option.value}
                checked={filters.minRating === option.value}
                onSelect={selectRating}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};
