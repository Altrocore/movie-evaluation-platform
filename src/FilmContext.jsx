import {createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { nanoid } from "nanoid";

const FilmContext = createContext();
const API_BASE_URL = "http://localhost:3000/films/";

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
      url: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.request(options);
      const filmsWithIds = response.data.map((film) => ({
        ...film,
        id: nanoid(),
        feedback: []
      }));
      setFilms(filmsWithIds);
      setIsLoading(false);
      console.log(filmsWithIds)
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  }
  
  const addFeedback = (id) => {
    const updatedFilms = films.map(el => {
      if (el.id === id) {
        return el;
      }
    })
    fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFilms),
    })
      .then((response) => response.json())
      .then((data) => {
        setChosenFilm(
          {...chosenFilm, 
            feedback: data
          });
      })
      .catch((error) => console.error('Error creating post:', error));
  };
  // const fetchFilms = async () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://imdb-top-100-movies1.p.rapidapi.com/",
  //     headers: {
  //       "X-RapidAPI-Key": "d1656d653fmsh5fac9e5da602db3p14eba6jsnd94b70a220e2",
  //       "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     const filmsWithIds = response.data.map((film) => ({
  //       ...film,
  //       id: nanoid(),
  //     }));
  //     setFilms(filmsWithIds);
  //     console.log(filmsWithIds)
  //     if (filmsWithIds.length > 0){
  //     const res = await axios({
  //       method: 'post',
  //       url: API_BASE_URL,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       data: filmsWithIds
  //     });
  //     console.log(filmsWithIds)}
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching films:", error);
  //   }
  // };

  const filteredFilmsF =  () => {
    console.log(films)
    if (films != null || films != undefined) {
      return films.filter((film) => film?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    )}
  };

  const filteredFilms = filteredFilmsF();

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
        choseFilm: choseFilm,
        addFeedback: addFeedback
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