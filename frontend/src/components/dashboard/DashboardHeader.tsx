interface DashboardHeaderProps {
  user: string;
}

export default function DashboardHeader({
  user,
}: DashboardHeaderProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 18,
        padding: 28,
        marginBottom: 30,
        boxShadow: "0 10px 30px rgba(0,0,0,.05)",
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#172554",
        }}
      >
        ¡Bienvenido {user}!
      </h2>

      <p
        style={{
          marginTop: 10,
          color: "#64748b",
        }}
      >
        Hoy tienes acceso a toda la administración de RAÍCES.
      </p>
    </div>
  );
}