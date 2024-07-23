// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Report from "./Report";
import { AuthProvider } from "./Context";
import BusinessResearch from "./agents/BusinessResearch";

const RouterComponent = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/agent"
          element={
            isAuthenticated ? (
              // <ProtectedRoute>
              <Report />
            ) : (
              // </ProtectedRoute>
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/BusinessResearch" element={<BusinessResearch />} />
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default RouterComponent;
