import { createTheme } from "@mui/material/styles";

import globalStyles from "./global-styles";
import { pallete } from "./pallete";

const { golden, brown, yellow, grey, ...restPallete } = pallete;
const theme = createTheme({
  components: globalStyles,
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    primary: {
      300: golden[300],
      400: golden[400],
      900: golden[900],
      A400: yellow[400],
      main: golden[500],
      dark: golden[700],
      light: yellow[200],
      contrastText: grey[100],
    },
    secondary: {
      main: brown[500],
      light: brown[200],
      dark: brown[800],
    },
    text: {
      primary: grey[100],
      secondary: golden[700],
      disabled: grey[400],
    },
    background: {
      default: grey[900],
    },
    grey,
    ...restPallete,
  },
});

export default theme;
