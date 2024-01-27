import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";
import Button from "@mui/material/Button";
import { MenuListItems } from "../components/MenuListItems";
import { Outlet } from "react-router-dom";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LiveClock from "../components/LiveClock";

const drawerWidth = 220;

export default function Dashboard() {
  const { logout } = useAuthCall();
  const currentUser = useSelector((state) => state.auth);

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={toggleMobileDrawer}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOCK APP
          </Typography>

          {currentUser && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" mr={3} color="greenyellow">
                {currentUser.currentUser}
              </Typography>

              <Button color="inherit" onClick={() => logout()}>
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "secondary.main",
            },
          }}
          variant="temporary"
          anchor="left"
          open={mobileDrawerOpen}
          onClose={toggleMobileDrawer}
        >
          <Toolbar />
          <Divider />
          <MenuListItems />
          <Divider />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "secondary.main",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <LiveClock />
          <Toolbar />
          <Divider />
          <MenuListItems />
          <Divider />
        </Drawer>
      </Hidden>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          ml: 0,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
