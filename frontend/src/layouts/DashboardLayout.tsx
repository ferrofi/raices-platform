import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
}