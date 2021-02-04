import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "120px 0px 120px 270px",
    display: "inline-flex",
    placeTtems: "start,center",
  },
  title: {
    fontSize: "50px",
    color: "#1c1b20",
    fontFamily: "Montserrat",
    fontWeight: "600",
    paddingBottom: "40px",
  },
  titleDescription: {
    fontSize: "19px",
    color: "#1c1b20",
    fontFamily: "Montserrat",
    paddingRight: "150px",
    fontWeight: "500",
    lineHeight: "1.7",
  },
}));
function Section3() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={6} className={classes.root}>
        <Grid item xs={12} md={6}>
          <Typography className={classes.title}>
            No bullshit,
            <div style={{ fontWeight: "400", fontStyle: "oblique" }}>
              just ideas.
            </div>
          </Typography>
          <Typography className={classes.titleDescription}>
            <div
              style={{
                fontStyle: "oblique",
                paddingBottom: "30px",
                fontWeight: "500",
              }}
            >
              We don't have a standard offer. Because every project is unique,
              rest assured that every one of our ideas is too.
            </div>
            <div style={{ fontSize: "14px" }}>
              Throughout your project, we act as an extension of your team. And
              because we're on the same team, we do everything with success,
              transparency and quality in mind.
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/assets/nobullshit_large.jpg"
            layout="responsive"
            width="100%"
            height="70%"
            alt="Connect Media"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Section3;
