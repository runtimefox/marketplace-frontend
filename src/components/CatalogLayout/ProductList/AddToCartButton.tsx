'use client';

import { useCallback } from 'react';
import { ShoppingBasket } from 'lucide-react';
import { useAddToCart } from '@/hooks/useAddToCart';

interface IAddToCartButtonProps {
  productId: string;
  productName: string;
  disabled: boolean;
}

export const AddToCartButton = ({ productId, productName, disabled }: IAddToCartButtonProps) => {
  const { addToCart, isLoading } = useAddToCart();

  const handleClick = useCallback(() => {
    void addToCart({ id: productId, name: productName });
  }, [addToCart, productId, productName]);

  return (
    <button
      type="button"
      aria-label="Add to cart"
      onClick={handleClick}
      disabled={disabled || isLoading}
      className="relative z-10 flex size-8 shrink-0 items-center justify-center text-primary transition-colors hover:text-primary-hover disabled:pointer-events-none disabled:opacity-50">
      <ShoppingBasket className="size-5" />
    </button>
  );
};
