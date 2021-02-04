import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import theme from "utils/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "center",
    // backgroundColor: "#f8f8f8",
    padding: "150px 150px",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: "136px",
    fontWeight: "900",
  },
  subTitle: {
    fontFamily: "Montserrat",
    fontSize: "36px",
    fontWeight: "800",
    paddingTop: "150px",
    paddingBottom: "30px",
    paddingRight: "120px",
  },
  titleDescription: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "500",
    paddingRight: "120px",
    lineHeight: "1.7",
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" className={classes.title}>
              WO
              <br />
              RK.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.subTitle}>
              A selection of{" "}
              <span style={{ fontStyle: "oblique", fontWeight: "500" }}>
                18 case studies.
              </span>
            </Typography>
            <Typography variant="body2" className={classes.titleDescription}>
              With over 300 projects for more than 200 clients, we can't show
              you everything. So we've made a brief selection. Enjoy!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;
