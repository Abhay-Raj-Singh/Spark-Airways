import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    position: "fixed",
    bottom:"0",
    width: "100%",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className="text-center">
      <footer className={classes.footer}>
        {"Copyright © "}
        Spark Airways&nbsp;
      {new Date().getFullYear()}
      </footer>
    </div>
  );
}
