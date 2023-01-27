import React from "react";
import { Grid } from "@mui/material";
import BarraIzquierda from "../components/BarraIzquierda/BarraIzquierda";
import VistaPrincipal from "../components/VistaPrincipal/VistaPrincipal";

const Home = () => {
  return (
    <Grid container sx={{ height: "100%", marginTop: "64px" }}>
      <Grid item xs={0} lg={3}>
        <BarraIzquierda />
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <VistaPrincipal />
      </Grid>
      <Grid item xs={0} md={4} lg={3}>
        hola
      </Grid>
    </Grid>
  );
};

export default Home;
