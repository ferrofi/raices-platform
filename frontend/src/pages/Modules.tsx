import { useEffect, useState } from "react";
import api from "../services/api";

interface Module {
  id: string;
  code: string;
  name: string;
  course_name: string;
  estimated_hours: number;
}

interface ModuleResponse {
  results: Module[];
}

export default function Modules() {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    const loadModules = async () => {
      try {
        const response = await api.get<ModuleResponse>("modules/");
        setModules(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    loadModules();
  }, []);

  return (
    <>
      <h1>Módulos</h1>

      <div className="welcome">
        <h2>Listado de Módulos</h2>

        <table
          style={{
            width: "100%",
            marginTop: 20,
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th align="left">Código</th>
              <th align="left">Módulo</th>
              <th align="left">Curso</th>
              <th align="left">Horas</th>
            </tr>
          </thead>

          <tbody>
            {modules.map((module) => (
              <tr key={module.id}>
                <td>{module.code}</td>
                <td>{module.name}</td>
                <td>{module.course_name}</td>
                <td>{module.estimated_hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}