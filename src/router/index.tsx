import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleEnum } from "../contexts/auth";
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
  const { isAuthenticated, user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/queue"
          element={
            <PrivateRoute
              userRole={user?.role}
              isAuthenticated={isAuthenticated}
              authorizedRoles={[RoleEnum.ANALYST, RoleEnum.ADMIN]}
            >
              <ServiceQueuePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/queue/service"
          element={
            <PrivateRoute
              userRole={user?.role}
              isAuthenticated={isAuthenticated}
              authorizedRoles={[RoleEnum.ADMIN, RoleEnum.USER]}
            >
              <CreateServicePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/queue/service/:id"
          element={
            <PrivateRoute
              userRole={user?.role}
              isAuthenticated={isAuthenticated}
              authorizedRoles={[RoleEnum.ANALYST, RoleEnum.ADMIN, RoleEnum.USER]}
            >
              <ViewServicePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
