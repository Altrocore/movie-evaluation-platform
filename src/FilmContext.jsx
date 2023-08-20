import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const FilmContext = createContext();
const API_BASE_URL = "http://localhost:3000";

export const FilmContextWrapper = ({ children }) => {
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [chosenFilm, setChosenFilm] = useState(null);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/films`);
      const filmsWithIds = response.data;
      setFilms(filmsWithIds);
      console.log(filmsWithIds)
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  const addFeedback = async (filmId, newFeedback, id) => {
    try {
      const film = films.find(film => film._id === filmId);

      const updatedFilms = films.map((film) =>
        film._id === filmId
          ? { ...film, feedback: [...film.feedback, newFeedback] }
          : film
      );

      console.log(updatedFilms)
      const response = await axios.put(
        `${API_BASE_URL}/films/${id}`,
        {...film, feedback: [...film.feedback, newFeedback]}
      );
        console.log(response.data)
      setFilms(updatedFilms);
  
      if (chosenFilm && chosenFilm._id === filmId) {
        setChosenFilm(updatedFilms.find(film => film._id === filmId));
      }
  
      return response.data;
    } catch (error) {
      console.error("Error creating feedback:", error);
    }
  };

  const filteredFilmsF = () => {
    return films.filter(
      (film) =>
        film?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredFilms = filteredFilmsF();

  const choseFilm = (id) => {
    setChosenFilm(films.find((el) => el._id === id));
  };

  return (
    <FilmContext.Provider
      value={{
        filteredFilms: filteredFilms,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        isLoading: isLoading,
        chosenFilm: chosenFilm,
        setChosenFilm: setChosenFilm,
        choseFilm: choseFilm,
        addFeedback: addFeedback,
        fetchFilms: fetchFilms
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};

FilmContextWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default FilmContext;