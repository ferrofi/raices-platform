import { useEffect, useState } from "react";
import api from "../services/api";

interface Lesson {
  id: string;
  code: string;
  name: string;
  module_name: string;
  lesson_type: string;
  estimated_minutes: number;
}

interface LessonResponse {
  results: Lesson[];
}

export default function Lessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const loadLessons = async () => {
      try {
        const response = await api.get<LessonResponse>("lessons/");
        setLessons(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    loadLessons();
  }, []);

  return (
    <>
      <h1>Lecciones</h1>

      <div className="welcome">
        <h2>Listado de Lecciones</h2>

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
              <th align="left">Lección</th>
              <th align="left">Módulo</th>
              <th align="left">Tipo</th>
              <th align="left">Minutos</th>
            </tr>
          </thead>

          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson.id}>
                <td>{lesson.code}</td>
                <td>{lesson.name}</td>
                <td>{lesson.module_name}</td>
                <td>{lesson.lesson_type}</td>
                <td>{lesson.estimated_minutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}