import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Paper from "@material-ui/core/Paper";

const VolumeController = ({ volume, handleVolume, classes }) => {
  return (
    <Grid item sm={4} xs={12}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              value={volume}
              onChange={handleVolume}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default VolumeController;
