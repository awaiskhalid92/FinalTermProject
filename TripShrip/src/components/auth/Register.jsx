import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import axiosInstance from "../../services/axiosInstance";
import userService from "../../services/UserService";
import axios from "axios";
import { toast } from "react-toastify";
const useStyles = makeStyles({
  contianer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    padding: "20px",
    width: "60%",
  },
});
const Register = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("hammad@gmail.com");
  const [password, setPassword] = useState("hammad");
  const [name, setName] = useState("Hammad");
  const classes = useStyles();
  return (
    <div className={classes.contianer}>
      <div className={classes.child}>
        <TextField
          label="name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <hr />
        <TextField
          label="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <hr />
        <TextField
          label="password"
          type="password"
          value={password}
          fullWidth
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
              .register(name, email, password)
              .then((data) => {
                console.log(data);
                navigate("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
