import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/Styles";

import { getProductById } from "../../Data/products";
import { CartContext } from "../Shopping-Cart-And-Checkout/cartfun";

const useStyles = makeStyles({
  roota: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  img: {
    height: "400px",
    width: "600px",
    borderRadius: 4,
    boxShadow: "5px 6px ",
  },

  rootb: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "40rem",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  rupee: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "5px",
    border: "1px solid black",
  },
  rootb1: {
    display: "flex",
    justifyContent: "flex-start",
  },
  rootb2: {
    display: "flex",
    justifyContent: "flex-start",
  },

  blackbutton: {
    background: "black",
    color: "white",
  },

  whitebutton: {
    border: "2px solid black",
  },
});

export default function ProductDetails() {
  let { id } = useParams();
  let history = useHistory();
  let product = getProductById(id);

  const [quantity, setQuantity] = useState(1);

  const classes = useStyles();

  const { addToCart } = useContext(CartContext);

  if (!product) {
    history.push("/not-found");
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product , quantity);
    setQuantity(1);
  };

  return (
    <Grid className={classes.roota} container>
      <Grid item>
        <img
          className={classes.img}
          src={product.image}
          alt={product.title}
        ></img>
      </Grid>

      <Grid className={classes.rootb} item>
        <Grid item className={classes.info}>
          <Typography
            variant="h3"
            style={{ textDecoration: "underline double" }}
          >
            {product.title}{" "}
          </Typography>
          <br />
          <Typography variant="p">{product.description}</Typography>
        </Grid>
        <Grid item className={classes.rootb1}>
          <Typography variant="h6" style={{ textDecoration: "underline" }}>
            Quantity
          </Typography>
          <ButtonGroup size="large">
            <Button
              onClick={() => setQuantity(quantity - 1)}
              size="small"
              variant="outlined"
              disabled={quantity === 1}
            >
              -
            </Button>
            <Button variant="outlined" size="small">
              {quantity}
            </Button>
            <Button
              onClick={() => setQuantity(quantity + 1)}
              size="small"
              variant="outlined"
              disabled={quantity === 10}
            >
              +
            </Button>
          </ButtonGroup>
          <Grid item className={classes.rupee}>
            <Typography variant="h5">Rs.{product.price * quantity}</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.rootb2} item>
          <Button className={classes.blackbutton} size="large">
            Buy Now
          </Button>
          <Button
            className={classes.whitebutton}
            size="large"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
