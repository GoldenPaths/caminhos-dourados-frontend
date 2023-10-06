import { createContext, FC, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { getUserAdmin } from "../service/get-user-admin";

export enum RoleEnum {
  ADMIN = "admin",
  USER = "user",
  ANALYST = "analyst",
}

export type UserType = {
  id: string;
  name: string;
  token: string;
  role: RoleEnum;
};

type AuthContextProps = {
  isAuthenticated: boolean;
  user: UserType | null;
  handleLogin: (email: string, password: string) => UserType | null;
  handleLogout: () => void;
  handleRegister: (email: string, name: string, password: string) => UserType | null;
};

const defaultValues = {
  isAuthenticated: false,
  user: null,
  handleLogin: () => null,
  handleLogout: () => {},
  handleRegister: () => null,
};

const persistUser = (user: UserType) => {
  localStorage.setItem("user.section", JSON.stringify(user));
};

const removePersistedUser = () => {
  localStorage.removeItem("user.section");
};

const getPersistedUser = () => {
  const persisted = localStorage.getItem("user.section");
  return persisted ? (JSON.parse(persisted) as UserType) : null;
};

const AuthContext = createContext<AuthContextProps>(defaultValues);

const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(getPersistedUser());

  const handleLogin = (email: string, password: string) => {
    const userAdmin = getUserAdmin(email, password);

    // TODO verificar pelo token recebido
    if (!userAdmin) {
      toast("E-mail e/ou senha inválidos", { type: "error" });
      return null;
    }

    const loggedUser = userAdmin; // TODO pegar usuário recebido

    removePersistedUser();
    persistUser(loggedUser);
    setUser(loggedUser);

    return loggedUser;
  };

  const handleRegister = (email: string, name: string, password: string) => {
    const userAdmin = getUserAdmin(email, password);

    // TODO verificar status recebido
    if (!userAdmin) {
      toast("Não foi possível realizar o seu cadastro no momento", { type: "error" });
      return null;
    }

    const registeredUser = { ...userAdmin, name };

    removePersistedUser();
    setUser(registeredUser);
    persistUser(registeredUser);

    return registeredUser;
  };

  const handleLogout = () => {
    removePersistedUser();
    setUser(null);
    toast("Deslogado com sucesso", { type: "success" });
  };

  const value = {
    isAuthenticated: !!user,
    user,
    handleLogin,
    handleLogout,
    handleRegister,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
