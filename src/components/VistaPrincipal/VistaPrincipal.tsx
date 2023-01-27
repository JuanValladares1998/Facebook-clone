import { Box } from "@mui/system";
import React from "react";
import VistaHistorias from "./Historias/VistaHistorias";
import PublicacionesInput from "./Publicaciones/PublicacionesInput";

const VistaPrincipal = () => {
  return (
    <Box
      sx={{
        maxWidth: "680px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <VistaHistorias />
      <PublicacionesInput />
    </Box>
  );
};

export default VistaPrincipal;
