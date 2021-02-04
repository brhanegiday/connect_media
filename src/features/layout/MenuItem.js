import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles, Typography } from "@material-ui/core";
import router from "next/router";

const useStyles = makeStyles((theme) => ({
  menuItems: {
    flex: 1,
    fontFamily: "Montserrat",
    fontSize: "1.6rem",
  },
  lists: {
    listStyle: "none",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
}));
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item }) => {
  const classes = useStyles();
  return (
    <motion.li
      variants={variants}
      whileHover={{
        scale: 1.1,
        textDecoration: "underline",
        textDecorationThickness: "2px",
        textDecorationColor: "#f8f8f8",
      }}
      whileTap={{ scale: 0.95 }}
      className={classes.lists}
    >
      <Typography
        variants="h4"
        className={classes.menuItems}
        onClick={() => router.push(item.menuItemPath)}
      >
        {item.menuItem}
      </Typography>
    </motion.li>
  );
};
