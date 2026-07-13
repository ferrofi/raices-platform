interface KpiCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

export default function KpiCard({
  title,
  value,
  icon,
  color,
}: KpiCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: 24,
        boxShadow: "0 10px 25px rgba(0,0,0,.05)",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          marginBottom: 18,
        }}
      >
        {icon}
      </div>

      <div
        style={{
          color: "#64748b",
          fontSize: 14,
        }}
      >
        {title}
      </div>

      <h2
        style={{
          margin: "10px 0",
          color: "#172554",
        }}
      >
        {value}
      </h2>

      <small
        style={{
          color: "#94a3b8",
        }}
      >
        Sincronizado con Django
      </small>
    </div>
  );
}