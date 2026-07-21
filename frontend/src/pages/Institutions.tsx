import { useEffect, useMemo, useState } from "react";

import SearchBar from "../components/common/SearchBar";
import PageHeader from "../components/common/PageHeader";
import PrimaryButton from "../components/common/PrimaryButton";
import DataTable from "../components/common/DataTable";
import ConfirmDialog from "../components/common/ConfirmDialog";
import Modal from "../components/common/Modal";
import EntityForm from "../components/common/EntityForm";
import FormInput from "../components/common/FormInput";

import { InstitutionService } from "../services/institutionService";
import type { Institution } from "../services/institutionService";

export default function Institutions() {
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [search, setSearch] = useState("");

  const [selectedInstitution, setSelectedInstitution] =
    useState<Institution | null>(null);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [city, setCity] = useState("");

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

  async function handleDelete() {
    if (!selectedInstitution?.id) return;

    try {
      await InstitutionService.delete(selectedInstitution.id);

      await loadInstitutions();

      setDeleteDialog(false);
      setSelectedInstitution(null);
    } catch (error) {
      console.error(error);
    }
  }

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
          <PrimaryButton
            onClick={() => {
              setSelectedInstitution(null);

              setName("");
              setShortName("");
              setCity("");

              setOpenForm(true);
            }}
          >
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
        onEdit={(institution) => {
          setSelectedInstitution(institution);

          setName(institution.name);
          setShortName(institution.short_name);
          setCity(institution.city);

          setOpenForm(true);
        }}
        onDelete={(institution) => {
          setSelectedInstitution(institution);
          setDeleteDialog(true);
        }}
      />

      <Modal
        open={openForm}
        title={
          selectedInstitution
            ? "Editar Institución"
            : "Nueva Institución"
        }
        onClose={() => {
          setOpenForm(false);
          setSelectedInstitution(null);

          setName("");
          setShortName("");
          setCity("");
        }}
      >
        <EntityForm
          title="Información General"
          onSubmit={(e) => {
            e.preventDefault();

            console.log({
              name,
              shortName,
              city,
            });
          }}
          actions={
            <>
              <PrimaryButton
                onClick={() => {
                  setOpenForm(false);
                  setSelectedInstitution(null);

                  setName("");
                  setShortName("");
                  setCity("");
                }}
              >
                Cancelar
              </PrimaryButton>

              <PrimaryButton type="submit">
                Guardar
              </PrimaryButton>
            </>
          }
        >
          <FormInput
            label="Nombre"
            value={name}
            onChange={setName}
          />

          <FormInput
            label="Nombre Corto"
            value={shortName}
            onChange={setShortName}
          />

          <FormInput
            label="Ciudad"
            value={city}
            onChange={setCity}
          />
        </EntityForm>
      </Modal>

      <ConfirmDialog
        open={deleteDialog}
        title="Eliminar Institución"
        message={`¿Desea eliminar "${selectedInstitution?.name}"?`}
        onConfirm={handleDelete}
        onCancel={() => {
          setDeleteDialog(false);
          setSelectedInstitution(null);
        }}
      />
    </>
  );
}