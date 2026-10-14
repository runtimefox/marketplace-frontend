import { useCallback, useMemo } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { priceFilterSchema, type TypePriceFilterForm } from '@/schemas/catalog.schema';

interface IPriceFilterProps {
  minPrice: string;
  maxPrice: string;
  onApply: (minPrice: string, maxPrice: string) => void;
}

const resolver = zodResolver(priceFilterSchema);

const inputClassName =
  'h-9 w-full min-w-0 rounded-md border px-3 text-sm text-foreground outline-none transition-colors placeholder:text-placeholder focus:ring-2';

export const PriceFilter = ({ minPrice, maxPrice, onApply }: IPriceFilterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypePriceFilterForm>({
    resolver,
    defaultValues: { minPrice, maxPrice },
  });

  const onSubmit: SubmitHandler<TypePriceFilterForm> = useCallback(
    (data) => onApply(data.minPrice, data.maxPrice),
    [onApply],
  );

  const submit = useMemo(() => handleSubmit(onSubmit), [handleSubmit, onSubmit]);

  const error = errors.minPrice?.message ?? errors.maxPrice?.message;

  return (
    <form onSubmit={submit} noValidate>
      <div className="flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          placeholder="Min"
          aria-label="Min price"
          aria-invalid={!!errors.minPrice}
          {...register('minPrice')}
          className={cn(
            inputClassName,
            errors.minPrice
              ? 'border-error focus:ring-error/20'
              : 'border-border focus:border-primary focus:ring-primary/20',
          )}
        />
        <span className="text-muted-foreground">–</span>
        <input
          type="number"
          inputMode="decimal"
          placeholder="Max"
          aria-label="Max price"
          aria-invalid={!!errors.maxPrice}
          {...register('maxPrice')}
          className={cn(
            inputClassName,
            errors.maxPrice
              ? 'border-error focus:ring-error/20'
              : 'border-border focus:border-primary focus:ring-primary/20',
          )}
        />
        <Button type="submit" size="lg">
          OK
        </Button>
      </div>
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </form>
  );
};
