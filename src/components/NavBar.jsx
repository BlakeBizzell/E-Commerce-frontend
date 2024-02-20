import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useGetCartItemsQuery } from "../api/soapApi";
import IsAdmin from "./admin/IsAdmin";
import { useSelector } from "react-redux";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const NavBar = (show) => {
  localStorage.getItem(IsAdmin);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { data } = useGetCartItemsQuery();
  const cartItemCount = data ? data.cartItems.length : 0;
  const user = useSelector((state) => state.user);
  const userId = user ? user.id : null;

  if (!userId) {
    return null;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: show ? "flex" : "none" }}>
        <CssBaseline />
        <MuiAppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sudsational Soap's
            </Typography>
            <IconButton color="inherit">
              <Badge
                badgeContent={cartItemCount}
                color="secondary"
                component={RouterLink}
                to="/cart"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </MuiAppBar>
        <Box sx={{ paddingTop: "64px" }} />
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={RouterLink} to="/sign-in" onClick={handleClose}>
            Sign In
          </MenuItem>
          <MenuItem component={RouterLink} to="/sign-up" onClick={handleClose}>
            Sign Up
          </MenuItem>
          <MenuItem component={RouterLink} to="/products" onClick={handleClose}>
            Products
          </MenuItem>
          <MenuItem component={RouterLink} to="/admin" onClick={handleClose}>
            Admin
          </MenuItem>
          <MenuItem
            component={RouterLink}
            to="/myAccount"
            onClick={handleClose}
          >
            My Account
          </MenuItem>
        </Menu>
      </Box>
    </ThemeProvider>
  );
};

export default NavBar;
