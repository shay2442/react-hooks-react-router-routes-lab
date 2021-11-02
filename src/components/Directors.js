import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
  <h2>Name: Scott Derrickson</h2>
    <div>Movies:
      <ul>
        <li>Doctor Strange</li>
        <li>Sinister</li>
        <li>The Exorcism of Emily Rose</li>
      </ul>
    </div>

    <h2>Name: Mike Mitchell</h2>
    <div>Movies: 
      <ul>
        <li>Trolls</li>
        <li>Alvin and the Chipmunks: Chipwrecked</li>
        <li>Sky High</li>
      </ul>
    </div>

    <h2>Name: Edward Zwick</h2>
    <div>Movies:
      <ul>
        <li>Jack Reacher: Never Go Back</li>
        <li>Blood Diamond</li>
        <li>The Siege</li>
      </ul>
    </div>
    
  </div>;
}

export default Directors;
