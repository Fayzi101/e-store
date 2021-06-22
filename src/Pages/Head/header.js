import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ShopOutlinedIcon from "@material-ui/icons/ShopOutlined";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/Styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "static",
    backgroundColor: "black",
  },

  tool: {
    display: "flex",
    justifyContent: "space-between",
  },

  button: {
    color: "white",
  },
  link: {
    textDecoration: "none",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <ToolBar className={classes.tool}>
        <Box className={classes.logo}>
          <Typography variant="h6">Jewellery Store |</Typography>
        </Box>

        <Box>
          <Link className={classes.link} to="/">
            <Button className={classes.button} size="small">
              Home
            </Button>
          </Link>
          <Link className={classes.link} to="/collection">
            <Button className={classes.button} size="small">
              Collection
            </Button>
          </Link>
          <Link className={classes.link} to="/Aboutus">
            <Button className={classes.button} size="small">
              About Us
            </Button>
          </Link>
        </Box>

        <Box className={classes.icons}>
          <Link to="/shopping-cart">
            <IconButton>
              <Badge>
                <ShopOutlinedIcon htmlColor="white" />
              </Badge>
            </IconButton>
          </Link>
        </Box>
      </ToolBar>
    </AppBar>
  );
}
