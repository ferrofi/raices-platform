import { useEffect, useMemo, useState } from "react";

import SearchBar from "../components/common/SearchBar";
import PageHeader from "../components/common/PageHeader";
import PrimaryButton from "../components/common/PrimaryButton";
import DataTable from "../components/common/DataTable";
import ConfirmDialog from "../components/common/ConfirmDialog";
import Modal from "../components/common/Modal";
import EntityForm from "../components/common/EntityForm";
import FormInput from "../components/common/FormInput";
import FormSelect from "../components/common/FormSelect";

import { ProgramService } from "../services/programService";
import type { Program } from "../services/programService";

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [search, setSearch] = useState("");

  const [selectedProgram, setSelectedProgram] =
    useState<Program | null>(null);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  async function loadPrograms() {
    try {
      const response = await ProgramService.getAll();
      setPrograms(response.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadPrograms();
  }, []);

  const filteredPrograms = useMemo(() => {
    const text = search.toLowerCase();

    return programs.filter((program) => {
      return (
        program.code.toLowerCase().includes(text) ||
        program.name.toLowerCase().includes(text) ||
        program.level.toLowerCase().includes(text)
      );
    });
  }, [programs, search]);

  async function handleDelete() {
    if (!selectedProgram?.id) return;

    try {
      await ProgramService.delete(selectedProgram.id);

      await loadPrograms();

      setDeleteDialog(false);
      setSelectedProgram(null);
    } catch (error) {
      console.error(error);
    }
  }

  const columns = [
    { key: "code", label: "Código" },
    { key: "name", label: "Programa" },
    { key: "program_type", label: "Tipo" },
    { key: "level", label: "Nivel" },
    { key: "academic_hours", label: "Horas" },
    { key: "is_published", label: "Publicado" },
  ];

  return (
    <>
      <PageHeader
        title="Programas"
        subtitle="Administración de Programas Académicos"
        action={
          <PrimaryButton
            onClick={() => setOpenForm(true)}
          >
            + Nuevo Programa
          </PrimaryButton>
        }
      />

      <div style={{ marginBottom: 20 }}>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Buscar programa..."
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredPrograms}
        onEdit={(program) => {
          setSelectedProgram(program);
          setOpenForm(true);
        }}
        onDelete={(program) => {
          setSelectedProgram(program);
          setDeleteDialog(true);
        }}
      />

      <Modal
        open={openForm}
        title={
          selectedProgram
            ? "Editar Programa"
            : "Nuevo Programa"
        }
        onClose={() => {
          setOpenForm(false);
          setSelectedProgram(null);
        }}
      >
        <EntityForm
          title="Información General"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          actions={
            <>
              <PrimaryButton
                onClick={() => {
                  setOpenForm(false);
                  setSelectedProgram(null);
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
            label="Código"
            value={selectedProgram?.code ?? ""}
            onChange={() => {}}
          />

          <FormInput
            label="Nombre"
            value={selectedProgram?.name ?? ""}
            onChange={() => {}}
          />

          <FormSelect
            label="Nivel"
            value={selectedProgram?.level ?? "BASICO"}
            onChange={() => {}}
            options={[
              { value: "BASICO", label: "Básico" },
              { value: "INTERMEDIO", label: "Intermedio" },
              { value: "AVANZADO", label: "Avanzado" },
            ]}
          />
        </EntityForm>
      </Modal>

      <ConfirmDialog
        open={deleteDialog}
        title="Eliminar Programa"
        message={`¿Desea eliminar "${selectedProgram?.name}"?`}
        onConfirm={handleDelete}
        onCancel={() => {
          setDeleteDialog(false);
          setSelectedProgram(null);
        }}
      />
    </>
  );
}