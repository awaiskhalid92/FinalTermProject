import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SingleProduct from "./SingleProduct";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productsService from "../../services/ProductsService";
import userService from "../../services/UserService";

const useStyles = makeStyles({
  addBtn: {
    position: "absolute",
  },
});

const Prodcuts = (props) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:4000/api/products")

      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();
  // getData();

  React.useEffect(getData, []);
  //   console.log("Inside  Products Components");
  const handleNewProductClick = () => {
    console.log(props);
    navigate("/product/new");
  };

  return (
    <div>
      <h1>Products</h1>
      {userService.isLoggedIn() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}

      {products.length === 0 ? (
        <p>There are no proucts</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product1, index) => (
            <SingleProduct key={index} product={product1} onDelete={getData} />
          ))}
        </Grid>
      )}
      {/* Notes: products.map is function whose input is product and it will return a 
            tag and we will pass that tag an product as input parameter  */}
      {/* <SingleProduct product={products[0]} />
               <SingleProduct product={products[1]} /> */}
    </div>
  );
};

export default Prodcuts;
