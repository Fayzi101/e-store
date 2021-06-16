import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/Styles";
import Header from "../Head/header";
import CartTable from "./cart-table";
import { CartContext } from "./cartfun";

const useStyles = makeStyles({
  heading: {
    display: "flex",
    justifyContent: "center",
    border: "2px solid black",
  },
});

export default function Cart() {
  const { cartTotal, cartItems, removeFromCart, updateQuantity } =
    useContext(CartContext);

  const classes = useStyles();
  return (
    <div>
      <Header />
      <Typography className={classes.heading} variant="h3">
        Shopping Cart Items
      </Typography>
      <CartTable
        cartTotal={cartTotal}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
