import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    paddingTop: "140px",
  },
  title: {
    fontSize: "50px",
    fontFamily: "Montserrat",
    paddingBottom: "2rem",
    fontWeight: "900",
  },
  titleDescription: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "500",
    color: "#606060",
    paddingRight: "4rem",
  },
}));

function Section1() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={10} className={classes.root}>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={4}>
          <Typography className={classes.title}>
            Something strong
            <span style={{ fontStyle: "oblique", fontWeight: "400" }}>
              {" "}
              between us
            </span>
            <span style={{ color: "#F3C130", fontSize: "50px" }}>.</span>
          </Typography>
          <Typography className={classes.titleDescription}>
            Digital is undergoing radical changes and becoming more competitive.
            Simple web creation is now but a small part of the digital
            ecosystem. At Wokine, we understand that in order to make our
            relationship more effective and long-lasting, we need to offer a
            different value.
            <br />
            <br />
            <br />
            We've been developing this value since 2004. It's based on
            listening, innovative support, and quality. It enables us to create
            strong partnership relations in which each member is accountable for
            the project's success. We form a single team, working together in
            the long term.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="/assets/brique-partenaire.svg"
            layout="responsive"
            width="100%"
            height="100%"
            alt="Connect Media"
          />
        </Grid>
        <Grid item xs={0} md={2} />
      </Grid>
    </div>
  );
}

export default Section1;
