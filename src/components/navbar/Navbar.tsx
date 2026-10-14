'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import { Menu, ChevronDown } from 'lucide-react';
import { useCategories } from '@/hooks/useCategories';
import { Container } from '@/components/ui/Container';

export const Navbar = () => {
  const { categories, isLoading } = useCategories();

  return (
    <nav>
      <Container className="py-5">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer outline-none">
            <div className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
              <Menu size={16} />
              <span>Categories</span>
              <ChevronDown size={16} />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            {isLoading && <DropdownMenuItem disabled>Loading…</DropdownMenuItem>}
            {!isLoading && categories.length === 0 && (
              <DropdownMenuItem disabled>No categories</DropdownMenuItem>
            )}
            {categories.map((category) => (
              <DropdownMenuItem key={category.id}>{category.name}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Container>
    </nav>
  );
};
