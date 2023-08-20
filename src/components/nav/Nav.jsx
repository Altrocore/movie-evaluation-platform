import "./nav.css";
import {
  NavLink,
} from 'react-router-dom';
import FilmContext from "../../FilmContext";
import { useContext } from "react";

function Nav() {
  const {setSearchQuery, setChosenFilm} = useContext(FilmContext);

  const handleSearch = () => {
    setSearchQuery("");
    setChosenFilm(null);
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink onClick={handleSearch} to="/" className={({ isActive }) =>
            isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "active" : ""}>
            About us
          </NavLink>
        </li>
      </ul>
      
    </nav>
  )
}

export default Nav;