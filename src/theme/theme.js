import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1B74E4",
    },
    secondary: {
      main: "#fff",
    },
    inherit: {
      main: "#65676B",
    },
  },
});

export const alignHorizontal = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
