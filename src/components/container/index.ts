import { styled } from "@mui/material/styles";
import { Container as ContainerUi } from "@mui/material";

interface ContainerProps {
  justify?: "center" | "start" | "end" | "flex-start" | "flex-end" | "left" | "right";
}

export const Container = styled(ContainerUi)<ContainerProps>(({ theme, justify = "center" }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: justify,
  flexDirection: "column",
  height: "100vh",
  rowGap: theme.spacing(4),
}));
