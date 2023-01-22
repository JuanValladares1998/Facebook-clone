import { Box } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { alignHorizontal, CajaBlanca } from "../../../theme/theme";
import BotonesNavegacion from "../../BarraNavegacion/BotonesNavegacion";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import HistoriaDisplay from "./HistoriaDisplay";
import {
  HistoriasImg_1,
  HistoriasImg_2,
  HistoriasImg_3,
  HistoriasImg_4,
  HistoriasImg_5,
  PerfilImg_1,
  PerfilImg_2,
  PerfilImg_3,
  PerfilImg_4,
} from "../../../images";

const VistaHistorias = () => {
  const [botones, setBotones] = useState(1);
  return (
    <Box
      sx={{
        ...CajaBlanca,
        maxWidth: "645px",
        margin: "1rem auto 0 auto",
        overflow: "hidden",
      }}
    >
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
      <Box
        sx={{
          display: "flex",
          gap: 1,
          padding: 2,
          minWidth: "645px",
        }}
      >
        <HistoriaDisplay
          imgHistorias={HistoriasImg_1}
          imgHistoriasPerfil={PerfilImg_1}
        />
        <HistoriaDisplay
          imgHistorias={HistoriasImg_5}
          imgHistoriasPerfil={PerfilImg_2}
        />
        <HistoriaDisplay
          imgHistorias={HistoriasImg_2}
          imgHistoriasPerfil={PerfilImg_3}
        />
        <HistoriaDisplay
          imgHistorias={HistoriasImg_4}
          imgHistoriasPerfil={PerfilImg_4}
        />
        <HistoriaDisplay
          imgHistorias={HistoriasImg_3}
          imgHistoriasPerfil={PerfilImg_1}
        />
      </Box>
    </Box>
  );
};

export default VistaHistorias;
