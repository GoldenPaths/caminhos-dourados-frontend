import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { RoleEnum } from "../../contexts/auth";
import { useAuthContext } from "../../hooks/use-auth-context";
import { validateEmail } from "../../utils";
import AuthContent from "./auth";

const RegisterPage = () => {
  const { handleRegister, setError } = useAuthContext();
  const navigate = useNavigate();

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

    if (name && email && password) {
      const registeredUser = handleRegister(email, name, password);

      registeredUser &&
        navigate(registeredUser.role === RoleEnum.USER ? "/queue/service" : "/queue");
    }
  };

  return <AuthContent handleSubmit={handleSubmit} isRegistration />;
};

export default RegisterPage;
