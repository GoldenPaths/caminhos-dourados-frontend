import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { RoleEnum } from "../contexts/auth";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  userRole?: RoleEnum;
  authorizedRoles: RoleEnum[];
  children: ReactNode;
}

export const PrivateRoute = ({
  isAuthenticated,
  userRole,
  authorizedRoles,
  children,
}: PrivateRouteProps) => {
  if (!isAuthenticated || (userRole && !authorizedRoles.includes(userRole))) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
