import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LogoImage, Button, Container } from "../../components";

import * as Styled from "./home.styled";

const HomePage = () => {
  return (
    <Container>
      <LogoImage />

      <div>
        <Typography fontWeight={700} variant="h2" fontSize={24} align="center">
          Bem vindo(a) a{" "}
        </Typography>
        <Typography fontWeight={700} variant="h1" fontSize={24} align="center">
          caminhos{" "}
          <Typography fontWeight={700} variant="span" color="primary" align="center">
            dourados
          </Typography>
        </Typography>
      </div>

      <Styled.ButtonsWrapper>
        <Link to="/login">
          <Button variant="outlined" size="large" fullWidth>
            Fazer login
          </Button>
        </Link>
        <Typography fontWeight={700} variant="span">
          ou
        </Typography>
        <Link to="/register">
          <Button variant="outlined" size="large" fullWidth>
            Criar conta
          </Button>
        </Link>
      </Styled.ButtonsWrapper>
    </Container>
  );
};

export default HomePage;
