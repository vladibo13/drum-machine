import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

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

function App() {
  const [keys, setKeys] = useState(keysBanks);
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(false);
  const refHook = useRef(null);
  const handleClick = ({ url, id }) => {
    let sound = new Audio(url);
    sound.play();
    setDisplay(id);
  };
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          cursor: "pointer",
        }}
      >
        <h1>{display}</h1>
        {keys.map((k) => (
          <button disabled={power} onClick={() => handleClick(k)}>
            {k.keyTrigger}
          </button>
        ))}
      </div>
    </div>
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
