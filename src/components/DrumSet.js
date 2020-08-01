import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const DrumSet = ({ classes, setPiano, setDrum }) => {
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <h6>Choose Set</h6>
        <ButtonGroup
          size="large"
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button onClick={setPiano}>Piano</Button>
          <Button onClick={setDrum}>Drums</Button>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default DrumSet;
