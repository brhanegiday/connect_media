import { Grid, makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(6),
    minHeight: "100vh",
    // backgroundColor: "#f8f8f8",
    paddingLeft: "13rem",
    margin: 0,
  },
  textDescription: {
    fontSize: "14px",
    fontFamily: "Montserrat",
    color: "#606060",
    lineHeight: "1.5",
    fontWeight: "500",
  },
  title: {
    paddingBottom: "50px",
    fontSize: "100px",
    color: "#ff5851",
    fontWeight: "900",
  },
  subTitle: {
    fontFamily: "Libre Baskerville",
    fontSize: "32px",
    paddingBottom: "30px",
  },

  leftBox: {
    marginTop: "175px",
    alignContent: "flex-start",
  },
  rightBox: {
    backgroundColor: "#1C1B20",
    height: "500px",
    marginTop: "510px",
    maxWidth: "50%",
  },
  gridItem: {
    // paddingLeft: "70px",
    // paddingRight: "200px",
    maxWidith: "50px",
  },
  textTitle: {
    color: "#ffffff",
    fontSize: "16px",
    paddingBottom: "20px",
    marginTop: "50px",
    fontFamily: "Montserrat",
  },
  textServices: {
    color: "#c0c0c0",
    fontFamily: "Montserrat",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  btn: {
    fontFamily: "LibreBaskerville",
    fontSize: "20px",
    textDecoration: "underline",
    paddingTop: "30px",
    "&:hover": {},
  },
  polyline: {
    color: "#ffffff",
  },
}));

function Digital() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={10} className={classes.root}>
        <Grid item xs={12} md={5} className={classes.leftBox}>
          <div>
            <Typography variant="h1" className={classes.title}>
              DIG
              <br />
              ITAL<span>.</span>
            </Typography>
          </div>

          <Typography variant="h4" className={classes.subTitle}>
            <span>
              An <i style={{ fontFamily: "LibreBaskerville" }}>overview</i> of
              your digital strategy<span style={{ color: "#ff5851" }}>.</span>
            </span>
          </Typography>
          <Typography variant="body1" className={classes.textDescription}>
            A key component of your transformation, your digital strategy
            requires special attention. We provide you with the support you need
            all during your project. Through regular workshops, brainstormings
            and idea sharing, we help grow your initial idea into a cutting-edge
            digital solution.
          </Typography>
          <div className={classes.btn}>
            <Link href="/values">
              <a>
                <i>Our values</i>
              </a>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={7} className={classes.rightBox}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} className={classes.gridItem}>
              <Typography variant="h3" className={classes.textTitle}>
                Design
              </Typography>
              <Typography className={classes.textServices}>
                Web design Art direction Logo & branding UI & UX
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem} xs={12} md={6}>
              <Typography variant="h3" className={classes.textTitle}>
                Digital & Mobile
              </Typography>
              <Typography className={classes.textServices}>
                Websites Responsive design Mobile & Tablet Mobile apps (iOS,
                Android)
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item className={classes.gridItem} xs={12} md={6}>
              <Typography variant="h3" className={classes.textTitle}>
                Web Development
              </Typography>
              <Typography varaint="p" className={classes.textServices}>
                Front end & Back end Interaction design Magento, Wordpress
                Symfony, Laravel
              </Typography>
            </Grid>
            <Grid item className={classes.gridItem} xs={12} md={6}>
              <Typography variant="h3" className={classes.textTitle}>
                Social Media & Webmarketing
              </Typography>
              <Typography variant="body1" className={classes.textServices}>
                Social Media Strategy Community Management Bloggers &
                influencers Reporting, live events Mailing & competition
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Digital;
