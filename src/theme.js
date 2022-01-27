import { createTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "10px",
        margin: "0px 10px",
      },
    },
    MuiTextField: {
      root: {
        padding: "16px",
      },
    },
    MuiInputLabel: {
      root: {
        padding: "16px",
      },
    },
    MuiInputBase: {
      input: {
        background: "#fff",
        padding: "0",
      },
    },
  },
});
