import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Agregamos el access token a cada petición
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Renovación automática del token
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // Si el access expiró, intentamos renovarlo una sola vez
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refresh")
    ) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/auth/refresh/",
          {
            refresh: localStorage.getItem("refresh"),
          }
        );

        const newAccess = response.data.access;

        localStorage.setItem("access", newAccess);

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);
      } catch {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;