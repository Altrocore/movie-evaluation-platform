import React, { useState, useEffect } from "react";
import "./main.css";
import { getFilms } from "../../api";
import { nanoid } from "nanoid"; 

function Main() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchAndSetFilms() {
      try {
        const filmsData = await getFilms();
        const filmsWithIds = filmsData.slice(0, 6).map((film) => ({
          ...film,
          id: nanoid(),
        }));
        setFilms(filmsWithIds);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }

    fetchAndSetFilms();
  }, []);

  return (
    <main className="main">
      <h1>Films</h1>
      <div className="film-posters">
        {films.map((film) => (
          <img
            key={film.id}
            src={film.poster_url}
            alt={film.title}
            className="film-poster"
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
