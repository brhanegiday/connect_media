import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import router from "next/router";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
    fontSize: "100px",
    fontWeight: "900",
    paddingBottom: "50px",
    color: "#000",
    paddingLeft: "13rem",
  },
  subTitle: {
    fontFamily: "Libre Baskerville",
    fontSize: "32px",
    paddingBottom: "70px",
  },
  textDescription: {
    fontSize: "14px",
    fontFamily: "Montserrat",
    color: "#606060",
    lineHeight: "1.5",
    fontWeight: "500",
    // paddingRight: "65%",
  },
  btn: {
    fontFamily: "LibreBaskerville",
    fontSize: "20px",
    textDecoration: "underline",
    paddingTop: "50px",
    position: "relative",
    cursor: "pointer",
    "&:hover::after": {
      position: "absolute",
      textDecoration: "none",
      borderBottom: "0.125em solid rgba(255, 0, 0, 0.5)",
      lineHeight: "1em",
      marginTop: "calc(0.125em / 2 * -1)",

      color: "red",
      top: "50%",
    },
  },
  btnProject: {
    fontFamily: "LibreBaskerville",
    fontSize: "12px",
    cursor: "pointer",
    textDecoration: "underline",
    paddingTop: "10px",
    textAlign: "right",
    position: "relative",
    "&:hover": {
      textDecoration: "none",
      // position: "absolute",
      content: " ",
      // left: "50%",
      borderBottom: "0.125em solid rgba(255, 0, 0, 0.5)",
      lineHeight: "1em",
      // marginTop: "calc(0.125em / 2 * -1)",
      // top: "50%",
      // left: "50%",
    },
  },
  recruitment: {
    display: "grid",
    // justifyContent: "flex-end",
    fontFamily: "Montserrat",
    paddingTop: "30px",
  },
  leftBox: {
    marginTop: "150px",
  },
  rightBox: {
    marginTop: "300px",
    paddingRight: "60px",
    paddingRight: "60%",
  },
  creativeImage: {
    backgroundImage: "url('/assets/visuel_project-retina.jpg')",
    backgroundAttachment: "fixed",
  },
  // strikeout: {
  //   //   position: "relative",
  //   //   "&::after": {
  //   //     position: "absolute",
  //   //     borderBottom: "0.125em solid rgba(255, 0, 0, 0.5)",
  //   //     lineHeight: "1em",
  //   //     marginTop: "calc(0.125em / 2 * -1)",
  //   //     right: 0,
  //   //     top: "50%",
  //   //   },
  // },
}));

function Creative() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={6} justify="flex-start">
        <Grid item xs={12} md={6} className={classes.leftBox}>
          <Typography variant="h1" className={classes.title}>
            CRE
            <br /> ATIVE.
          </Typography>

          <div className={classes.creativeImage}>
            <Image
              src="/assets/visuel_project-retina.jpg"
              layout="responsive"
              width="100%"
              height="50%"
              style={{
                margin: "auto",
                backgroundPosition: "right center",
                backgroundAttachment: "fixed",
                opacity: "0.5",
              }}
              alt="Connect Media"
            />
          </div>
          <div className={classes.recruitment}>
            <Typography
              variant="body2"
              style={{
                fontSize: "11px",
                textAlign: "right",
                fontFamily: "Montserrat",
              }}
            >
              <span style={{ fontWeight: "900" }}>Decathlon recruitment.</span>
              <br />
              <span>
                <i
                  style={{
                    fontFamily: "LibreBaskerville",
                  }}
                >
                  Web & Mobile - 2014
                </i>
              </span>
            </Typography>
            <div onClick={() => router.push("/projects/123")}>
              <Typography className={classes.btnProject}>
                <i>Discover the Project</i>
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className={classes.rightBox}>
            <Typography variant="h4" className={classes.subTitle}>
              <i>User-centered</i>
              <br />
              <span style={{ fontWeight: "900" }}>creativity</span>
              <span style={{ color: "#ff5851", fontWeight: "900" }}>.</span>
            </Typography>
            <div className={classes.textDescription}>
              <Typography variant="body1" className={classes.textDescription}>
                Efficient and immersive user experience is the way to capture
                attention and deliver a clear message. This is why we believe,
                first and foremost, that usability serves design. And that all
                design must be elegant and innovative.
              </Typography>
            </div>
            <div onClick={() => router.push("/projects")}>
              <Typography className={classes.btn}>
                <i>Discover our work</i>
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Creative;
