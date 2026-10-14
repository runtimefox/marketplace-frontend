import { useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { TypeProductImage } from '@/types/catalog.type';

interface IProductThumbnailProps {
  image: TypeProductImage;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
}

export const ProductThumbnail = ({ image, index, isActive, onSelect }: IProductThumbnailProps) => {
  const handleClick = useCallback(() => onSelect(index), [onSelect, index]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Show image ${index + 1}`}
      aria-pressed={isActive}
      className={cn(
        'relative size-16 shrink-0 overflow-hidden rounded-md border-2 bg-surface transition-colors',
        isActive ? 'border-primary' : 'border-transparent hover:border-border',
      )}>
      <Image src={image.smallUrl} alt="" fill unoptimized className="object-cover" />
    </button>
  );
};
