import { FormEvent } from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import { validateEmail } from "../../utils";
import AuthContent from "./auth";

const LoginPage = () => {
  const { handleLogin, setError } = useAuthContext();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email")?.toString();
    if (email && !validateEmail(email)) setError("E-mail inválido");

    const password = formData.get("password")?.toString();

    if (email && password) return handleLogin(email, password);
  };

  return <AuthContent handleSubmit={handleSubmit} />;
};

export default LoginPage;
