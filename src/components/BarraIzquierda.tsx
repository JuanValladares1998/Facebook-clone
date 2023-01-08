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

const BarraIzquierda = () => {
  const [navBar1, setNavBar1] = useState<boolean>(false);
  const [navBar2, setNavBar2] = useState<boolean>(false);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
            <ListItem disablePadding>
              <ListItemButton>
                <PeopleOutlineIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Amigos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <AvTimerIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Más recientes" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <GroupsIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Grupos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <StorefrontIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <OndemandVideoIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Watch" />
              </ListItemButton>
            </ListItem>

            {navBar1 ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton>
                    <PeopleOutlineIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Amigos" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <AvTimerIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Más recientes" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <GroupsIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Grupos" />
                  </ListItemButton>
                </ListItem>
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
            <ListItem disablePadding>
              <ListItemButton>
                <SmartToyIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Robotica" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <SportsEsportsIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="VideoJuegos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ExtensionIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Rompecabezas" />
              </ListItemButton>
            </ListItem>

            {navBar2 ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton>
                    <SmartToyIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Robotica" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <SportsEsportsIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="VideoJuegos" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ExtensionIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary="Rompecabezas" />
                  </ListItemButton>
                </ListItem>
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
