import React from "react";
import { Link } from "react-router-dom";

// import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import userService from "../services/UserService";

const useStyles = makeStyles({
  link: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link className={classes.link} to="/">
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link className={classes.link} to="/products">
            Products
          </Link>
        </Typography>

        <Typography variant="h6">
          <Link className={classes.link} to="/contactus">
            Contact Us
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link className={classes.link} to="/login">
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link className={classes.link} to="/register">
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <Typography variant="h6">
            <Link className={classes.link} to="/ ">
              <Button
                style={{ padding: "10px" }}
                onClick={(e) => {
                  userService.logout();
                  window.location.reload();
                }}
              >
                LogOut {userService.getLoggedInUser().name}
              </Button>
            </Link>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
