import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await login(email, password);

      navigate("/");
    } catch {
      setError("Correo o contraseña incorrectos");
    }
  }

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: 350,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <h2>RAÍCES</h2>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Iniciar sesión
        </button>

        {error && (
          <span style={{ color: "red" }}>
            {error}
          </span>
        )}
      </form>
    </div>
  );
}