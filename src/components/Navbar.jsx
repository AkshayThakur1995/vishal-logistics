import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rotas
import { Link } from "react-router-dom";

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rotas
const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Services",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Set the desired background color with reduced opacity
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Typography variant="h6" component="h2">
          Vishal Logistics
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "orange",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
