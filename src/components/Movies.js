import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    
      <h2>Name: Doctor Strange</h2>
      <div>Time: 115</div>
      <div>Genres:
        <ul>
          <li>Action</li>
          <li>Adventure</li>
          <li>Fantasy</li>
        </ul>
      </div>

      <h2>Name: Trolls</h2>
      <div>Time: 92</div>
      <div>Genres:
        <ul>
          <li>Animation</li>
          <li>Adventure</li>
          <li>Comedy</li>
          <li>Family</li>
          <li>Fantasy</li>
        </ul>
      </div>

      <h2>Name: Jack Reacher: Never Go Back</h2>
      <div>Time: 118</div>
      <div>Genres:</div>
      <ul>
        <li>Action</li>
        <li>Adventure</li>
        <li>Crime</li>
        <li>Mystery</li>
        <li>Thriller</li>
      </ul>
  </div>;
}

export default Movies;
