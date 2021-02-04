import React from "react";
import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 2,
    overflow: "hidden",
    paddingTop: "50px",
    backgroundColor: "#ffffff",
    minHeight: "30vh",
    display: "grid",
    placeItems: "center",
    color: "#000",
    padding: theme.spacing(3),
  },
  logo: {
    display: "grid",
    placeItems: "center",
    width: "300px",
    height: "150px",

    [theme.breakpoints.down("xs")]: {
      width: "180px",
      height: "90px",
    },
  },
  centerGridItem: {
    // color: "#fff",

    display: "grid",
    placeItems: "center",
    fontSize: "13px",
    fontFamily: "LibreBaskerville",
  },

  leftGridItem: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100%", width: "100%" }}
      >
        <Grid item xs={12} sm={4} md={4} className={classes.leftGridItem}>
          <IconButton>
            <ArrowRightAltIcon />
          </IconButton>
          <div style={{ paddingLeft: "30px" }}>
            <Typography variant="caption">
              <Link href="mailto: ahadu2000@gmail.com">
                <i style={{ fontFamily: "LibreBaskerville", fontSize: "11px" }}>
                  Want to work with us ?
                </i>
              </Link>
            </Typography>
            <Typography
              variant="h3"
              weight="bold"
              style={{
                fontFamily: "LibreBaskerville",
                fontWeight: "900",
                fontSize: "24px",
              }}
            >
              <Link href="mailto: ahadu2000@gmail.com">
                <a>BRIEF US</a>
              </Link>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <div>
            <Typography variant="caption" className={classes.centerGridItem}>
              <i style={{ fontSize: "11px" }}>Addis Ababa, Ethiopia</i>
              <br />
              <span
                style={{
                  fontWeight: "900",
                }}
              >
                +251 91 098 6585 <br />
                ahadu2000@gmail.com
              </span>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={4} className={classes.centerGridItem}>
          <div className={classes.logo}>
            <img height="100" width="100" src="/assets/logo/logo-1.svg" />
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}
