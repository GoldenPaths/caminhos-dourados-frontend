import { styled } from "@mui/material/styles";
import { FormControl } from "@mui/material";

export const FormControlWrapper = styled(FormControl)<{ centralize?: boolean; hideGap?: boolean }>(
  ({ theme, centralize = false, hideGap = false }) => ({
    width: "100%",
    maxWidth: theme.spacing(80),
    margin: `${theme.spacing(7)} ${centralize ? "auto" : "0"} ${theme.spacing(10)}`,
    ...(centralize ? { display: "flex" } : {}),
    ...(hideGap ? {} : { rowGap: theme.spacing(2) }),
  })
);

export const ButtonsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${theme.spacing(2)} 0`,
  width: "100%",
  maxWidth: theme.spacing(80),
}));
