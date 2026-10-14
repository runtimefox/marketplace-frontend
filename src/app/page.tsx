import { Suspense } from 'react';
import { SidebarFilters } from '@/components/CatalogLayout/SideBarFilters/sidebarFilters';
import { ProductList } from '@/components/CatalogLayout/ProductList/ProductList';
import { Header } from '@/components/Header';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-6">
        <Container className="grid grid-cols-[316px_minmax(0,1fr)] gap-8">
          <Suspense fallback={<aside className="rounded-lg border border-border p-6" />}>
            <SidebarFilters />
          </Suspense>
          <Suspense fallback={<section />}>
            <ProductList />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
