import { Box } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { alignHorizontal, CajaBlanca } from "../../theme/theme";
import BotonesNavegacion from "../BarraNavegacion/BotonesNavegacion";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useState } from "react";
import Divider from "@mui/material/Divider";

const VistaHistorias = () => {
  const [botones, setBotones] = useState(1);
  return (
    <Box sx={{ ...CajaBlanca, maxWidth: "645px", margin: "1rem auto 0 auto" }}>
      <Box sx={{ ...alignHorizontal }}>
        <BotonesNavegacion
          icon={
            <MenuBookIcon
              color={botones === 1 ? "primary" : "inherit"}
              sx={{ fontSize: 34 }}
            />
          }
          texto={"hola"}
          num={1}
          onClick={(i) => setBotones(i)}
          estado={botones}
        />
        <BotonesNavegacion
          icon={
            <OndemandVideoIcon
              color={botones === 2 ? "primary" : "inherit"}
              sx={{ fontSize: 34 }}
            />
          }
          texto={"Reels"}
          num={2}
          onClick={(i) => setBotones(i)}
          estado={botones}
        />
        <BotonesNavegacion
          icon={
            <VideocamIcon
              color={botones === 3 ? "primary" : "inherit"}
              sx={{ fontSize: 34 }}
            />
          }
          texto={"Salas"}
          num={3}
          onClick={(i) => setBotones(i)}
          estado={botones}
        />
      </Box>
      <Divider />
      <Box>Hola</Box>
    </Box>
  );
};

export default VistaHistorias;
