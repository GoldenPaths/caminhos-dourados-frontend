import { createContext, FC, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";

export enum RoleEnum {
  ADMIN = "admin",
  USER = "user",
  ANALYST = "analyst",
}

type UserType = {
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
  setError: (message: string | null) => void;
};

const defaultValues = {
  isAuthenticated: false,
  user: null,
  handleLogin: () => null,
  handleLogout: () => {},
  handleRegister: () => null,
  setError: () => {},
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      toast(error, { type: "error" });
    }
  }, [error]);

  const handleLogin = (email: string, password: string) => {
    const userEmail = "admin@admin.com"; // TODO
    const userPassword = "123456"; // TODO

    // TODO verificar pelo token recebido
    if (userEmail !== email || userPassword !== password) {
      setError("E-mail e/ou senha inválidos");
      return null;
    }

    const loggedUser = { id: "1234", name: "kamila", token: "123456", role: RoleEnum.USER };

    removePersistedUser();
    persistUser(loggedUser);
    setUser(loggedUser);

    return loggedUser;
  };

  const handleRegister = (email: string, name: string, password: string) => {
    console.log("register", email, password, name);

    console.log("dados estão corretos =>>>");

    const registeredUser = { id: "1234", name, token: "123456", role: RoleEnum.ANALYST };

    removePersistedUser();
    setUser(registeredUser);
    persistUser(registeredUser);

    return registeredUser;
  };

  const handleLogout = () => {
    removePersistedUser();
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    user: null,
    handleLogin,
    handleLogout,
    handleRegister,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
