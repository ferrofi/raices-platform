import {
  Bell,
  Search,
  UserCircle2,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../auth/useAuth";

import "../../styles/components/topbar.css";

export default function Topbar() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const fullName =
    user?.first_name && user?.last_name
      ? `${user.first_name} ${user.last_name}`
      : user?.email ?? "Usuario";

  return (
    <header className="topbar">
      <div>
        <h1>Dashboard</h1>
        <p>Bienvenido nuevamente a RAÍCES</p>
      </div>

      <div className="topbar-actions">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Buscar..."
          />
        </div>

        <button className="icon-button">
          <Bell size={20} />
        </button>

        <div className="user-profile">
          <UserCircle2 size={34} />

          <div>
            <strong>{fullName}</strong>

            <span>
              {user?.is_superuser
                ? "Super Administrador"
                : user?.is_staff
                ? "Administrador"
                : "Usuario"}
            </span>
          </div>
        </div>

        <button
          className="icon-button"
          onClick={handleLogout}
          title="Cerrar sesión"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}