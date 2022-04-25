import React from "react";
import "./Throughput.css";

const Throughput = () => {
  return (
    <div>
      <h1>5G Throughput Calculation</h1>
      <div>
        <p className="question">What is Throughput? </p>
        <p className="response">
          Maximum data rate (speed) that we get from 5G
        </p>
      </div>

      <div>
        <p className="question">How to calculate the Throughput? </p>
        <ul>
          <li>
            <p className="response">
              The simplest way to estimate the 5G throughput is to calculate the
              <span> Maximum Data Rate </span>
              carried by a<span> single Ressource Block </span>
              into one
              <span> Slot</span>.
            </p>
          </li>
          <li>
            <p className="response">
              If we know a single ressource block into one slot than we can
              calculete it for any bandwidth
            </p>
          </li>
          <li>
            <p className="response">
              1 Ressource block = 12 subCarriers (in the frequency domain)
              <br /> (A subcarrier is a secondary modulated signal frequency
              modulated into the main frequency (the carrier) to provide an
              additional channel of transmission.)
            </p>
          </li>
          <li>
            <p className="response">
              1 Slot = 14 Symbols subCarriers (in the Temporary domain)
            </p>
          </li>

          <li>
            <p className="response">
              Symbols of data = 14 - 1PDCCH(Control channel) -
              2DMRS(Demodulation Reference SIgnals) = 11
            </p>
          </li>

          <li>
            <p className="response">
              Total data ressource elements = Number of subCarriers * Symbols of
              data = 12*11=132
            </p>
          </li>

          <li>
            <p className="response">
              Maximum Bits Per symbol = 7.4063 (256 QAM)
            </p>
          </li>

          <li>
            <p className="response">
              Data carried in the Resource Block over one slot = Total data
              ressource elements * Maximum Bits Per symbol = 132*7.4063=977 Bits
              in 0.5ms
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Throughput;
