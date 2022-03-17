import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  status: {
    danger: orange[500],
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
  },
});
