import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MenuIcon from "@mui/icons-material/Menu";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { alignHorizontal } from "../theme/theme";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import SerachBar from "./SearchBar";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ backgroundColor: "#fff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={alignHorizontal}>
            <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
              <FacebookOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
            </IconButton>
            <SerachBar />
          </Box>

          <Box
            sx={{
              ...alignHorizontal,
              width: "30%",
              position: "absolute",
              top: 6,
              right: 0,
              left: 0,
              margin: "auto auto",
            }}
          >
            <Tooltip title="Inicio">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <HomeOutlinedIcon color="inherit" sx={{ fontSize: 34 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Watch">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <OndemandVideoIcon color="inherit" sx={{ fontSize: 34 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="MarketPlace">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <StorefrontIcon color="inherit" sx={{ fontSize: 34 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Grupos">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <PeopleOutlineIcon color="inherit" sx={{ fontSize: 34 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Videojuegos">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <SportsSoccerIcon color="inherit" sx={{ fontSize: 34 }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={alignHorizontal}>
            <Tooltip title="Menú">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon color="inherit" sx={{ fontSize: 26 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Messenger">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <MapsUgcIcon color="inherit" sx={{ fontSize: 26 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notificaciones">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon color="inherit" sx={{ fontSize: 26 }} />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Cuenta">
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
