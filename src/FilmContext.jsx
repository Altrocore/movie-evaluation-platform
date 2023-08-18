import {createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { nanoid } from "nanoid";

const FilmContext = createContext();

export const FilmContextWrapper = ({children}) => {
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsloading] = useState(true);

  const filterFilms = () => {
    films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

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
      setIsloading(false);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterFilmByGenre = (genre) => {
    return films.filter(film => 
      film.title.toLowerCase().includes(genre.toLowerCase)  
    )
  } 

  const getFilmById = async (id) => {
    console.log(id)
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies1.p.rapidapi.com/',
      params: {id: id},
      headers: {
        "X-RapidAPI-Key": "d1656d653fmsh5fac9e5da602db3p14eba6jsnd94b70a220e2",
        'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  } 

  return (
    <FilmContext.Provider
      value={{ 
        filteredFilms: filteredFilms,
        getFilmById: getFilmById,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        isLoading: isLoading
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