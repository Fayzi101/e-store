import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  styleDate: {
    margin: "8px 0px 0px 5px",
  },
  styleCard: {
    margin: "10px 0px 0px 0px",
  },
  styleTextField: {
    width: "700px",
    margin: "10px 0px 0px 0px",
  },
  styleRatingHeading: {
    margin: "10px 0px 10px 0px",
  },
  stylePostButton: {
    marginTop: "10px",
  },
  styleContent: {
    height: "100px",
  },
  
});

export function ReviewCard(props) {
  const { username, date, review,  } = props.review;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.styleCard}>
        <CardContent>
          <Typography display="inline" variant="h5" component="h1">
            {username}
          </Typography>
          <Typography
            display="inline"
            className={classes.styleDate}
            variant="p"
            component="h4"
          >
            Posted on {date}
          </Typography>
          <Typography component="h4">{review}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export const NewReview = () => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.styleTextField}
        label="Full Name"
        variant="outlined"
      />
      <br />
      <TextField
        className={classes.styleTextField}
        label="Review"
        variant="outlined"
      />
      <Button variant="outlined" size="small" color="secondary">
        Post Review
      </Button>
    </div>
  );
};
