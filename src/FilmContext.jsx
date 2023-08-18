import {createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { nanoid } from "nanoid";

const FilmContext = createContext();

export const FilmContextWrapper = ({children}) => {
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [chosenFilm, setChosenFilm] = useState(null);

  useEffect(() => {
    fetchFilms();
  }, []);

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
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  let filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const choseFilm = (id) => {
    setChosenFilm(films.find(el => el._id === id))
    console.log(chosenFilm)
  }

  return (
    <FilmContext.Provider
      value={{ 
        filteredFilms: filteredFilms,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        isLoading: isLoading,
        chosenFilm: chosenFilm,
        setChosenFilm: setChosenFilm,
        choseFilm: choseFilm
      }}
    >
      {children}
    </FilmContext.Provider>
  );
}

FilmContextWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default FilmContext;