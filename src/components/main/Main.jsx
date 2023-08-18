import "./main.css";
import { useContext } from "react";
import FilmContext from "../../FilmContext";

function Main() {
  const { filteredFilms, getFilmById } = useContext(FilmContext);

  return (
    <main className="main">
      <h1>IMDb Top 100 Movies</h1>
      <div className="film-posters">
        {filteredFilms.map((film) => (
          <div key={film.id}
            onClick={() => getFilmById(film.id)}>
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

export default Main;
