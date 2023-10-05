import { styled } from "@mui/material/styles";
import { FormControl } from "@mui/material";

export const ButtonsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${theme.spacing(2)} 0`,
  width: "100%",
}));

export const ContentWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  flex: 1,
});

export const FormControlWrapper = styled(FormControl)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  rowGap: theme.spacing(4),
  width: "100%",
  maxWidth: theme.spacing(50),
  margin: `${theme.spacing(7)} 0 ${theme.spacing(10)}`,
}));
