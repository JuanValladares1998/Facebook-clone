import { Box } from "@mui/system";
import { CajaBlanca } from "../../../theme/theme";

const style = {
  width: "112.5px",
  height: "200px",
};

interface Props {
  imgHistorias: any;
  imgHistoriasPerfil: any;
}

const HistoriaDisplay = ({ imgHistorias, imgHistoriasPerfil }: Props) => {
  return (
    <Box
      sx={{
        ...CajaBlanca,
        ...style,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        backgroundColor: "#eee",
      }}
      className="historia"
    >
      <img
        className="imgHistoriasPerfil"
        src={imgHistoriasPerfil}
        alt="perfil"
      />
      <img className="imgHistorias" src={imgHistorias} alt="historia" />
    </Box>
  );
};

export default HistoriaDisplay;
