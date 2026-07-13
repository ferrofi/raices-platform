import PrimaryButton from "../common/PrimaryButton";

export default function QuickActions() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: 24,
        boxShadow: "0 10px 25px rgba(0,0,0,.05)",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          color: "#172554",
        }}
      >
        Acciones rápidas
      </h3>

      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <PrimaryButton>Nuevo Programa</PrimaryButton>

        <PrimaryButton>Nuevo Curso</PrimaryButton>

        <PrimaryButton>Nuevo Módulo</PrimaryButton>
      </div>
    </div>
  );
}