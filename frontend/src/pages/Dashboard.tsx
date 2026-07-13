import {
  Building2,
  GraduationCap,
  BookOpen,
  Layers,
  FileText,
  FolderOpen,
} from "lucide-react";

import { Link } from "react-router-dom";

const modules = [
  {
    title: "Instituciones",
    icon: Building2,
    color: "#2563eb",
    url: "/institutions",
  },
  {
    title: "Programas",
    icon: GraduationCap,
    color: "#7c3aed",
    url: "/programs",
  },
  {
    title: "Cursos",
    icon: BookOpen,
    color: "#059669",
    url: "/courses",
  },
  {
    title: "Módulos",
    icon: Layers,
    color: "#ea580c",
    url: "/modules",
  },
  {
    title: "Lecciones",
    icon: FileText,
    color: "#dc2626",
    url: "/lessons",
  },
  {
    title: "Recursos",
    icon: FolderOpen,
    color: "#0891b2",
    url: "/resources",
  },
];

export default function Dashboard() {
  return (
    <>
      <h1
        style={{
          marginBottom: 30,
        }}
      >
        Panel Principal
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 24,
        }}
      >
        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <Link
              key={module.title}
              to={module.url}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: "0 10px 25px rgba(0,0,0,.06)",
                  cursor: "pointer",
                  transition: ".2s",
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 14,
                    background: module.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={28} />
                </div>

                <h3>{module.title}</h3>

                <p
                  style={{
                    color: "#64748b",
                  }}
                >
                  Administrar {module.title.toLowerCase()}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}