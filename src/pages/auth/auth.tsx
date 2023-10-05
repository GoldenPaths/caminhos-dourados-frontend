import { MailOutline, HttpsOutlined, ChevronLeft } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { MouseEvent } from "react";
import { Link } from "react-router-dom";

import { LogoImage, Button, Container, Input } from "../../components";

import * as Styled from "./auth.styled";

interface AuthContentProps {
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
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
        <Styled.FormControlWrapper>
          <Input startIcon={<MailOutline />} name="email" placeholder="Digite seu email" />
          <Input
            startIcon={<HttpsOutlined />}
            type="password"
            name="password"
            placeholder={`${isRegistration ? "Crie" : "Digite"} sua senha`}
          />
          {isRegistration && (
            <Input
              startIcon={<HttpsOutlined />}
              type="password"
              name="passwordRepeat"
              placeholder="Confirme sua senha"
            />
          )}
        </Styled.FormControlWrapper>
        <Button variant="contained" fullWidth fontSize={16} maxWidth={50} onClick={handleSubmit}>
          {isRegistration ? "Criar conta" : "Entrar"}
        </Button>
      </Styled.ContentWrapper>
    </Container>
  );
};

export default AuthContent;

AuthContent.defaultProps = {
  isRegistration: false,
};
