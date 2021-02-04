import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
//import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useScrollPosition from "./useScrollPosition";

import { motion } from "framer-motion";

import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "10rem",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100vw",
    height: "88vh",
  },
  titleContainer: {
    marginRight: "-10rem",
    paddingTop: "10rem",
    paddingBottom: "10rem",
    display: "flex",
    zIndex: -1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: "8rem",
    lineHeigt: "2",
    fontFamily: "Montserrat",
    fontWeight: "900",
  },
  leftGridItem: {
    backgroundColor: "#FF5851",
  },
  rightGridItem: {
    backgroundColor: "#f8f8f8",
    zIndex: "-1",
  },
}));
const slide = {
  hidden: {
    //scaleX: 0,
    //originX: 0,
    x: 0,
    // backgroundColor: "#FF5851",
  },
  open: {
    // scaleX: -1,
    //originX: 1,
    x: 600,
    marginRight: "20px",
    backgroundColor: "#fff321",
    transition: {
      type: "tween",
      duration: "2",
      delay: "2",
    },
  },
};

function Banner() {
  const classes = useStyles();
  const [scrolled, setScrolled] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y >= 20;
      if (isShow !== scrolled) setScrolled(isShow);
    },
    [scrolled],
    false,
    true,
    0
  );

  // if (typeof window === "undefined") {
  //   global.window = {};
  // }
  // const handleScroll = () => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY >= 80) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleScroll();
  // }, []);
  console.log("scroled = ", scrolled);

  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} md={6} className={classes.leftGridItem}>
          <motion.div
            className={classes.titleContainer}
            variants={slide}
            animate={scrolled ? "open" : "hidden"}
            // transition={{
            //   type: "tween",
            //   duration: "2",
            //   delay: "2",
            // }}
          >
            <Typography variant="h1" className={classes.title}>
              HE <br />
              LLO <span style={{ color: "#FF5851" }}>.</span>
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.rightGridItem}></Grid>
      </Grid>
      <div>
        <Image
          src="/assets/video-visual-large.jpg"
          layout="responsive"
          width="100%"
          height="40%"
          alt="Connect Media"
        />
      </div>
    </div>
  );
}

export default Banner;
