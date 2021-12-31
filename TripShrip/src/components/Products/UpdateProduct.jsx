import { Grid } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateProduct = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  const id = params.id;
  const isEditing = id ? "true" : "false";
  console.log(id);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  React.useEffect(function () {
    if (isEditing)
      axios
        .get("https://usman-recipes.herokuapp.com/api/products/" + params.id)
        .then((res) => {
          setName(res.data.name);
          setPrice(res.data.price);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Update Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          style={{ padding: "10px" }}
          id="standard-basic"
          label="name"
          variant="standard"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          style={{ padding: "10px" }}
          id="standard-basic"
          label="price"
          variant="standard"
          fullWidth
          value={price}
          onChange={(e) => {
            setPrice(
              e.target.value
            ); /* Using react state we can change the value of input fields*/
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("Update  call");
            axios
              .put("http://localhost:4000/api/products/" + id, {
                name,
                price,
              })
              .then((res) => {
                console.log(res.data);
                navigate("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Update Product
        </Button>
      </Grid>
    </Grid>
  );
};
export default UpdateProduct;
