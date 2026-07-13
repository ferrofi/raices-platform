import { useEffect, useMemo, useState } from "react";

import SearchBar from "../components/common/SearchBar";
import PageHeader from "../components/common/PageHeader";
import PrimaryButton from "../components/common/PrimaryButton";
import DataTable from "../components/common/DataTable";

import {
  InstitutionService,
} from "../services/institutionService";

import type {
  Institution,
} from "../services/institutionService";

export default function Institutions() {
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [search, setSearch] = useState("");

  async function loadInstitutions() {
    try {
      const response = await InstitutionService.getAll();
      setInstitutions(response.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadInstitutions();
  }, []);

  const filteredInstitutions = useMemo(() => {
    const text = search.toLowerCase();

    return institutions.filter((institution) => {
      return (
        institution.name.toLowerCase().includes(text) ||
        institution.short_name.toLowerCase().includes(text) ||
        institution.city.toLowerCase().includes(text)
      );
    });
  }, [institutions, search]);

  const columns = [
    { key: "name", label: "Institución" },
    { key: "short_name", label: "Nombre Corto" },
    { key: "type", label: "Tipo" },
    { key: "city", label: "Ciudad" },
    { key: "country", label: "País" },
    { key: "is_active", label: "Activo" },
  ];

  const data = filteredInstitutions.map((institution) => ({
    ...institution,
    is_active: institution.is_active ? "Sí" : "No",
  }));

  return (
    <>
      <PageHeader
        title="Instituciones"
        subtitle="Administración de Instituciones"
        action={
          <PrimaryButton>
            + Nueva Institución
          </PrimaryButton>
        }
      />

      <div style={{ marginBottom: 20 }}>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Buscar institución..."
        />
      </div>

      <DataTable
        columns={columns}
        data={data}
      />
    </>
  );
}