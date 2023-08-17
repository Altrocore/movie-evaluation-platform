import "./sidebar.css";

function Sidebar() {

  return (
    <div className="sidebar-wrapper">
        <h2>Media</h2>
        <ul className="links-list">
          <li>
            <a href="https://www.netflix.com/ca/">Netflix</a>
          </li>
          <li>
            <a href="https://www.disneyplus.com/en-ca">Disney +</a>
          </li>
          <li>
            <a href="https://www.apple.com/ca/apple-tv-plus/">Apple TV +</a>
          </li>
          <li>
            <a href="https://www.primevideo.com/">Amazon Prime</a>
          </li>
          <li>
            <a href="https://www.netflix.com/ca/">Netflix</a>
          </li>
        </ul>
        <ul className="links-list">
          <li>Action</li>
          <li>Comedy</li>
          <li>Drama</li>
          <li>Sci-fi</li>
          <li>Thriller</li>
          <li>Drama</li>
        </ul>
    </div>
  )
}

export default Sidebar;