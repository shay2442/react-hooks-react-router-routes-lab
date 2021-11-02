import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>

    <div>Name: Benedict Cumberbatch</div>
    <div>Movies:
      <ul>
        <li>Doctor Strange</li>
        <li>The Imitation Game</li>
        <li>Black Mass</li>
      </ul>
    </div>

    <h2>Name: Justin Timberlake</h2>
    <div>
      <ul>
        <li>Trolls</li>
        <li>Friends with Benefits</li>
        <li>The Social Network</li>
      </ul>
    </div>

    <h2>Name: Anna Kendrick</h2>
    <div>Movies:
      <ul>
        <li>Trolls</li>
        <li>Pitch Perfect</li>
        <li>Into the Wild</li>
      </ul>
    </div>

    <h2>Name: Tom Cruise</h2>
    <div>Movies:
      <ul>
        <li>Jack Reacher: Never Go Back</li>
        <li>Mission Impossible</li>
        <li>War of the Worlds</li>
      </ul>

    </div>
  </div>;
}

export default Actors;
