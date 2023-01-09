import React from "react";
import { Grid } from "@mui/material";
import BarraIzquierda from "../components/BarraIzquierda/BarraIzquierda";

const Home = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
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
