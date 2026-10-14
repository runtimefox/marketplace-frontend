'use client';
import Link from 'next/link';
import { IconButton } from '@/components/ui/IconButton';
import { Bell, LogIn, Store } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';
import { pages } from '@/config/menu.config';
import { useProfile } from '@/hooks/useProfile';
import { useLogout } from '@/hooks/useLogout';
import { useCart } from '@/hooks/useCart';
import { Container } from '@/components/ui/Container';

export const Header = () => {
  const { user } = useProfile();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  const { totalQuantity } = useCart(Boolean(user));

  const handleLogout = useCallback(() => logout(), [logout]);

  return (
    <header className="border-b border-border bg-background">
      <Container className="flex h-20 items-center gap-4 lg:gap-10">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Store className="size-8" color="#ff7900" />
          <span className="hidden text-xl font-semibold text-foreground sm:block">Marketplace</span>
        </Link>

        <form
          action="/search"
          className="flex h-12 min-w-0 flex-1 items-center rounded-full border border-border bg-background pr-1 focus-within:border-primary">
          <input
            type="search"
            name="q"
            placeholder="Search products"
            className="h-full min-w-0 flex-1 bg-transparent px-4 text-foreground outline-none placeholder:text-placeholder"
          />
          <button
            type="submit"
            className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-primary px-5 font-medium text-white transition-colors hover:bg-primary-hover">
            Search
          </button>
        </form>

        <div className="flex shrink-0 items-center gap-1">
          <IconButton label="Cart">
            <ShoppingCart />
            {totalQuantity > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold text-primary-foreground">
                {totalQuantity > 99 ? '99+' : totalQuantity}
              </span>
            )}
          </IconButton>
          <IconButton label="Notifications">
            <Bell className="size-6" />
          </IconButton>
          <span className="mx-3 hidden h-8 w-px bg-border sm:block" />
          {user ? (
            <>
              <Link href={pages.PROFILE} className="flex items-center gap-3">
                <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-surface font-medium text-muted-foreground">
                  {user.avatar ? (
                    <Image
                      src={user.avatar.smallUrl}
                      alt={user.username}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  ) : (
                    user.username[0]?.toUpperCase()
                  )}
                </span>
                <span className="hidden font-medium text-foreground md:block">{user.username}</span>
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="ml-3 flex h-10 items-center gap-2 rounded-full bg-primary px-5 font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-60">
                Logout
              </button>
            </>
          ) : (
            <Link
              href={pages.AUTH}
              className="flex h-10 items-center gap-2 rounded-full bg-primary px-5 font-medium text-white transition-colors hover:bg-primary-hover">
              <LogIn />
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};
