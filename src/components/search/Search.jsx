import PropTypes from "prop-types";
import "./search.css";
import { useContext } from "react";
import FilmContext from "../../FilmContext";

function SearchBar() {
  const {setSearchQuery, searchQuery} = useContext(FilmContext);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <section className="search-wrapper">
      <form className="search-form">
        <fieldset className="search-fieldset">
          <legend>Discover your favorite movie</legend>
          <input
            type="search"
            name="search"
            className="search"
            placeholder="Search for movie or series"
            maxLength="200"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </fieldset>
      </form>
    </section>
  );
}

export default SearchBar;
