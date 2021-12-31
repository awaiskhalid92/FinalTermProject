import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import axiosInstance from "../../services/axiosInstance";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
const useStyles = makeStyles({
  contianer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    padding: "20px",
  },
  child: {
    width: "60%",
    padding: "20px",
  },
});
const Login = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState("hammadgujjar1@admin.com");
  const [password, setPassword] = useState("admin");
  return (
    <div className={classes.contianer}>
      <div className={classes.child}>
        <TextField
          label="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <hr />{" "}
        <TextField
          label="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            userService
              .login(email, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/";
              })
              .catch((e) => {
                console.log(e);
                toast.error(e.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
