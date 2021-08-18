import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  action: [
    {
      name: "Godzilla: King of the Monsters",
      year: "2019",
      rate: "13+",
      desc:
        "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans."
    },
    {
      name: "Extraction",
      year: "2020",
      rate: "18+",
      desc:
        "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son."
    },
    {
      name: "John Wick",
      year: "2014",
      rate: "18+",
      desc:
        "When a gangster's son steals his car and kills his dog, fearless ex-hit man John Wick takes on the entire mob to get his revenge."
    }
  ],

  SciFiFantasy: [
    {
      name: "Jurassic World",
      year: "2015",
      rate: "16+",
      desc:
        "The owners of a dinosaur theme park try to attract tourists with a thrilling new exhibit, but a deadly giant breaks loose and terrorizes the island."
    },
    {
      name: "Interstellar",
      year: "2014",
      rate: "13+",
      desc:
        "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet."
    },
    {
      name: "Jumanji: Welcome to the Jungle",
      year: "2017",
      rate: "13+",
      desc:
        "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars."
    }
  ],
  horror: [
    {
      name: "Alive",
      year: "2020",
      rate: "16+",
      desc:
        "As a grisly virus rampages a city, a lone man stays locked inside his apartment, digitally cut off from seeking help and desperate to find a way out."
    },
    {
      name: "Roohi",
      year: "2021",
      rate: "16+",
      desc:
        "Hired to kidnap a bride, two bumbling pals face a wacky predicament when one falls for their abductee and the other, for the spirit possessing her."
    },
    {
      name: "Annabelle Comes Home",
      year: "2019",
      rate: "16+",
      desc:
        "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter."
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
      <h1 style={{ color: "#e50914" }}> Movie Recommendation </h1>
      <p style={{ fontSize: "18px", color: "#e3e3e3" }}>
        {" "}
        Checkout some of my favorite ones.Movies move us like nothing else can,
        whether they’re scary, funny, dramatic, romantic or anywhere in-between.
        So many titles, so much to experience.
      </p>

      <div>
        {Object.keys(movies).map((genre) => (
          <button className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ color: "white" }} />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((movie) => (
            <li key={movie.name} className="card">
              {" "}
              <div style={{ fontSize: "larger", color: "#e50914" }}>
                {" "}
                {movie.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", display: "inline-block" }}>
                {" "}
                {movie.year}{" "}
              </div>{" "}
              &nbsp;
              <div
                style={{
                  fontSize: "smaller",
                  display: "inline-block",
                  border: "1px solid white"
                }}
              >
                {" "}
                {movie.rate}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  padding: "4px",
                  fontSize: "15px"
                }}
              >
                {" "}
                {movie.desc}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
