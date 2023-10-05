import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),

  ".MuiIconButton-root": {
    color: theme.palette.text.primary,
  },
}));
