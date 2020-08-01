import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Heading from "./components/Heading";
import VolumeController from "./components/VolumeController";
import Display from "./components/Display";
import MuteController from "./components/MuteController";
import DrumPad from "./components/DrumPad";
import DrumSet from "./components/DrumSet";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const App = ({ drumSet, pianoSet }) => {
  const [keys, setKeys] = useState(drumSet);
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(false);
  const classes = useStyles();
  const [volume, setVolume] = useState(30);

  const togglePower = () => {
    setPower((prev) => !prev);
  };

  const handleVolume = (event, newValue) => {
    setVolume(newValue);
  };

  const playSound = ({ url, id }) => {
    const sound = new Audio(url);
    sound.volume = volume / 100;
    console.log(volume);
    sound.play();
    setDisplay(id);
  };

  const setPiano = () => {
    setKeys(pianoSet);
    setDisplay("Piano Set");
  };

  const setDrum = () => {
    setKeys(drumSet);
    setDisplay("Drum Set");
  };

  return (
    <Container classNAme={classes.root} maxWidth="sm">
      <Heading text="Drum Machine" />
      <Grid container spacing={4}>
        <VolumeController
          classes={classes}
          volume={volume}
          handleVolume={handleVolume}
        />
        <Display display={display} classes={classes} />
        <MuteController
          power={power}
          togglePower={togglePower}
          classes={classes}
        />
        <DrumPad
          keys={keys}
          classes={classes}
          playSound={playSound}
          power={power}
        />
      </Grid>
      <DrumSet classes={classes} setPiano={setPiano} setDrum={setDrum} />
    </Container>
  );
};

export default App;
