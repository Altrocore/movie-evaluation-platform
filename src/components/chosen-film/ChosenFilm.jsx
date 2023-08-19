import "./chosen-film.css";
import Star from "../../images/Star.png";
import Arrowback from "../../images/Arrowback.svg";
import FilmContext from "../../FilmContext";
import { useContext } from "react";
import Feedback from "../feedback/Feedback";

function ChosenFilm({film}) {
  console.log(film)
  const {setSearchQuery, setChosenFilm} = useContext(FilmContext);
  const handleSearch = () => {
    setSearchQuery("");
    console.log("zalupa")
    setChosenFilm(null);
  };
  const backgroundStyle = {
    backgroundImage: `url(${film.image[2][1]})`,
  };
  const creators = film.director.map(el => `${el}`);
  const genres = film.genre.map(el => ` ${el}`).join(" ,");
  const writers = film.writers.map(el => ` ${el}`).join(" ,");

  return (
    <div key={film.id} className="chosen-film-wrapper">
      <div style={backgroundStyle} className="background"></div>
      <button onClick={handleSearch} className="arrow-back">
        <img src={Arrowback} alt="" />
      </button>
      <div className="img-info-container"> 
        <div className="img-wrapper">
          <img
            src={film.image[0][1]}
            alt={`${film.title} Poster`}
            className="chosen-film-poster"
            />
        </div>
        <div className="info-wrapper">
          <h2>{film.title} ({film.year})</h2>
          <p className="rate"> <span> Rate: &nbsp;</span> <img src={Star} alt="star icon" /> &nbsp; {film.rating}</p>
          <p> <span>Creators:</span> {creators}</p>
          <p> <span>Writers:</span> {writers}</p>
          <p> <span>Genres:</span> {genres}</p>
        </div>
      </div>
      <div className="description-container">
        <p>{film.description}</p>
      </div>
      <Feedback film={film}></Feedback>
    </div>
  )
}

export default ChosenFilm;