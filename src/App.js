import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Main } from "./pages/main";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
