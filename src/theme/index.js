import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  status: {
    danger: orange[500],
  },
  typography: {

    monsterDescription:{
      fontWeight:"light",
      fontStyle:"italic",
      color: "#26282A",
      fontSize: 14,
    },
    label:{
      fontWeight: "bold"
    },
    regular:{
      fontWeight: "regular"
    }
  },
  palette: {
    background: {
      default: "#F3F9FF",
      paper: "#F3F9FF",
    } ,
    primary: {
      main: "#2B6383",
    },
    secondary: {
      main: "#D1D1D1",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#2B6383",
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#2B6383",
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiOutlinedInput:{
      styleOverrides: {
        root: {
            backgroundColor: "#FFFFFF",
        },
    },
  },
}});
