import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "136px",
    color: "#000",
    fontFamily: "Montserrat",
    fontWeight: "900",
    paddingTop: "10rem",
    zIndex: "999",
  },
  leitmotiv: {
    fontSize: "20px",
    fontFamily: "LibreBaskerville",
    paddingBottom: "30px",
    fontStyle: "oblique",
    // fontWeight: "500",
  },

  rightGridItem: {
    backgroundColor: "#F3C130",
    paddingTop: "11rem ",
    paddingBottom: "11rem",
    paddingLeft: "18rem",
    paddingRight: "12rem",

    zIndex: "-1",
    marginLeft: "-8rem",
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <>
      <Grid container sapcing={8} className={classes.root}>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={2}>
          <Typography variant="h3" className={classes.title}>
            VAL
            <br />
            UES.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} className={classes.rightGridItem}>
          <Typography className={classes.leitmotiv}>Leitmotiv</Typography>
          <Typography>
            <span
              style={{
                fontSize: "33px",
                fontFamily: "Montserrat",
                color: "#f8f8f8",
                fontWeight: "600",
              }}
            >
              Strong support of your digital innovation for a
            </span>
          </Typography>
          <Typography>
            <span
              style={{
                fontSize: "33px",
                fontFamily: "Montserrat",
                color: "#1c1b20",
                fontWeight: "600",
              }}
            >
              strong and lasting relationship.
            </span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Banner;
