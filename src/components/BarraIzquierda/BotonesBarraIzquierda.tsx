import { ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";

interface Props {
  icon: any;
  text: string;
}

const BotonesBarraIzquierda = ({ icon, text }: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ height: 50 }}>
        {icon}
        <Typography sx={{ marginLeft: 2 }}>{text}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default BotonesBarraIzquierda;
