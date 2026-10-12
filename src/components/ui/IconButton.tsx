import type { ReactNode } from 'react';

export const IconButton = ({ label, children }: { label: string; children?: ReactNode }) => (
  <button
    type="button"
    aria-label={label}
    className="relative flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
  >
    {children}
  </button>
);
