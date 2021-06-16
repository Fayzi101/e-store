import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/Styles";

import { CaroData } from "./main-caro-data";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    width: "95%",
    height: "60vh",
    margin: "0 auto",
    marginTop: "10px",
  },
  image: {
    maxWidth: "100%",
    width: "100%",
    height: "55vh",
  },
});

export default function MainCarousel() {
  const classes = useStyles();

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: true,
          fade: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: true,
          fade: true,
        },
      },
    ],
  };
  return (
    <Grid className={classes.root}>
      <Slider {...settings}>
        {CaroData.map((slides) => {
          return (
            <div key={slides.id}>
              <img className={classes.image} src={slides.img} alt="" />
            </div>
          );
        })}
      </Slider>
    </Grid>
  );
}
