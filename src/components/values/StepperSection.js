import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "120px 270px",
    display: "inline-flex",
    placeTtems: "start,center",
  },
  title: {
    fontSize: "37px",
    fontFamily: "Montserrat",
    fontWeight: "600",
  },
  subTitle: {
    fontSize: "25px",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontStyle: "oblique",
  },
  titleDiscription: {
    paddingTop: "20px",
    fontSize: "14px",
    fontFamily: "Montserrat",
    fontWeight: "500",
    width: "80%",
  },
}));
function StepperSection() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={6} className={classes.root}>
        <Grid item xs={12} md={4}>
          <Typography className={classes.title}>
            Before.
            <div className={classes.subTitle}>Design thinking</div>
          </Typography>

          <Typography className={classes.titleDiscription}>
            We schedule kick-offs at the right time and workshops when needed to
            generate ideas and prepare for the next step.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.title}>
            During. <br />
            <div className={classes.subTitle}>Agility</div>
          </Typography>

          <Typography className={classes.titleDiscription}>
            We can work fast or take our time to include you into the whole
            process.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography className={classes.title}>
            After.
            <br />
            <div className={classes.subTitle}>Design thinking</div>
          </Typography>
          <Typography className={classes.titleDiscription}>
            Just because our work is done, it doesn't mean we're done with you.
            We're always available to suggest new ideas and help you develop
            yours as the months and years go by.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default StepperSection;
