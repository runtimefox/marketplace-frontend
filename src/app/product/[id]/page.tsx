import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { ProductDetails } from '@/components/product/ProductDetails';
import { Container } from '@/components/ui/Container';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main className="my-6">
        <Container>
          <Suspense fallback={<div className="aspect-square animate-pulse rounded-lg bg-surface md:w-1/2" />}>
            <ProductDetails />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
