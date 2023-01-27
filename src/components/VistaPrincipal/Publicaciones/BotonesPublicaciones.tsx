import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { alignHorizontal } from "../../../theme/theme";
import { Button } from "@mui/material";

interface Props {
  icon: any;
  texto: string;
}

const BotonesPublicaciones = ({ icon, texto }: Props) => {
  return (
    <Box sx={{ ...alignHorizontal, flex: 1 }}>
      <Button sx={{ width: "100%" }}>
        {icon}
        <Typography variant="button" marginLeft={1} sx={{ color: "gray" }}>
          {texto}
        </Typography>
      </Button>
    </Box>
  );
};

export default BotonesPublicaciones;
