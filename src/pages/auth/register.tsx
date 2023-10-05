import { FormEvent } from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import { validateEmail } from "../../utils";
import AuthContent from "./auth";

const RegisterPage = () => {
  const { handleRegister, setError } = useAuthContext();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email")?.toString();
    if (email && !validateEmail(email)) return setError("E-mail inválido");

    const name = formData.get("name")?.toString();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    if (password !== confirmPassword) return setError("Senhas não conferem");

    if (name && email && password) return handleRegister(email, name, password);
  };

  return <AuthContent handleSubmit={handleSubmit} isRegistration />;
};

export default RegisterPage;
