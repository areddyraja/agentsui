import { Route, Navigate, Routes } from "react-router-dom";
import { useAuth } from "./Context"; // Import your AuthContext

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? children : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default ProtectedRoute;
