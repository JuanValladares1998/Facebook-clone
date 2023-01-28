import { Box } from "@mui/system";
import ContenedorPublicaciones from "./Publicaciones/ContenedorPublicaciones";
import PublicacionesInput from "./Publicaciones/PublicacionesInput";
import VistaHistorias from "./Historias/VistaHistorias";

const VistaPrincipal = () => {
  return (
    <Box
      sx={{
        maxWidth: "680px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "calc(100vh - 64px)",
        overflowX: "auto",
        top: "0",
      }}
      className="VistaPrincipal"
    >
      <VistaHistorias />
      <PublicacionesInput />
      <ContenedorPublicaciones />
      <ContenedorPublicaciones />
    </Box>
  );
};

export default VistaPrincipal;
