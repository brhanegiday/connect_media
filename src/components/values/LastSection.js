import { Grid, makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1C1B20",
    padding: "150px 200px",
    display: "flex",
    placeTtems: "center",
  },
  leftGridItem: {
    fontSize: "50px",
    fontFamily: "Montserrat",
    fontWeight: "900",
    color: "#fff",
  },
  title: {
    fontSize: "20px",
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: "900",
  },
  titleDescription: {
    fontSize: "16px",
    color: "#c0c0c0",
    fontFamily: "Montserrat",
    fontWeight: "500",
    paddingBottom: "50px",
    paddingTop: "10px",
    width: "16rem",
  },
  // Startup section
  startup: {
    padding: "100px 150px",
    color: "#fff",
    backgroundColor: "#414a6b",
    fontFamily: "Montserrat",
    fontWeight: "900",
  },
  startupTitle: {
    fontSize: "35px",
    fontFamily: "Montserrat",
    padding: "0 120px",
    fontWeight: "900",
  },
  startupDescription: {
    fontSize: "14px",
    fontFamily: "Montserrat",
    width: "20rem",
    lineHeight: "1.7",
  },

  btn: {
    paddingTop: "30px",
    fontSize: "16px",
    color: "#fff",
    fontFamily: "Montserrat",
    textDecoration: "underline",
    fontWeight: "500",
  },
}));
function LastSection() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={6} className={classes.root}>
        <Grid item xs={12} md={4}>
          <Typography className={classes.leftGridItem}>
            What we know how to do,
            <span style={{ fontStyle: "oblique", fontWeight: "500" }}>
              well.
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.title}>Design</Typography>
          <Typography className={classes.titleDescription}>
            Web design Art direction Logo & branding UI & UX
          </Typography>
          <Typography className={classes.title}>Web Development</Typography>
          <Typography className={classes.titleDescription}>
            Front end & Back end Interaction design Magento, Wordpress Symfony,
            Laravel
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.title}>Digital & Mobile</Typography>
          <Typography className={classes.titleDescription}>
            Websites Responsive design Mobile & Tablet Mobile apps (iOS,
            Android)
          </Typography>
          <Typography className={classes.title}>
            Social Media & Webmarketing
          </Typography>
          <Typography className={classes.titleDescription}>
            Social Media Strategy Community Management Bloggers & influencers
            Reporting, live events Mailing & competition
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6} className={classes.startup}>
        <Grid item xs={12} md={6}>
          <Typography className={classes.startupTitle}>
            We work the same way for{" "}
            <span style={{ fontStyle: "oblique", fontWeight: "400" }}>
              startups
            </span>
            .
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography className={classes.startupDescription}>
            Our way of working, our philosophy and our values: we also put them
            at the service of startups.
          </Typography>
          <div className={classes.btn}>
            <Link href="/startup-studio">
              <a>
                <i>See more</i>
              </a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LastSection;
