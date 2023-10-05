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
    console.log("login", email, password);

    console.log("email e senha corretos =>>>");

    const loggedUser = { id: "1234", name: "kamila", token: "123456" };

    removePersistedUser();
    persistUser(loggedUser);
    setUser(loggedUser);
  };

  const handleRegister = (email: string, name: string, password: string) => {
    console.log("register", email, password, name);

    console.log("dados estão corretos =>>>");

    const registeredUser = { id: "1234", name, token: "123456" };

    removePersistedUser();
    setUser(registeredUser);
    persistUser(registeredUser);
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
