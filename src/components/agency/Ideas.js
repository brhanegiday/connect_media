import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
    fontSize: "100px",
    fontWeight: "900",
    paddingTop: "50px",
    color: "#414A6B",
    marginLeft: "16%",
    marginTop: "100px",
    zIndex: 1300,
    background: "transparent",
  },
  startup: {
    padding: "80px 150px",
    display: "inline-flex",
    alignContent: "center",
    justifyContent: "space-between",
  },
  titleGrid: {
    fontSize: "32px",
    fontFamily: "Montserrat",
    color: "1c1b20",
  },
  textGrid: {
    fontSize: "14px",
    fontFamily: "Montserrat",
    color: "#606060",
  },
  btn: {
    fontFamily: "LibreBaskerville",
    fontSize: "20px",
    textDecoration: "underline",
    paddingTop: "20px",
    "&:hover": {},
  },
}));

function Ideas() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" className={classes.title}>
        ID
        <br />
        EAS.
      </Typography>
      <div style={{ zIndex: -1, marginTop: "-50px" }}>
        <Image
          src="/assets/startup-factory-retina.jpg"
          layout="responsive"
          width="100%"
          height="30%"
          alt="Connect Media"
          // style={{ zIndex: -1 }}
        />
      </div>
      <Grid container spacing={6} className={classes.startup}>
        <Grid item xs={12} md={4}>
          <Typography className={classes.titleGrid}>
            <span style={{ fontWeight: "900" }}>A studio dedicated to </span>
            <i style={{ fontFamily: "LibreBaskerville" }}>
              startups
              <span style={{ color: "#414A6B", fontSize: "40px" }}>.</span>
            </i>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.textGrid}>
            Have you dreamed up an innovative new digital platform, a
            revolutionary mobile application, a life-enhancing chatbot, or do
            you just want to change the world? Let's do it together.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.textGrid}>
            We're here to make your dreams come true. Our support method will
            turn your bright idea into a real prototype, and then grow it into a
            profitable business.
          </Typography>
          <div className={classes.btn}>
            <Link href="/startup-studio">
              <a>
                <i>See how</i>
              </a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ideas;
