import { useAuth } from "../../../contexts/auth-context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import "./navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  const handleSearchButtonClick = function(){
    const searchWords = document.getElementById("search-words-input")?.value
    navigate(`/search/${searchWords}`); //cuando se clica obtener el valor de input y navegamos a la pagina /search/"valor de input"
  }

  return (
    <div className="navbar">
      <nav className="navbar__menu">
        <ul className="navbar__menu-list">
          <li>
            <Link to="/" className="navbar__menu-link">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <form className="navbar__form">
        <input
          className="navbar__form-input"
          id="search-words-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="navbar__form-submit" type="button" onClick={handleSearchButtonClick}>
          Search
        </button>
      </form>
      <div className="navbar__login">
        {user && (
          <>
            <span className="navbar__login-username"><Link className="navbar__login-username-link" to="/profile">{user.name}</Link></span>
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
            <Link to="/login" className="navbar__login-login-link">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
