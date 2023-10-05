import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import Router from "./router";
import theme from "./theme";
import { AuthContextProvider } from "./contexts/auth";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
