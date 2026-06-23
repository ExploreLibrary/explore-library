import { useAuth } from "../../../contexts/auth-context";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <nav class="navbar__menu">
        <ul class="navbar__menu-list">
          <li>
            <Link to="/" class="navbar__menu-link">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <form className="navbar__form">
        <input
          className="navbar__form-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="navbar__form-submit" type="submit">
          Search
        </button>
      </form>
      <div className="navbar__login">
        {user && (
          <>
            <span className="navbar__login-username">{user.name}</span>
            <span className="navbar__login-logout">
              {"( "}
              <button
                className="navbar__login-logout-btn"
                onClick={() => logout()}
              >
                Logout
              </button>
              {" )"}
            </span>
          </>
        )}
        {!user && (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
