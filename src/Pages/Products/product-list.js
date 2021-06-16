import Grid from "@material-ui/core/Grid";
import ProductCard from "./product-card";

export default function Content(props) {
  const { products } = props;

  return (
    <Grid container spacing={1}>
      {products.map((product) => (
        <Grid item md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
