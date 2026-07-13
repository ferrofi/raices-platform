export default function RecentActivity() {
  const activities = [
    {
      title: "Programa creado",
      description: "Diplomado en Hermenéutica",
      time: "Hace 5 min",
    },
    {
      title: "Curso actualizado",
      description: "Introducción a la Hermenéutica",
      time: "Hace 30 min",
    },
    {
      title: "Nuevo usuario",
      description: "Profesor registrado",
      time: "Hace 1 hora",
    },
    {
      title: "Recurso agregado",
      description: "Video de interpretación bíblica",
      time: "Hace 2 horas",
    },
  ];

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
        Actividad reciente
      </h3>

      {activities.map((activity, index) => (
        <div
          key={index}
          style={{
            padding: "14px 0",
            borderBottom:
              index === activities.length - 1
                ? "none"
                : "1px solid #e2e8f0",
          }}
        >
          <strong>{activity.title}</strong>

          <div
            style={{
              color: "#64748b",
              marginTop: 4,
            }}
          >
            {activity.description}
          </div>

          <small
            style={{
              color: "#94a3b8",
            }}
          >
            {activity.time}
          </small>
        </div>
      ))}
    </div>
  );
}