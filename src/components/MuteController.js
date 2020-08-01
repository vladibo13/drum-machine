import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const MuteController = ({ power, togglePower, classes }) => {
  return (
    <Grid item sm={4} xs={12}>
      <Paper className={classes.paper}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch color="primary" checked={power} onChange={togglePower} />
            }
            label="Mute"
          />
        </FormGroup>
      </Paper>
    </Grid>
  );
};

export default MuteController;
