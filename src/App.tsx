import { Box } from "@mui/material";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box sx={{ height: "200vh" }}></Box>
    </div>
  );
}

export default App;
