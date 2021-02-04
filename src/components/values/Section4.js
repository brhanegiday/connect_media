import { makeStyles, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 30px",
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    // backgroundColor: theme.palette.background.paper,
  },
  title: {
    padding: "30px 0",
    fontSize: "50px",
    fontFamily: "Montserrat",
    marginLeft: "-16rem",
    fontWeight: "600",
  },
  titleDescription: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    paddingRight: "18rem",
    fontWeight: "500",
    lineHeight: "1.7",
  },

  astheticContainer: {
    padding: "100px 250px",
    display: "flex",
    justifyContent: "center",
  },
  astheticTitle: {
    fontFamily: "Montserrat",
    fontSize: "50px",
    fontWeight: "900",
  },
  astheticDescription: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.7",
  },
  image: {
    zIndex: "-1",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    padding: "0 30px",
  },
}));
function Section4() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={6} className={classes.root}>
        <Grid item xs={12} md={6}>
          <Image
            src="/assets/wireframes-retina.jpg"
            layout="responsive"
            width="90%"
            height="70%"
            alt="wireframes-retina"
            className={classes.image}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography className={classes.title}>
            User friendly inside,
            <div style={{ fontStyle: "oblique", fontWeight: "400" }}>
              innovation all around.
            </div>
          </Typography>

          <Typography className={classes.titleDescription}>
            <div
              style={{
                fontStyle: "oblique",
                paddingBottom: "40px",
                fontSize: "19px",
                fontWeight: "400",
              }}
            >
              Lots of great ideas are ruined by a lack of ambition, but also by
              a lack of distinction between what is beautiful and what is
              useful.
            </div>
            <div>
              This is why we take plenty of time to study your targets before
              suggesting an optimized, realistic user experience. We apply our
              highest standards to every aspect of our process in order to make
              your project an outstanding
            </div>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6} className={classes.astheticContainer}>
        <Grid item xs={12} md={6}>
          <Typography className={classes.astheticTitle}>
            <span style={{ fontStyle: "oblique", fontWeight: "400" }}>
              Aesthetic
            </span>{" "}
            and{" "}
            <span style={{ fontStyle: "oblique", fontWeight: "400" }}>
              technical{" "}
            </span>
            imperatives.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography className={classes.astheticDescription}>
            <div
              style={{
                fontStyle: "oblique",
                fontSize: "19px",
                paddingBottom: "30px",
              }}
            >
              Above and beyond project success, we have another goal: to be
              proud.
            </div>
            <div>
              Since 2004, we've won nearly a dozen national and international
              awards. These awards mean something. They're the guarantee that we
              always give the best of ourselves to each project, that we always
              keep our ambitions and standards high, and that each of our
              productions is on the leading edge of modernism and excellent
              taste.
            </div>
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.gridList}>
        <Image
          src="/assets/awards-retina.jpg"
          layout="responsive"
          width="80%"
          height="20%"
          alt="awards-retina"
        />
      </div>
    </div>
  );
}

export default Section4;
