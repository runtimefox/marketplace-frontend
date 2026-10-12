import { isAxiosError } from 'axios';

interface IProblemDetails {
  title?: string;
  detail?: string;
  errors?: Record<string, string[]>;
}

export const errorCatch = (error: unknown): string => {
  if (isAxiosError<IProblemDetails | string>(error)) {
    if (error.response?.status === 429) return 'Too many attempts, try again later';

    const data = error.response?.data;
    if (typeof data === 'string' && data) return data;
    if (data && typeof data === 'object') {
      const firstError = data.errors && Object.values(data.errors).flat()[0];
      return firstError ?? data.detail ?? data.title ?? error.message;
    }
  }
  return error instanceof Error ? error.message : 'Something went wrong';
};
