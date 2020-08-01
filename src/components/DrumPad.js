import React from "react";
import Grid from "@material-ui/core/Grid";
import Pad from "./Pad";

const DrumPad = ({ keys, classes, playSound, power }) => {
  return (
    <>
      {keys.map((k) => {
        return (
          <Grid item xs={4}>
            <Pad classes={classes} playSound={playSound} k={k} power={power} />
          </Grid>
        );
      })}
    </>
  );
};

export default DrumPad;
