import api from "./api";

export interface Institution {
  id?: string;
  type: string;
  name: string;
  short_name: string;
  slug: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  state: string;
  country: string;
  logo: string;
  is_active: boolean;
}

const BASE_URL = "institutions/";

export const InstitutionService = {
  async getAll() {
    const { data } = await api.get(BASE_URL);
    return data;
  },

  async get(id: string) {
    const { data } = await api.get(`${BASE_URL}${id}/`);
    return data;
  },

  async create(institution: Institution) {
    const { data } = await api.post(BASE_URL, institution);
    return data;
  },

  async update(id: string, institution: Institution) {
    const { data } = await api.put(`${BASE_URL}${id}/`, institution);
    return data;
  },

  async delete(id: string) {
    await api.delete(`${BASE_URL}${id}/`);
  },
};