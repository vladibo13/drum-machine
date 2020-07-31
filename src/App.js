import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import logo from "./logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import "./App.css";

const keysBanks = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [keys, setKeys] = useState(keysBanks);
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(false);
  const classes = useStyles();
  const [value, setValue] = useState(30);

  const togglePower = () => {
    setPower((prev) => !prev);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const playSound = ({ url, id }) => {
    let sound = new Audio(url);
    sound.play();
    setDisplay(id);
  };

  const handleKeyDown = (e, k) => {
    console.log(e.keyCode);
    const findKey = keysBanks.filter((k) => k.keyCode === e.keyCode);
    if (findKey) {
      let sound = new Audio(k.url);
      sound.play();
      setDisplay(k.id);
    }
  };
  return (
    <Container classNAme={classes.root} maxWidth="sm">
      <Typography component="div">
        <Box fontWeight={100} textAlign="center" fontSize="h3.fontSize" m={1}>
          Drum Machine
        </Box>
      </Typography>
      <Grid mt={4} alignItems="center" justify="center" container spacing={4}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <VolumeDown />
              </Grid>
              <Grid item xs>
                <Slider
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item>
                <VolumeUp />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {display ? display : "No Sound"}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={power}
                    onChange={togglePower}
                  />
                }
                label="Mute"
              />
            </FormGroup>
          </Paper>
        </Grid>
        {keys.map((k) => {
          return (
            <Grid item xs={4}>
              <Paper className={classes.paper}>
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
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
// return (
//   <div id="drum-machine">
//     <div
//       id="display"
//       onClick={() => refHook.current.play()}
//       style={{ textAlign: "center" }}
//     >
//       {keys.map((k) => (
//         <>
//           <p
//             style={{
//               border: "1px solid black",
//               padding: "5px",
//               display: "inline-block",
//               cursor: "pointer",
//             }}
//           >
//             {k}
//           </p>

//           <audio
//             ref={refHook}
//             src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
//           ></audio>
//         </>
//       ))}
//     </div>
//   </div>
// );
{
  /* <div style={{ border: "1px solid black", height: "100vh" }}>
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    cursor: "pointer",
    maxWidth: "70%",
    marginLeft: "15%",
  }}
>
  <h1>{display}</h1>
  {keys.map((k) => (
    <button style={{}} disabled={power} onClick={() => handleClick(k)}>
      {k.keyTrigger}
    </button>
  ))}
</div>
</div> */
}
