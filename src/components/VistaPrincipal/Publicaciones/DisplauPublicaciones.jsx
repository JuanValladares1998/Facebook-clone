import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import { CajaBlanca } from "../../../theme/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import like from "../../../images/Reacciones/like.svg";
import asombro from "../../../images/Reacciones/asombro.svg";
import corazon from "../../../images/Reacciones/corazon.svg";
import enojo from "../../../images/Reacciones/enojo.svg";
import risa from "../../../images/Reacciones/risa.svg";
import tristesa from "../../../images/Reacciones/tristesa.svg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import BotonesPublicaciones from "./BotonesPublicaciones";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const DisplauPublicaciones = ({ img, title }) => {
  return (
    <Box sx={CajaBlanca}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          padding={2}
          display="flex"
          justifyContent="start"
          sx={{ alignItems: "center" }}
        >
          <Avatar
            src="/src/images/Perfiles/girl-g5788feeca_640.jpg"
            sx={{ marginRight: 2 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1" component="a" href="/">
              Clara Mendoza
            </Typography>
            <Typography variant="caption" component="a" href="/">
              2h
            </Typography>
          </Box>
        </Box>
        <Box padding={2}>
          <IconButton aria-label="delete">
            <MoreHorizIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box>
        <img src={img} alt={title} />
      </Box>
      <Box sx={{ padding: ".5rem 1rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex">
            <Box sx={{ width: "1.5rem" }}>
              <img src={like} alt="like" />
            </Box>
            <Box sx={{ width: "1.5rem" }}>
              <img src={asombro} alt="like" />
            </Box>
            <Box sx={{ width: "1.5rem" }}>
              <img src={corazon} alt="like" />
            </Box>
            <Box sx={{ width: "1.5rem" }}>
              <img src={enojo} alt="like" />
            </Box>
            <Box sx={{ width: "1.5rem" }}>
              <img src={risa} alt="like" />
            </Box>
            <Box sx={{ width: "1.5rem" }}>
              <img src={tristesa} alt="like" />
            </Box>
          </Box>
          <Typography variant="subtitle1" component="a" href="/">
            3 veces compartido
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: ".5rem 1rem", display: "flex" }}>
        <BotonesPublicaciones icon={<ThumbUpOffAltIcon />} texto={"Me gusta"} />
        <BotonesPublicaciones
          icon={<ChatBubbleOutlineIcon />}
          texto={"Comentar"}
        />
        <BotonesPublicaciones
          icon={<ReplyOutlinedIcon />}
          texto={"Compartir"}
        />
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 2,padding: ".5rem 1rem"}}>
        <Avatar
          alt="Remy Sharp"
          src="/src/images/Perfiles/child-g834b7e13f_640.jpg"
        />
        <input
          placeholder="Escribe un comentario"
          className="input-publicaciones"
        />
      </Box>
    </Box>
  );
};

export default DisplauPublicaciones;
