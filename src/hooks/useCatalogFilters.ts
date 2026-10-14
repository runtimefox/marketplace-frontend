import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type {
  ICatalogFilters,
  TypeCatalogFilterKey,
  TypeCatalogFiltersPatch,
} from '@/types/catalog.type';

const FILTER_KEYS: TypeCatalogFilterKey[] = ['category', 'minPrice', 'maxPrice', 'inStock', 'minRating'];

export const useCatalogFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const filters = useMemo<ICatalogFilters>(
    () => ({
      category: searchParams.get('category'),
      minPrice: searchParams.get('minPrice') ?? '',
      maxPrice: searchParams.get('maxPrice') ?? '',
      inStock: searchParams.get('inStock') === '1',
      minRating: searchParams.get('minRating'),
    }),
    [searchParams],
  );

  const hasFilters = useMemo(() => FILTER_KEYS.some((key) => searchParams.has(key)), [searchParams]);

  const navigate = useCallback(
    (params: URLSearchParams) => {
      const query = params.toString();
      replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, replace],
  );

  const setFilters = useCallback(
    (patch: TypeCatalogFiltersPatch) => {
      const params = new URLSearchParams(searchParams);
      Object.entries(patch).forEach(([key, value]) => {
        if (value) params.set(key, value);
        else params.delete(key);
      });
      navigate(params);
    },
    [searchParams, navigate],
  );

  const resetFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    FILTER_KEYS.forEach((key) => params.delete(key));
    navigate(params);
  }, [searchParams, navigate]);

  return { filters, hasFilters, setFilters, resetFilters };
};
