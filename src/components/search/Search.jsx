import React, { useState } from "react";
import PropTypes from "prop-types";
import "./search.css";

function SearchBar({ setSearchedQuery }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchedQuery(query);
  };

  return (
    <section className="search-wrapper">
      <form className="search-form">
        <fieldset className="search-fieldset">
          <legend>Discover your favorite movie</legend>
          <label htmlFor="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for movie or series"
              maxLength="200"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
            />
          </label>
        </fieldset>
      </form>
    </section>
  );
}

SearchBar.propTypes = {
  setSearchedQuery: PropTypes.func.isRequired,
};

export default SearchBar;
