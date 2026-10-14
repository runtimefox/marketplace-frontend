'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

const ACCEPTED_TYPES = { 'image/jpeg': [], 'image/png': [], 'image/webp': [] };
const MAX_SIZE = 10 * 1024 * 1024;

interface IAvatarInputProps {
  label: string;
  onChange?: (file: File | null) => void;
}

export const AvatarInput = ({ label, onChange }: IAvatarInputProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const onDropAccepted = useCallback(
    ([file]: File[]) => {
      setPreview(URL.createObjectURL(file));
      onChange?.(file);
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept: ACCEPTED_TYPES,
    maxSize: MAX_SIZE,
    multiple: false,
    onDropAccepted,
  });

  return (
    <div>
      <span className="block text-sm font-medium text-gray-600">{label}</span>
      <div
        {...getRootProps()}
        className={`mt-1.5 flex cursor-pointer items-center gap-4 rounded-md border border-dashed p-3 transition-colors ${
          isDragActive ? 'border-primary bg-primary-light' : 'border-border hover:border-primary'
        }`}
      >
        <input {...getInputProps()} />
        <span className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border bg-surface">
          {preview && <Image src={preview} alt="" fill unoptimized className="object-cover" />}
        </span>
        <span>
          <span className="block text-sm font-medium text-primary">
            {isDragActive ? 'Drop the photo here' : preview ? 'Change photo' : 'Upload or drag a photo'}
          </span>
          <span className="block text-xs text-muted-foreground">JPEG, PNG or WebP, up to 10 MB</span>
        </span>
      </div>
      {fileRejections.length > 0 && (
        <p className="mt-1 text-xs text-error">{fileRejections[0].errors[0].message}</p>
      )}
    </div>
  );
};
