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

export const CajaBlanca = {
  bgcolor: "white",
  borderRadius: ".8rem",
  boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.2)",
};
