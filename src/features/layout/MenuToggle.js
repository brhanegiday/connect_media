import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toggleButton: {
    outline: "none",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "40vh",
    left: "15px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "transparent",
  },
}));

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="1.4"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => {
  const classes = useStyles();
  return (
    <button onClick={toggle} className={classes.toggleButton}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 7 2.5 L 25 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 1 9.423 L 25 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 10 16.346 L 25 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
