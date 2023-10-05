import { createContext, FC, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";

type UserType = {
  id: string;
  name: string;
  token: string;
};

type AuthContextProps = {
  isAuthenticated: boolean;
  user: UserType | null;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  handleRegister: (email: string, name: string, password: string) => void;
  setError: (message: string | null) => void;
};

const defaultValues = {
  isAuthenticated: false,
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
  handleRegister: () => {},
  setError: () => {},
};

const persistUser = (user: UserType) => {
  localStorage.setItem("user.section", JSON.stringify(user));
};

const getPersistedUser = () => {
  if (localStorage.getItem("user.section"))
    return JSON.parse(localStorage.getItem("user.section") as never)?.name || "";
};

const AuthContext = createContext<AuthContextProps>(defaultValues);

const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      toast(error, { type: "error" });
    }
  }, [error]);

  const handleLogin = (email: string, password: string) => {
    console.log("login", email, password);
    console.log("error", error);
    const loggedUser = { id: "1234", name: "kamila", token: "123456" };
    setUser(loggedUser);
    const persisted = getPersistedUser();
    if (persisted && persisted === loggedUser.name) {
      persistUser(loggedUser);
    }
  };

  const handleRegister = (email: string, name: string, password: string) => {
    console.log("register", email, password, name);
    console.log("error", error);
    const registeredUser = { id: "1234", name: "kamila", token: "123456" };
    setUser(registeredUser); //"test@gmail.com");
    persistUser(registeredUser);
  };

  const handleLogout = () => {
    console.log("logout");
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
