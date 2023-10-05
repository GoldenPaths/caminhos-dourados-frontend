import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RoleEnum } from "../../contexts/auth";
import { useAuthContext } from "../../hooks/use-auth-context";
import { validateEmail } from "../../utils";
import AuthContent from "./auth";

const LoginPage = () => {
  const { handleLogin } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email")?.toString();

    if (!email || !validateEmail(email)) return toast("E-mail inválido", { type: "error" });

    const password = formData.get("password")?.toString();

    if (!password) return toast("Senha inválida", { type: "error" });

    if (email && password) {
      const loggedUser = handleLogin(email, password);

      if (loggedUser) {
        toast("Logado com sucesso", { type: "success" });
        navigate(loggedUser.role === RoleEnum.USER ? "/queue/service" : "/queue");
      }
    }
  };

  return <AuthContent handleSubmit={handleSubmit} />;
};

export default LoginPage;
