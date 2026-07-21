import api from "../api/api";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  institution: string | null;
  is_staff: boolean;
  is_superuser: boolean;
}

export async function login(data: LoginRequest) {
  const response = await api.post<LoginResponse>("/auth/login/", data);

  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);

  return response.data;
}

export async function getCurrentUser() {
  const response = await api.get<User>("/auth/me/");
  return response.data;
}

export function logout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}