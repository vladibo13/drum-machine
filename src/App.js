import React, { useState, useCallback, useEffect } from "react";
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
  const [volume, setVolume] = useState(30);

  const classes = useStyles();

  const togglePower = () => {
    setPower((prev) => !prev);
  };

  const handleVolume = (event, newValue) => {
    setVolume(newValue);
  };

  const playSound = ({ url, id }) => {
    playDrum(url, id);
  };

  const setPiano = () => {
    setKeys(pianoSet);
    setDisplay("Piano Set");
  };

  const setDrum = () => {
    setKeys(drumSet);
    setDisplay("Drum Set");
  };
  const keyFunction = useCallback((e) => {
    console.log(e.keyCode);
    const findKey = keys.filter((k) => e.keyCode === k.keyCode);
    console.log(findKey);
    if (findKey.length) {
      const [keyEvent] = findKey;
      playDrum(keyEvent.url, keyEvent.id);
    }
  }, []);

  const playDrum = (url, id) => {
    const sound = new Audio(url);
    sound.volume = volume / 100;
    console.log("Volume = ", volume);
    sound.play();
    setDisplay(id);
  };

  useEffect(() => {
    document.addEventListener("keydown", keyFunction, false);

    return () => {
      document.removeEventListener("keydown", keyFunction, false);
    };
  }, []);

  return (
    <Container maxWidth="sm">
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
