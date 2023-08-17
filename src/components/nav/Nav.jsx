import "./nav.css";
import Chat from "../../images/chat-msg.png";
import Notification from "../../images/Notification.png";
import Settings from "../../images/Settings.png";
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