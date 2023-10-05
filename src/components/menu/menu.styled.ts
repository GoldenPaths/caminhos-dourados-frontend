import { styled } from "@mui/material/styles";

export const LogoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  columnGap: theme.spacing(1),
}));
