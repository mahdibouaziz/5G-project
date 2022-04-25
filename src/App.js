import { Container } from "@mui/material";

import "./App.css";
import Throughput from "./components/Throughput";
// https://www.youtube.com/watch?v=Jz5g5sIU81U&ab_channel=OurTechnologyPlanet
function App() {
  return (
    <div className="App">
      <Container>
        <Throughput />
      </Container>
    </div>
  );
}

export default App;
