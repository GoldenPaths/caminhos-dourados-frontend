import { MailOutline, HttpsOutlined, ChevronLeft, AccountCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

import { LogoImage, Button, Container, Input } from "../../components";

import * as Styled from "./auth.styled";

interface AuthContentProps {
  handleSubmit: (event: FormEvent) => void;
  isRegistration: boolean;
}

const AuthContent = ({ handleSubmit, isRegistration }: AuthContentProps) => {
  return (
    <Container>
      <Styled.ButtonsWrapper>
        <Link to="/">
          <LogoImage maxWidth={6} margin="0 16px" />
        </Link>

        <Link to={`/${isRegistration ? "login" : "register"}`}>
          <Button startIcon={<ChevronLeft />} variant="outlined">
            {isRegistration ? "Login" : "Criar conta"}
          </Button>
        </Link>
      </Styled.ButtonsWrapper>

      <Styled.ContentWrapper>
        <Typography variant="h1" align="center" fontSize={32} fontWeight={700}>
          {isRegistration ? "Cadastre-se" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Styled.FormControlWrapper>
            {isRegistration && (
              <Input
                startIcon={<AccountCircle />}
                name="name"
                id="name"
                placeholder="Digite seu nome"
              />
            )}
            <Input
              startIcon={<MailOutline />}
              name="email"
              id="email"
              placeholder="Digite seu email"
            />
            <Input
              startIcon={<HttpsOutlined />}
              type="password"
              name="password"
              id="password"
              placeholder={`${isRegistration ? "Crie" : "Digite"} sua senha`}
            />
            {isRegistration && (
              <Input
                startIcon={<HttpsOutlined />}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirme sua senha"
              />
            )}
          </Styled.FormControlWrapper>
          <Button variant="contained" fullWidth fontSize={16} maxWidth={50} type="submit">
            {isRegistration ? "Criar conta" : "Entrar"}
          </Button>
        </form>
      </Styled.ContentWrapper>
    </Container>
  );
};

export default AuthContent;

AuthContent.defaultProps = {
  isRegistration: false,
};
