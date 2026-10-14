import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { TypeCatalogProduct } from '@/types/catalog.type';
import { pages } from '@/config/menu.config';
import { formatPrice } from '@/lib/format';
import { AddToCartButton } from './AddToCartButton';

interface IProductCardProps {
  product: TypeCatalogProduct;
}

const ProductCardBase = ({ product }: IProductCardProps) => (
  <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow focus-within:ring-2 focus-within:ring-ring hover:shadow-md">
    <div className="relative aspect-[4/3] bg-surface">
      {product.mainImage && (
        <Image
          src={product.mainImage.smallUrl}
          alt={product.name}
          fill
          unoptimized
          className="object-contain p-3"
        />
      )}
      {product.stock === 0 && (
        <span className="absolute top-2 left-2 rounded-md bg-background/90 px-2 py-0.5 text-xs font-medium text-muted-foreground">
          Out of stock
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col gap-1 p-3">
      <p className="text-base font-semibold text-foreground">{formatPrice(product.price)}</p>
      <h3 className="line-clamp-2 text-sm text-foreground">
        <Link
          href={pages.PRODUCT(product.id)}
          className="after:absolute after:inset-0 focus-visible:outline-none">
          {product.name}
        </Link>
      </h3>
      <div className="mt-auto flex items-center gap-2 pt-2">
        <span className="flex h-6 shrink-0 items-center gap-1 rounded-full bg-rating px-2 text-xs font-medium text-foreground">
          {product.reviewCount > 0 ? product.rating.toFixed(1) : '—'}
        </span>
        <span className="h-4 w-px bg-border" />
        <span className="truncate text-xs text-muted-foreground">{product.reviewCount} reviews</span>
        <span className="ml-auto">
          <AddToCartButton
            productId={product.id}
            productName={product.name}
            disabled={product.stock === 0} />
        </span>
      </div>
    </div>
  </article>
);

export const ProductCard = memo(ProductCardBase);
