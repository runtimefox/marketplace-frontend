class Pages {
  HOME = '/';
  AUTH = '/auth';
  PROFILE = '/profile';
  PRODUCT = (id: string) => `/product/${id}`;
}
export const pages = new Pages();
