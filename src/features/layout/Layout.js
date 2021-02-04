import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowX: "hidden",
  },
  childWrapper: {
    // marginTop: theme.spacing(2),

    flexGrow: 1,
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.childWrapper}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
