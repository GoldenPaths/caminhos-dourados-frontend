import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RoleEnum } from "../../contexts/auth";
import { useAuthContext } from "../../hooks/use-auth-context";
import { validateEmail } from "../../utils";
import AuthContent from "./auth";

const RegisterPage = () => {
  const { handleRegister } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email")?.toString();
    if (!email || !validateEmail(email)) return toast("E-mail inválido", { type: "error" });

    const password = formData.get("password")?.toString();
    if (!password) return toast("Senha inválida", { type: "error" });

    const name = formData.get("name")?.toString();
    if (!password) return toast("Nome inválido", { type: "error" });

    const confirmPassword = formData.get("confirmPassword")?.toString();
    if (password !== confirmPassword) return toast("Senhas não conferem", { type: "error" });

    if (name && email && password) {
      const registeredUser = handleRegister(email, name, password);

      if (registeredUser) {
        toast("Registrado com sucesso", { type: "success" });
        navigate(registeredUser.role === RoleEnum.USER ? "/queue/service" : "/queue");
      }
    }
  };

  return <AuthContent handleSubmit={handleSubmit} isRegistration />;
};

export default RegisterPage;
