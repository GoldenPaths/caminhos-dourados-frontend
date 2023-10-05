import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { RoleEnum } from "../../contexts/auth";
import { useAuthContext } from "../../hooks/use-auth-context";
import { validateEmail } from "../../utils";
import AuthContent from "./auth";

const LoginPage = () => {
  const { handleLogin, setError } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email")?.toString();
    if (email && !validateEmail(email)) setError("E-mail inválido");

    const password = formData.get("password")?.toString();

    if (email && password) {
      const loggedUser = handleLogin(email, password);

      loggedUser && navigate(loggedUser.role === RoleEnum.USER ? "/queue/service" : "/queue");
    }
  };

  return <AuthContent handleSubmit={handleSubmit} />;
};

export default LoginPage;
