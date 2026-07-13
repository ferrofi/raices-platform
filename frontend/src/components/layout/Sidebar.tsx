import {
  LayoutDashboard,
  Building2,
  GraduationCap,
  BookOpen,
  Layers,
  FileText,
  FolderOpen,
  ClipboardCheck,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "../../styles/components/sidebar.css";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Instituciones", icon: Building2, path: "/institutions" },
  { name: "Programas", icon: GraduationCap, path: "/programs" },
  { name: "Cursos", icon: BookOpen, path: "/courses" },
  { name: "Módulos", icon: Layers, path: "/modules" },
  { name: "Lecciones", icon: FileText, path: "/lessons" },
  { name: "Recursos", icon: FolderOpen, path: "/resources" },
  { name: "Evaluaciones", icon: ClipboardCheck, path: "/assessments" },
  { name: "Usuarios", icon: Users, path: "/users" },
  { name: "Reportes", icon: BarChart3, path: "/reports" },
  { name: "Configuración", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>RAÍCES</h2>
        <span>Digital Excellence</span>
      </div>

      <nav>
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}