'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { pages } from '@/config/menu.config';
import { useProduct } from '@/hooks/useProduct';
import { formatPrice } from '@/lib/format';
import { ProductGallery } from './ProductGallery';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading, error } = useProduct(id);

  if (isLoading) {
    return (
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square animate-pulse rounded-lg bg-surface" />
        <div className="space-y-4">
          <div className="h-8 w-3/4 animate-pulse rounded-md bg-surface" />
          <div className="h-6 w-1/3 animate-pulse rounded-md bg-surface" />
          <div className="h-24 animate-pulse rounded-md bg-surface" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-border p-10 text-center">
        <p className="font-medium text-foreground">
          {error ? "Couldn't load the product. Try again later." : 'Product not found'}
        </p>
        <Link href={pages.HOME} className="text-sm font-medium text-primary hover:text-primary-hover">
          Back to catalog
        </Link>
      </div>
    );
  }

  const isInStock = product.stock > 0;

  return (
    <article className="grid gap-8 md:grid-cols-2">
      <ProductGallery key={product.id} images={product.images} name={product.name} />

      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <Link
            href={`${pages.HOME}?category=${product.category.id}`}
            className="text-sm text-muted-foreground hover:text-primary">
            {product.category.name}
          </Link>
          <h1 className="text-2xl font-semibold text-foreground">{product.name}</h1>
          <p className="text-sm text-muted-foreground">
            {product.reviewCount > 0
              ? `${product.rating.toFixed(1)} · ${product.reviewCount} reviews`
              : 'No reviews yet'}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-3xl font-semibold text-foreground">{formatPrice(product.price)}</p>
          <p className={isInStock ? 'text-sm text-success' : 'text-sm text-error'}>
            {isInStock ? `In stock: ${product.stock}` : 'Out of stock'}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-border p-4">
          <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface font-medium text-muted-foreground">
            {product.seller.logo ? (
              <Image src={product.seller.logo.smallUrl} alt="" fill unoptimized className="object-cover" />
            ) : (
              product.seller.name[0]?.toUpperCase()
            )}
          </span>
          <div>
            <p className="font-medium text-foreground">{product.seller.name}</p>
            <p className="text-xs text-muted-foreground">Seller rating {product.seller.rating.toFixed(1)}</p>
          </div>
        </div>

        {product.description && (
          <section className="space-y-2">
            <h2 className="font-semibold text-foreground">Description</h2>
            <p className="text-sm whitespace-pre-line text-muted-foreground">{product.description}</p>
          </section>
        )}
      </div>
    </article>
  );
};
