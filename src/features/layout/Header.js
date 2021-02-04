import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.8),
    },
  },
  logo: {
    width: "80px",
    [theme.breakpoints.down("xs")]: {
      width: "65px",
    },
  },
  contentContainer: {
    display: "flex",
  },
  logoWrapper: {
    flexGrow: 1,
    cursor: "pointer",
  },
  links: {
    paddingTop: theme.spacing(1.5),
    display: "flex",
  },
  link: {
    fontSize: "1.2rem",
    paddingBottom: 0,
    marginLeft: theme.spacing(4),
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      borderRadius: "2px",
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  menuIcon: {
    paddingTop: theme.spacing(1),
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.3rem",
    },
  },
  drawerContainer: {
    position: "fixed",
    zIndex: 1500,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    [theme.breakpoints.down("xs")]: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  drawerLayer: {
    // background: "rgba(0,0,0,0.4)",
    height: "100vh",
  },
  drawerContent: {
    position: "relative",
    background: theme.palette.primary.main,
    height: "100vh",
  },
  drawerLinks: {
    paddingTop: "4rem",
  },
  drawerLink: {
    color: "#fff",
  },
  closeIcon: {
    position: "absolute",
    right: "1rem",
    top: "1rem",
    zIndex: 1700,
  },
}));
export default function Header() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <AppBar
        className={classes.root}
        color="primary"
        position="relative"
        elevation={0}
      >
        <Container maxWidth="xl" className={classes.contentContainer}>
          <div className={classes.logoWrapper}>
            <img src="/layout/Header.svg" className={classes.logo} />
          </div>
          <Hidden implementation="css" smDown>
            <div className={classes.links}>
              <Typography className={classes.link}>About Us</Typography>
              <Typography className={classes.link}>Solutions</Typography>
              <Typography className={classes.link}>Influencers</Typography>
              <Typography className={classes.link}>Brands</Typography>
              <Typography className={classes.link}>Contact Us</Typography>
            </div>
          </Hidden>
          <Hidden implementation="css" mdUp>
            <MenuRoundedIcon
              className={classes.menuIcon}
              onClick={() => setOpenDrawer(true)}
            />
          </Hidden>
        </Container>
      </AppBar>
      <AnimatePresence>
        {openDrawer && (
          <div className={classes.drawerContainer}>
            <Grid container>
              <Grid item xs={5} sm={6} md={7}>
                <motion.div
                  animate={{ background: "rgba(0,0,0,0.4)" }}
                  exit={{ background: "rgba(0,0,0,0)" }}
                  className={classes.drawerLayer}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </Grid>
              <Grid item xs={7} sm={6} md={5}>
                <motion.div
                  initial={{ y: "100vh" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100vh" }}
                  transition={{ duration: 0.3 }}
                  className={classes.drawerContent}
                >
                  <div className={classes.closeIcon}>
                    <IconButton onClick={() => setOpenDrawer(false)}>
                      <CloseIcon style={{ color: "#fff" }} />
                    </IconButton>
                  </div>
                  <List className={classes.drawerLinks}>
                    <ListItem>
                      <ListItemText className={classes.drawerLink}>
                        About Us
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText className={classes.drawerLink}>
                        Solutions
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText className={classes.drawerLink}>
                        Influencers
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText className={classes.drawerLink}>
                        Brands
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText className={classes.drawerLink}>
                        Contact Us
                      </ListItemText>
                    </ListItem>
                  </List>
                </motion.div>
              </Grid>
            </Grid>
          </div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}
