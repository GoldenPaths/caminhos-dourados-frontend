import { styled } from "@mui/material/styles";
import { FormControl } from "@mui/material";

export const FormControlWrapper = styled(FormControl)(({ theme }) => ({
  // alignItems: "center",
  // justifyContent: "center",
  // rowGap: theme.spacing(4),
  width: "100%",
  // maxWidth: theme.spacing(50),
  margin: `${theme.spacing(7)} 0 ${theme.spacing(10)}`,
}));
