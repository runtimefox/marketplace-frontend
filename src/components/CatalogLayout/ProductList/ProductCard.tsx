import { memo } from 'react';
import Image from 'next/image';
import type { TypeCatalogProduct } from '@/types/catalog.type';
import { formatPrice } from '@/lib/format';

interface IProductCardProps {
  product: TypeCatalogProduct;
}

const ProductCardBase = ({ product }: IProductCardProps) => (
  <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
    <div className="relative aspect-square bg-surface">
      {product.mainImage && (
        <Image
          src={product.mainImage.smallUrl}
          alt={product.name}
          fill
          unoptimized
          className="object-cover"
        />
      )}
      {product.stock === 0 && (
        <span className="absolute top-2 left-2 rounded-md bg-background/90 px-2 py-0.5 text-xs font-medium text-muted-foreground">
          Out of stock
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col gap-1 p-4">
      <h3 className="line-clamp-2 text-sm font-medium text-foreground">{product.name}</h3>
      <p className="text-xs text-muted-foreground">{product.seller.name}</p>
      <p className="mt-auto pt-2 text-lg font-semibold text-foreground">
        {formatPrice(product.price)}
      </p>
      <p className="text-xs text-muted-foreground">
        {product.reviewCount > 0
          ? `${product.rating.toFixed(1)} · ${product.reviewCount} reviews`
          : 'No reviews yet'}
      </p>
    </div>
  </article>
);

export const ProductCard = memo(ProductCardBase);
