import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { AppBar, makeStyles, Container } from "@material-ui/core";
import router from "next/router";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    // background: "linear-gradient(180deg, #FF5851 0%, rgba(244, 67, 95,1) 100%)",
    // padding: 0,
    // overflow: "hidden",
    position: "relative",
    margin: 0,
    display: "flex",
    justifyCcontent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "30vw",
    // background: "#fff",
    background: "linear-gradient(180deg, #FF5851 0%, rgba(244, 67, 95,1) 100%)",
  },
  logo: {
    width: "80px",
    [theme.breakpoints.down("xs")]: {
      width: "65px",
    },
  },

  logoWrapper: {
    zIndex: "100",
    paddingLeft: "3.2rem",
    boxShadow: theme.spacing(5),
    flexGrow: 1,
    cursor: "pointer",
    height: "1rem",
  },
}));
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 43vh)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const classes = useStyles();

  return (
    <>
      <div className={classes.logoWrapper} onClick={() => router.push("/")}>
        <img src="/assets/logo/logo-1.svg" className={classes.logo} />
      </div>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={classes.root}
      >
        <motion.div className={classes.background} variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};
export default Sidebar;
