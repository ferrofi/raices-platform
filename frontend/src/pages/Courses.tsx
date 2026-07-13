import { useEffect, useState } from "react";
import api from "../services/api";

interface Course {
  id: string;
  code: string;
  name: string;
 institution_name: string;
  is_published: boolean;
}

interface CourseResponse {
  results: Course[];
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await api.get<CourseResponse>("courses/");
        setCourses(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    loadCourses();
  }, []);

  return (
    <>
      <h1>Cursos</h1>

      <div className="welcome">
        <h2>Listado de Cursos</h2>

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
              <th align="left">Curso</th>
              <th align="left">Institución</th>
              <th align="left">Publicado</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.institution_name}</td>
                <td>{course.is_published ? "Sí" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}