import axios from "axios";
import { RoleEnum, UserType } from "../contexts/auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getUserAdmin = (email: string, password: string): UserType | null =>
  email === import.meta.env.VITE_ADMIN_EMAIL && password === import.meta.env.VITE_ADMIN_PASSWORD
    ? {
        id: "admin",
        name: "Admin",
        token: `${email}-${password}`,
        role: RoleEnum.ADMIN,
      }
    : null;
