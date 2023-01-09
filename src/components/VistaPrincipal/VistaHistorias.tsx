import { Box, IconButton, Tooltip } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import React from "react";

const VistaHistorias = () => {
  return (
    <Box>
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
