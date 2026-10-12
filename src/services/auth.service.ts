import { axiosAuth, axiosClassic } from '@/api/interceptors';
import type { IAuthResponse, IImageResponse, ILoginRequest, IRegisterRequest } from '@/types/auth.type';
import type { TypeUserResponse } from '@/types/user.type';

class Auth {
  private URL = '/api/auth';

  async login(data: ILoginRequest) {
    return axiosClassic.post<IAuthResponse>(`${this.URL}/login`, data);
  }
  async register(data: IRegisterRequest) {
    return axiosClassic.post<IAuthResponse>(`${this.URL}/register`, data);
  }

  async uploadAvatar(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return axiosAuth.put<IImageResponse>(`${this.URL}/me/avatar`, formData);
  }

  async me() {
    return axiosAuth.get<TypeUserResponse>(`${this.URL}/me`);
  }

  async logout() {
    return axiosClassic.post(`${this.URL}/logout`);
  }
}

export const authService = new Auth();
