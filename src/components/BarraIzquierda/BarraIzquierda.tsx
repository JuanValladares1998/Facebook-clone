import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Avatar from "@mui/material/Avatar";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useState } from "react";
import BotonesBarraIzquierda from "./BotonesBarraIzquierda";

const BarraIzquierda = () => {
  const [navBar1, setNavBar1] = useState<boolean>(false);
  const [navBar2, setNavBar2] = useState<boolean>(false);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "none",
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "auto",
      }}
    >
      <div>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 30, height: 30, marginRight: 1 }}
                  src="/static/images/avatar/1.jpg"
                />
                <ListItemText primary="Juan Valladares" />
              </ListItemButton>
            </ListItem>
            <BotonesBarraIzquierda icon={<PeopleOutlineIcon />} text="Amigos" />
            <BotonesBarraIzquierda
              icon={<AvTimerIcon />}
              text="Más recientes"
            />
            <BotonesBarraIzquierda icon={<GroupsIcon />} text="Grupos" />
            <BotonesBarraIzquierda
              icon={<StorefrontIcon />}
              text="Marketplace"
            />
            <BotonesBarraIzquierda icon={<OndemandVideoIcon />} text="Watch" />
            {navBar1 ? (
              <>
                <BotonesBarraIzquierda
                  icon={<PeopleOutlineIcon />}
                  text="Amigos"
                />
                <BotonesBarraIzquierda
                  icon={<AvTimerIcon />}
                  text="Más recientes"
                />
                <BotonesBarraIzquierda icon={<GroupsIcon />} text="Grupos" />
              </>
            ) : (
              <></>
            )}

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setNavBar1((val) => !val);
                }}
              >
                {navBar1 ? (
                  <>
                    <ArrowCircleUpIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Ver menos" />
                  </>
                ) : (
                  <>
                    <ArrowCircleDownIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Ver más" />
                  </>
                )}
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <Typography variant="h6" ml={2}>
                Tus accesos directos
              </Typography>
            </ListItem>
            <BotonesBarraIzquierda icon={<SmartToyIcon />} text="Robotica" />
            <BotonesBarraIzquierda
              icon={<SportsEsportsIcon />}
              text="VideoJuegos"
            />
            <BotonesBarraIzquierda
              icon={<ExtensionIcon />}
              text="Rompecabezas"
            />

            {navBar2 ? (
              <>
                <BotonesBarraIzquierda
                  icon={<SmartToyIcon />}
                  text="Robotica"
                />
                <BotonesBarraIzquierda
                  icon={<SportsEsportsIcon />}
                  text="VideoJuegos"
                />
                <BotonesBarraIzquierda
                  icon={<ExtensionIcon />}
                  text="Rompecabezas"
                />
              </>
            ) : (
              <></>
            )}

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setNavBar2((val) => !val);
                }}
              >
                {navBar2 ? (
                  <>
                    <ArrowCircleUpIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Ver menos" />
                  </>
                ) : (
                  <>
                    <ArrowCircleDownIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Ver más" />
                  </>
                )}
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </div>
      <Box sx={{ padding: 2 }}>
        <a href="/">Privacidad</a>
        <span> . </span>
        <a href="/">Condiciones</a>
        <span> . </span>
        <a href="/">Publicidad</a>
        <span> . </span>
        <a href="/">Opciones de Anuncios</a>
        <span> . </span>
        <a href="/">Cookies</a>
        <span> . </span>
        <a href="/">Más</a>
        <span> . </span>
        <a href="/">Meta</a>
        <span> . © {new Date().getFullYear()}</span>
      </Box>
    </Box>
  );
};

export default BarraIzquierda;
