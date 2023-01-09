import React from "react";
import { Grid } from "@mui/material";
import BarraIzquierda from "../components/BarraIzquierda/BarraIzquierda";
import VistaPrincipal from "../components/VistaPrincipal/VistaPrincipal";

const Home = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={4}>
        <BarraIzquierda />
      </Grid>
      <Grid item xs={4}>
        <VistaPrincipal />
      </Grid>
      <Grid item xs={4}>
        hola
      </Grid>
    </Grid>
  );
};

export default Home;
