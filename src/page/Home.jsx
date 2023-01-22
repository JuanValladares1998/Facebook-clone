import React from "react";
import { Grid } from "@mui/material";
import BarraIzquierda from "../components/BarraIzquierda/BarraIzquierda";
import VistaPrincipal from "../components/VistaPrincipal/VistaPrincipal";

const Home = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={0} md={3}>
        <BarraIzquierda />
      </Grid>
      <Grid item xs={8} md={6}>
        <VistaPrincipal />
      </Grid>
      <Grid item xs={4} md={3}>
        hola
      </Grid>
    </Grid>
  );
};

export default Home;
