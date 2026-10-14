import { z } from 'zod';

const priceField = z
  .string()
  .trim()
  .refine((value) => value === '' || /^\d+(\.\d{1,2})?$/.test(value), 'Enter a valid price');

export const priceFilterSchema = z
  .object({
    minPrice: priceField,
    maxPrice: priceField,
  })
  .refine(
    ({ minPrice, maxPrice }) => minPrice === '' || maxPrice === '' || Number(minPrice) <= Number(maxPrice),
    { message: "Min can't be greater than max", path: ['maxPrice'] },
  );

export type TypePriceFilterForm = z.infer<typeof priceFilterSchema>;
