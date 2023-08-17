import React, { useState, useEffect } from "react";
import "./main.css";
import axios from "axios"; // Import Axios
import { nanoid } from "nanoid"; // Import nanoid

function Main() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchAndSetFilms() {
      const options = {
        method: "GET",
        url: "https://imdb-top-100-movies1.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key": "d1656d653fmsh5fac9e5da602db3p14eba6jsnd94b70a220e2",
          "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        // Add nanoid-generated IDs to the films
        const filmsWithIds = response.data.map((film) => ({
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
      <h1>IMDb Top 100 Movies</h1>
      <div className="film-posters">
        {films.map((film) => (
          <div key={film.id}>
            <img
              src={film.image[0][1]} // Use the URL from the JSON for the first image
              alt={`${film.title} Poster`}
              className="film-poster"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
