import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

import "../../styles/components/topbar.css";

export default function Topbar() {
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
            <strong>Fernando</strong>
            <span>Administrador</span>
          </div>
        </div>

      </div>
    </header>
  );
}