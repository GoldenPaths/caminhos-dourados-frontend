import { styled } from "@mui/material/styles";

export const LogoImage = styled("img")(({ theme }) => ({
  width: "60%",
  maxWidth: theme.spacing(25),
}));

export const ButtonsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: theme.spacing(2),
  width: "100%",
  a: { width: "100%", maxWidth: theme.spacing(22) },
}));
