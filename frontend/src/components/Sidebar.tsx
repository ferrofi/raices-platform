import { NavLink } from "react-router-dom";
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
  Settings,
} from "lucide-react";

const menu = [
  { name: "Panel", path: "/", icon: LayoutDashboard },
  { name: "Instituciones", path: "/institutions", icon: Building2 },
  { name: "Programas", path: "/programs", icon: GraduationCap },
  { name: "Cursos", path: "/courses", icon: BookOpen },
  { name: "Módulos", path: "/modules", icon: Layers },
  { name: "Lecciones", path: "/lessons", icon: FileText },
  { name: "Recursos", path: "/resources", icon: FolderOpen },
  { name: "Evaluaciones", path: "/assessments", icon: ClipboardCheck },
  { name: "Usuarios", path: "/users", icon: Users },
  { name: "Configuración", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>RAÍCES</h2>
        <p>Excelencia digital</p>
      </div>

      <nav>
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
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