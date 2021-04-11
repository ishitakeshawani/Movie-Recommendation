import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  action: [
    { name: "URI: The Surgical Strike ", year: "2016" },
    { name: "Dishoom ", year: "2016" }
  ],

  comedy: [
    {
      name: "3 Idiots ",
      year: "2009"
    },
    {
      name: "Ajab Prem Ki Ghazab Kahani",
      year: "2009"
    }
  ],
  horror: [
    {
      name: "1920",
      year: "2008"
    },
    {
      name: "Bhoot",
      year: "2020"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Movie Recommendation </h1>
      <p style={{ fontSize: "smaller" }}> Checkout some of my favorite ones.</p>

      <div>
        {Object.keys(movies).map((genre) => (
          <button className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((movie) => (
            <li key={movie.name} className="card">
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.year} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
