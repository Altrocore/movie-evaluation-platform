import "./search.css";

function SearchBar() {

  return (
    <section className="search-wrapper">
      <form  action="#" method="get" className="search-form">
        <fieldset className="search-fieldset">
          <legend>Discover your favorite movie</legend>
            <label htmlFor="search">
                <input type="search" name="search" id="search" placeholder="Search for movie or series" maxLength="200" />
            </label>
            <button type="submit" title="Search this website now">Submit</button>
        </fieldset>
    </form>≈
    </section>
  )
}

export default SearchBar;