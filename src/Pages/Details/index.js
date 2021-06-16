import React from "react";
import Grid from "@material-ui/core/Grid";

import { ReviewListing } from "./review-listing";
import Header from "../Head/header";
import ProductDetails from "./products-detail";

export default function Detail() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <ProductDetails />
      </Grid>
      <Grid item>
        <ReviewListing />
      </Grid>
    </Grid>
  );
}
