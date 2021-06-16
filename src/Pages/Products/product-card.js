import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  link: {
    textDecoration: "none",
  },
});

export default function ProductCard(props) {
  const classes = useStyles();
  const { product } = props;

  return (
    <Link
      className={classes.link}
      to={`/detail/${product.id}/${product.title}`}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              Rs. {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Buy Now
          </Button>
          <Button size="small" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
