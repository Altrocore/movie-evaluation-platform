import "./nav.css";
import {
  NavLink,
} from 'react-router-dom';

function Nav() {

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) =>
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