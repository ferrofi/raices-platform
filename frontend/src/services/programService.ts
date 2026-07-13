import api from "./api";

export interface Program {
  id?: string;
  institution: string;
  code: string;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  program_type: string;
  level: string;
  duration_value: number;
  duration_unit: string;
  academic_hours: number;
  certificate_enabled: boolean;
  is_published: boolean;
  is_active: boolean;
}

const BASE_URL = "programs/";

export const ProgramService = {
  async getAll() {
    const { data } = await api.get(BASE_URL);
    return data;
  },

  async get(id: string) {
    const { data } = await api.get(`${BASE_URL}${id}/`);
    return data;
  },

  async create(program: Program) {
    const { data } = await api.post(BASE_URL, program);
    return data;
  },

  async update(id: string, program: Program) {
    const { data } = await api.put(`${BASE_URL}${id}/`, program);
    return data;
  },

  async delete(id: string) {
    await api.delete(`${BASE_URL}${id}/`);
  },
};