import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { TypeProductImage } from '@/types/catalog.type';
import { ProductThumbnail } from './ProductThumbnail';

interface IProductGalleryProps {
  images: TypeProductImage[];
  name: string;
}

export const ProductGallery = ({ images, name }: IProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sortedImages = useMemo(() => [...images].sort((a, b) => a.position - b.position), [images]);

  const activeImage = sortedImages[activeIndex];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-surface">
        {activeImage && (
          <Image src={activeImage.largeUrl} alt={name} fill unoptimized priority className="object-cover" />
        )}
      </div>
      {sortedImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {sortedImages.map((image, index) => (
            <ProductThumbnail
              key={image.id}
              image={image}
              index={index}
              isActive={index === activeIndex}
              onSelect={setActiveIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};
