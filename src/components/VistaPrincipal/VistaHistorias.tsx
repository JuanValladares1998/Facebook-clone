import { Box, IconButton, Tooltip } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { CajaBlanca } from "../../theme/theme";

const VistaHistorias = () => {
  return (
    <Box
      sx={{ ...CajaBlanca, maxWidth: "645px", margin: "1rem auto 0 auto" }}
    >
      <Tooltip title="Videojuegos">
        <IconButton aria-label="menu" sx={{ mr: 2 }}>
          <SportsSoccerIcon color="inherit" sx={{ fontSize: 34 }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Videojuegos">
        <IconButton aria-label="menu" sx={{ mr: 2 }}>
          <SportsSoccerIcon color="inherit" sx={{ fontSize: 34 }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Videojuegos">
        <IconButton aria-label="menu" sx={{ mr: 2 }}>
          <SportsSoccerIcon color="inherit" sx={{ fontSize: 34 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default VistaHistorias;
