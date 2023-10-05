import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "../hooks/use-auth-context";

import {
  HomePage,
  ServiceQueuePage,
  CreateServicePage,
  ViewServicePage,
  LoginPage,
  RegisterPage,
} from "../pages";
import { PrivateRoute } from "./private";

const Router = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/queue"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ServiceQueuePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/queue/service"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <CreateServicePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/queue/service/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ViewServicePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
