import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Digital from "components/agency/Digital";
import Creative from "components/agency/Creative";
import Ideas from "components/agency/Ideas";
import Banner from "components/agency/Banner";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#999",
    marginLeft: " 2.6rem",
    marginRight: "2.6rem",
    zIndex: 100,
    fontFamily: "Montsertat,LibreBaskerville",
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Banner />
      <Digital />
      <Creative />
      <Ideas />
    </div>
  );
}

export default Home;
