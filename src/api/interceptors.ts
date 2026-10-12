import axios, { type CreateAxiosDefaults } from 'axios';

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosAuth = axios.create(options);

axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && originalRequest && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      await axiosClassic.post('/api/auth/refresh');
      return axiosAuth.request(originalRequest);
    }
    throw error;
  },
);

export { axiosClassic, axiosAuth };
