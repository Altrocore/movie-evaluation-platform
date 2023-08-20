import "./main.css";
import { useContext } from "react";
import FilmContext from "../../FilmContext";
import ChosenFilm from "../chosen-film/ChosenFilm";
import Pagination from "../pagination/Pagination";
import PaginationContext from "../../PaginationContext";

function Main() {
  const { filteredFilms, chosenFilm, choseFilm } = useContext(FilmContext);
  const { startIndex, endIndex } = useContext(PaginationContext);
  const currentData = filteredFilms.slice(startIndex, endIndex);

  const addFeedback = (film) => {
    if (!film.feedback) {
      film.feedback = []
    } 
  }

  return (
    <main className="main">
      {chosenFilm ? <ChosenFilm film={chosenFilm}></ChosenFilm> : 
      <>
        <h1>IMDb Top 100 Movies</h1>
        <div className="film-posters">
          {currentData.map((film) => {
            addFeedback(film);

            return (<div key={film.id}
              onClick={() => choseFilm(film._id)}>
              <img
                src={film.image[0][1]}
                alt={`${film.title} Poster`}
                className="film-poster"
              />
              <p>{film.rating}</p>
            </div>
          )})}
        </div>
        <Pagination></Pagination>
      </>
      }
    </main>
  );
}

export default Main;
