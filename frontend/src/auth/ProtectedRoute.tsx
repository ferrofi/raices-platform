import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

interface Props {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth();

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}