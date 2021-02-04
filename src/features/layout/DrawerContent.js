import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useRouter } from "next/router";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: theme.spacing(10),
    width: "50vw",
    [theme.breakpoints.down("xs")]: {
      width: "60vw",
    },
  },
  layer: {},
  menuLinks: {
    width: "100%",
    fontFamily: "Lora",
    color: theme.palette.primary.light,
    listStyleType: "none",
  },
  innerListText: {
    fontFamily: "Lora",
    color: theme.palette.primary.light,
    transform: "scale(1,1.2)",
    margin: theme.spacing(1),
    fontSize: 14,
    fontWeight: 600,
    // fontSize: "15px",
    "&:hover": {
      fontWeight: 700,
    },
  },
  listItem: {
    marginLeft: theme.spacing(5),
    cursor: "pointer",

    transition: "transform 0.25s",
    "&:hover": {
      transform: "scale(1.06)",
      transition: "transform 0.25s",
      textDecoration: "underline",
    },
  },
  listText: {
    color: theme.palette.primary.light,
    fontFamily: "Lora",
    letterSpacing: "2px",
    fontSize: 18,
    fontWeight: 600,
    // fontSize: "15px",
    "&:hover": {
      fontWeight: 700,
    },
  },
  innerListItem: {
    marginLeft: theme.spacing(1),
    cursor: "pointer",

    transition: "transform 0.25s",
    "&:hover": {
      transform: "scale(1.06)",
      transition: "transform 0.25s",
      textDecoration: "underline",
    },
  },
  expandable: {
    color: theme.palette.primary.light,
    marginLeft: theme.spacing(5),
    cursor: "pointer",
  },
  closeIcon: {
    position: "absolute",
    right: theme.spacing(1.5),
    top: theme.spacing(1.5),
  },
}));

export default function DrawerContent(props) {
  const classes = useStyles();
  const router = useRouter();
  const { setOpenDrawer } = props;
  return (
    <div className={classes.root}>
      <IconButton
        className={classes.closeIcon}
        onClick={() => setOpenDrawer(false)}
      >
        <CloseIcon />
      </IconButton>
      <Box className={classes.menuLinks}>
        <li
          className={classes.listItem}
          onClick={() => {
            router.push("/");
            setOpenDrawer(false);
          }}
        >
          <Typography variant="h6" className={classes.listText}>
            Home
          </Typography>
        </li>
        <li
          className={classes.listItem}
          onClick={() => {
            router.push("/about");
            setOpenDrawer(false);
          }}
        >
          <Typography variant="h6" className={classes.listText}>
            About
          </Typography>
        </li>
        <li className={classes.expandable}>
          <Box display="flex">
            <Typography variant="h6" className={classes.listText}>
              Resources
            </Typography>
            <KeyboardArrowDownIcon className={classes.expandIcon} />
          </Box>
          <Box className={classes.menuLinks} style={{ color: "#000" }}>
            <li
              className={classes.innerListItem}
              onClick={() => router.push("/institutions")}
            >
              <Typography variant="caption" className={classes.innerListText}>
                Institutions
              </Typography>
            </li>
            <li
              className={classes.innerListItem}
              onClick={() => router.push("/laws-and-policies")}
            >
              <Typography variant="caption" className={classes.innerListText}>
                Laws & Policies
              </Typography>
            </li>
            <li
              className={classes.innerListItem}
              onClick={() => router.push("/useful-links")}
            >
              <Typography variant="caption" className={classes.innerListText}>
                Useful Links
              </Typography>
            </li>
            <li
              className={classes.innerListItem}
              onClick={() => router.push("/researchs-and-reports")}
            >
              <Typography variant="caption" className={classes.innerListText}>
                Researchs and Reports
              </Typography>
            </li>
          </Box>
        </li>
        <li
          className={classes.listItem}
          onClick={() => {
            router.push("/insights");
            setOpenDrawer(false);
          }}
        >
          <Typography variant="h6" className={classes.listText}>
            Insights
          </Typography>
        </li>
      </Box>
    </div>
  );
}

DrawerContent.propTypes = {
  setOpenDrawer: PropTypes.func.isRequired,
};
