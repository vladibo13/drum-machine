import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Display = ({ display, classes }) => {
  return (
    <Grid item sm={4} xs={12}>
      <Paper className={classes.paper}>{display ? display : "No Sound"}</Paper>
    </Grid>
  );
};

export default Display;
