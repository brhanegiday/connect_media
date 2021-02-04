import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
// import "./Projects.module.css";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 30px",
  },
  container: {
    position: "relative",
    "&:hover $overlay": {
      height: "100%",
    },
    "&:hover $projectTitle": {
      // display: "none",
      //  transform: "translate(0%, -100%)",
      // transition: "0.9s ease",
    },
    "&:hover $projectType": {
      // display: "none",
      // // transform: "translate(0%, -100%)",
      // transition: "0.9s ease",
    },
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
  },
  overlay: {
    position: "absolute",
    bottom: "0",
    right: "0",
    left: "0",
    backgroundColor: "#E3544A",
    overflow: "hidden",
    width: "100%",
    height: "0",
    transition: "0.8s ease",
  },

  text: {
    display: "block",
    color: "white",
    fontSize: "25px",
    position: "absolute",
    top: "50%",
    left: "40%",
    fontFamily: "Montserrat",
    fontWeight: "900",
    //
    // -webkitTransform: "translate(-50%, -50%)",
    // -ms-transform: translate(-50%, -50%);
    transform: "translate(-50%, -50%)",
    // textAlign: "center",
  },
  projectType: {
    position: "absolute",
    color: "#000",
    top: "40%",
    left: "40%",
    fontFamily: "Montserrat",
    fontWeight: "100",
    fontStyle: "oblique",
    color: "#fff",
    fontSize: "20px",
    transition: "0.9s ease",
    transform: "translate(-50%, -50%)",
  },
  projectTitle: {
    position: "absolute",
    color: "white",
    fontSize: "25px",
    top: "50%",
    left: "40%",
    fontFamily: "Montserrat",
    fontWeight: "900",
    transition: "0.9s ease",
    paddingTop: "30px",
    transform: "translate(-50%, -50%)",
  },
}));
function ProjectList() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={6} sm={6} md={4}>
          <div className={classes.container}>
            <img
              src="/projects/project-1.jpg"
              alt="Project"
              className={classes.image}
            />

            <div className={classes.projectType}>Website</div>
            <br />
            <div className={classes.projectTitle}>Zenith Arena de Lille.</div>

            <div className={classes.overlay}>
              <Typography variant="h3" className={classes.text}>
                <div
                  style={{
                    fontWeight: "100",
                    fontStyle: "oblique",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  Website
                </div>
                <br />
                <span>Zenith Arena de Lille.</span>
                <br />
                <span
                  style={{
                    color: "#000",
                  }}
                >
                  Discover the Zenith experience.
                </span>
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <div className={classes.container}>
            <img
              src="/projects/project-2.jpg"
              alt="Project"
              className={classes.image}
            />

            <div className={classes.projectType}>Project Overview</div>
            <br />
            <div
              className={classes.projectTitle}
              style={{
                color: "#F5D33E",
              }}
            >
              Supratec Group.
            </div>
            <div
              className={classes.overlay}
              style={{ backgroundColor: "#263477" }}
            >
              <Typography variant="h3" className={classes.text}>
                <div
                  style={{
                    fontWeight: "100",
                    fontStyle: "oblique",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  Project Overview
                </div>
                <br />
                <span
                  style={{
                    color: "#F5D33E",
                  }}
                >
                  Supratec Group.
                </span>
                <br />
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  Brand website for the industrial market leader.
                </span>
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <div className={classes.container}>
            <img
              src="/projects/project-3.jpg"
              alt="Project"
              className={classes.image}
            />

            <div className={classes.projectType}> E-commerce website</div>
            <br />
            <div className={classes.projectTitle}>Arrow 1851.</div>
            <div
              className={classes.overlay}
              style={{ backgroundColor: "#555A61" }}
            >
              <Typography variant="h3" className={classes.text}>
                <div
                  style={{
                    fontWeight: "100",
                    fontStyle: "oblique",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  E-commerce website
                </div>
                <br />
                <span>Arrow 1851.</span>
                <br />
                <span
                  style={{
                    color: "#000",
                  }}
                >
                  New e-commerce site for the historical brand.
                </span>
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectList;
