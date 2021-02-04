import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    padding: "25px",
    position: "absolute",
    top: "20vh",
    left: "8vw",
    height: "100vh",
    width: "230px",
    overflow: "hidden",
  },
}));
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => {
  const classes = useStyles();
  return (
    <motion.ul variants={variants} className={classes.listContainer}>
      {itemIds.map((item, i) => (
        <MenuItem item={item} key={i} />
      ))}
    </motion.ul>
  );
};
const itemIds = [
  { menuItem: "The Agency.", menuItemPath: "/" },
  { menuItem: "Values.", menuItemPath: "/values" },
  { menuItem: "Projects.", menuItemPath: "/projects" },
  { menuItem: "Blog.", menuItemPath: "/blog" },
];
