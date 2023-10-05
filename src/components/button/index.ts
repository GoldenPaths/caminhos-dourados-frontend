import { styled } from "@mui/system";
import { Button as ButtonBase } from "@mui/material";

interface ButtonProps {
  fontSize?: string | number;
  weight?: string | number;
  maxWidth?: number;
}

export const Button = styled(ButtonBase)<ButtonProps>(({ theme, fontSize, weight, maxWidth }) => ({
  maxWidth: typeof maxWidth === "number" ? theme.spacing(maxWidth) : "initial",
  fontSize,
  fontWeight: weight,
  textTransform: "none",
}));
