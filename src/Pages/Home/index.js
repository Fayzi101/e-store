import { useState } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";

import Content from "../Products/product-list";
import CategoryFilter from "./category-filter";
import { getVisibleProducts } from "../../Data/products";
import Header from "../Head/header";
import MainCarousel from "./main-carousel";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const products = getVisibleProducts(selectedCategories);
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>

      <MainCarousel />

      <Grid container style={{ marginTop: "10px" }}>
        <Grid item xs={0} sm={2}>
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </Grid>

        <Grid item xs={12} sm={9}>
          <Content products={products} />
        </Grid>
      </Grid>
    </Grid>
  );
}
