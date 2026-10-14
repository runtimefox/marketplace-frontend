import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainerProps) => (
  <div className={cn('mx-auto w-full max-w-[1350px] px-6', className)}>{children}</div>
);
