import React from "react";
import { Grid } from "@mui/material";
import BarraIzquierda from "../components/BarraIzquierda";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <BarraIzquierda />
      </Grid>
      <Grid item xs={4}>
        hola
      </Grid>
      <Grid item xs={4}>
        hola
      </Grid>
    </Grid>
  );
};

export default Home;
