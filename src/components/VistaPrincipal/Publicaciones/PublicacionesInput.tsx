import { Avatar, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { alignHorizontal, CajaBlanca } from "../../../theme/theme";
import BotonesPublicaciones from "./BotonesPublicaciones";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const PublicacionesInput = () => {
  return (
    <Box sx={{ ...CajaBlanca, padding: 2 }}>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <Avatar
          alt="Remy Sharp"
          src="/src/images/Perfiles/child-g834b7e13f_640.jpg"
        />
        <input
          placeholder="¿Que estás pensando, Juan?"
          className="input-publicaciones"
        />
      </Box>
      <Divider />
      <Box sx={{ ...alignHorizontal, marginTop: 2 }}>
        <BotonesPublicaciones
          icon={<VideocamIcon fontSize="large" sx={{ color: "#F02849" }} />}
          texto={"Video en vivo"}
        />
        <BotonesPublicaciones
          icon={
            <PhotoSizeSelectActualIcon
              fontSize="large"
              sx={{ color: "#45BD62" }}
            />
          }
          texto={"Foto/video"}
        />
        <Box sx={{ display: { xs: "none", sm: "inherit" } }}>
          <BotonesPublicaciones
            icon={<TagFacesIcon fontSize="large" sx={{ color: "#F7BA2B" }} />}
            texto={"Sentimiento/actividad"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PublicacionesInput;
