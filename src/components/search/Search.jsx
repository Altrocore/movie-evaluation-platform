import { useState } from "react";
import "./search.css";

function SearchBar() {

  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <section className="search-wrapper">
      <form  action="#" method="get" className="search-form">
        <fieldset className="search-fieldset">
          <legend>Discover your favorite movie</legend>
            <label htmlFor="search">
                <input value={inputText} onChange={handleInputChange} type="text" className="search" placeholder="Search for movie or series" maxLength="200" />
            </label>
            <button type="submit" className="search-btn"></button>
        </fieldset>
      </form>≈
    </section>
  )
}

export default SearchBar;