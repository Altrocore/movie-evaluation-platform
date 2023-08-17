import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./main.css";
import PropTypes from "prop-types";


function Main({ searchedQuery }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
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
        const filmsWithIds = response.data.map((film) => ({
          ...film,
          id: nanoid(),
        }));
        setFilms(filmsWithIds);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchedQuery.toLowerCase())
  );

  return (
    <main className="main">
      <h1>IMDb Top 100 Movies</h1>
      <div className="film-posters">
        {filteredFilms.map((film) => (
          <div key={film.id}>
            <img
              src={film.image[0][1]}
              alt={`${film.title} Poster`}
              className="film-poster"
            />
            <p>{film.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

Main.propTypes = {
  searchedQuery: PropTypes.func.isRequired,
};

export default Main;
