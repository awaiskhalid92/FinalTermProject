import React from "react";
import axios from "axios";

import productsService from "../../services/ProductsService";
import { Button, Grid } from "@mui/material";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import userService from "../../services/UserService";

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProp;
// }

const SingleProduct = (props) => {
  const navigate = useNavigate();

  const { product, onDelete } = props;
  // console.log(props);

  return (
    <Grid item xs={3}>
      <h2>
        {product.Name}{" "}
        {userService.isAdmin() && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log("navigate to update");
                navigate("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                productsService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
      </h2>
      <p>{product.Price}</p>
      <hr />
    </Grid>
  );
};

export default SingleProduct;
