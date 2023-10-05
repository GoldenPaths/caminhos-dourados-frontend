import { createContext, FC, ReactNode, useState } from "react";

type AuthContextProps = {
  isAuthenticated: boolean;
  user: string | null;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
};

const defaultValues = {
  isAuthenticated: false,
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
};

const AuthContext = createContext<AuthContextProps>(defaultValues);

const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = (username: string, password: string) => {
    console.log("login", username, password);
    setUser(null); //"test@gmail.com");
  };

  const handleLogout = () => {
    console.log("logout");
  };

  const value = {
    isAuthenticated: !!user,
    user: null,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
