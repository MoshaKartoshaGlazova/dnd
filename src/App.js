import { ThemeProvider } from "@mui/material";
import { Main } from "./pages/main";
import { theme } from "./theme";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
