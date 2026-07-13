import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Programs from "./pages/Programs";
import Courses from "./pages/Courses";
import Modules from "./pages/Modules";
import Lessons from "./pages/Lessons";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="programs" element={<Programs />} />

          <Route path="courses" element={<Courses />} />

          <Route path="modules" element={<Modules />} />

          <Route path="lessons" element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}