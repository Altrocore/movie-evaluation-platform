import "./nav.css";
import Chat from "../../images/chat-msg.png"
import Notification from "../../images/Notification.png"
import Settings from "../../images/Settings.png"

function Nav() {

  return (
    <nav className="nav">
      <button>
        <img className="img" src={Chat} alt="Chat Message" />
      </button>
      <button>
        <img className="img" src={Notification} alt="Chat Message" />
      </button>
      <button>
        <img className="img" src={Settings} alt="Chat Message" />
      </button>
    </nav>
  )
}

export default Nav;