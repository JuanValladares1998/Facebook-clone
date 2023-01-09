import { Box, Button } from "@mui/material";
import React from "react";

interface Props {
  icon: any;
  estado: boolean;
  num: number;
  setBotones: React.Dispatch<React.SetStateAction<number>>;
}

const BotonesNavegacion = ({ icon, estado, setBotones, num }: Props) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Button
        variant="text"
        sx={{ width: "100%" }}
        onClick={() => {
          setBotones(num);
        }}
      >
        {icon}
      </Button>
      <Box
        sx={
          estado
            ? {
                with: "auto",
                height: "5px",
                backgroundColor: "#1B74E4",
              }
            : { with: "auto", height: "5px", backgroundColor: "none" }
        }
      />
    </Box>
  );
};

export default BotonesNavegacion;
