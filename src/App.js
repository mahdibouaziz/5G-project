import { Container, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Throughput from "./components/Throughput";
// https://www.youtube.com/watch?v=Jz5g5sIU81U&ab_channel=OurTechnologyPlanet
function App() {
  const [bandwidth, setBandwidth] = useState(0);
  const [subCarrier, setSubCarrier] = useState(0);
  const [mimo, setMimo] = useState(0);
  const [numberOfRessourceBlock, setNumberOfRessourceBlock] = useState(0);

  const dlSlots = 1600;

  return (
    <div className="App">
      <Container>
        <Throughput />

        <TextField
          className="text"
          fullWidth
          id="outlined-basic"
          label="5G channel Bandwidth (Mhz)"
          variant="outlined"
          type="number"
          value={bandwidth}
          onChange={(e) => setBandwidth(e.target.value)}
        />
        <TextField
          fullWidth
          className="text"
          id="outlined-basic"
          label="SubCarrier spacing (Khz)"
          variant="outlined"
          type="number"
          value={subCarrier}
          onChange={(e) => {
            setSubCarrier(e.target.value);

            setNumberOfRessourceBlock((bandwidth * 1000) / e.target.value / 12);
          }}
        />

        <p>
          Number of Ressource blocks available in this channel bandwidth =
          Bandwidth / SubCarrier spacing /12 (because we have 12 SubCarrier in
          an infinite source block) = {(bandwidth * 1000) / subCarrier / 12}
        </p>

        <p>But we have a guard band (2 prb top and 2 bottom):</p>
        <p>
          Number of PRBS=
          {Math.floor(numberOfRessourceBlock - 4)}
        </p>

        <TextField
          fullWidth
          className="text"
          id="outlined-basic"
          label="Number of MIMO layers (0-max4)"
          variant="outlined"
          value={mimo}
          onChange={(e) => setMimo(e.target.value)}
        />
        <p>
          Maximum Throughput for this configuration is:
          {(977 * Math.floor(numberOfRessourceBlock - 4) * dlSlots * mimo) /
            1000 /
            1000}
        </p>
      </Container>
    </div>
  );
}

export default App;
