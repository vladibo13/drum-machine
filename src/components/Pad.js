import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Pad = ({ classes, playSound, k, power }) => {
  return (
    <Paper onKeyDown={(e) => console.log(e)} className={classes.paper}>
      <Button
        onClick={(e) => playSound(k)}
        color="primary"
        fullWidth={true}
        size="large"
        variant="contained"
        disabled={power}
      >
        {k.keyTrigger}
      </Button>
    </Paper>
  );
};

export default Pad;
