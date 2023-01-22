import React, { useState } from "react";
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
import { alignHorizontal } from "../../theme/theme";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import SerachBar from "../SearchBar";
import BotonesNavegacion from "./BotonesNavegacion";
import TuneIcon from "@mui/icons-material/Tune";

const NavBar = () => {
  const [botones, setBotones] = useState(1);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ backgroundColor: "#fff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/*  */}
          <Box
            sx={{
              ...alignHorizontal,
              width: { xs: "10%", lg: "100%" },
              maxWidth: "320px",
              justifyContent: "start",
            }}
          >
            <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
              <FacebookOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
            </IconButton>
            <SerachBar />
          </Box>

          <Box
            sx={{
              ...alignHorizontal,
              justifyContent: "space-around",
              width: { xs: "10%", md: "60%" },
              flexWrap: "nowrap",
              maxWidth: "645px",
            }}
            className="contenedor-botones-centrales"
          >
            <Box
              sx={{
                display: { xs: "none", md: "inherit" },
                margin: "auto auto",
                width: { xs: "83.33%", md: "100%" },
              }}
            >
              <BotonesNavegacion
                icon={
                  <HomeOutlinedIcon
                    color={botones === 1 ? "primary" : "inherit"}
                    sx={{ fontSize: 34 }}
                  />
                }
                num={1}
                onClick={(i) => setBotones(i)}
                estado={botones}
              />
              <BotonesNavegacion
                icon={
                  <OndemandVideoIcon
                    color={botones === 2 ? "primary" : "inherit"}
                    sx={{ fontSize: 34 }}
                  />
                }
                num={2}
                onClick={(i) => setBotones(i)}
                estado={botones}
              />
              <BotonesNavegacion
                icon={
                  <StorefrontIcon
                    color={botones === 3 ? "primary" : "inherit"}
                    sx={{ fontSize: 34 }}
                  />
                }
                num={3}
                onClick={(i) => setBotones(i)}
                estado={botones}
              />
              <BotonesNavegacion
                icon={
                  <PeopleOutlineIcon
                    color={botones === 4 ? "primary" : "inherit"}
                    sx={{ fontSize: 34 }}
                  />
                }
                num={4}
                onClick={(i) => setBotones(i)}
                estado={botones}
              />
              <BotonesNavegacion
                icon={
                  <SportsSoccerIcon
                    color={botones === 5 ? "primary" : "inherit"}
                    sx={{ fontSize: 34 }}
                  />
                }
                num={5}
                onClick={(i) => setBotones(i)}
                estado={botones}
              />
            </Box>
            <Box
              sx={{ display: { xs: "inherit", md: "none" }, width: "16.67%" }}
            >
              <BotonesNavegacion
                icon={
                  <MenuIcon
                    color={botones === 6 ? "primary" : "inherit"}
                    sx={{ fontSize: 34 }}
                  />
                }
                num={5}
                setBotones={setBotones}
                estado={botones === 6 ? true : false}
              />
            </Box>
          </Box>

          <Box
            sx={{
              ...alignHorizontal,
              width: { xs: "70%", md: "100%" },
              maxWidth: "210px",
            }}
          >
            <Tooltip title="Menú" sx={{ marginRight: 0 }}>
              <IconButton aria-label="menu" sx={{ mr: 2 }}>
                <TuneIcon color="inherit" sx={{ fontSize: 26 }} />
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
