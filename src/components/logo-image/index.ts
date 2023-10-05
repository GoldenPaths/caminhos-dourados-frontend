import { styled } from "@mui/material/styles";
import Logo from "../../assets/logo.png";

export const LogoImage = styled("img")<{ maxWidth?: number; margin?: string }>(
  ({ theme, maxWidth = 25, margin = "0" }) => ({
    margin,
    width: "60%",
    height: "fit-content",
    maxWidth: typeof maxWidth === "number" ? theme.spacing(maxWidth) : "initial",
  })
);

LogoImage.defaultProps = {
  src: Logo,
};
