import { useAuth } from "../../../contexts/auth-context";
import { Link, useSearchParams } from "react-router-dom";
import "./book.css";
import FavoriteIconEmpty from "../../../assets/images/favorites/estrella-vacia.png";
import FavoriteIconFull from "../../../assets/images/favorites/estrella-rellena.png";
import { useState } from "react";


function Book({ title, description, imgURL, isbn }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { user, updateFavorites } = useAuth();

  const handleToggleBookFavorite = function() {
    const favoriteBooks = user.favorites;
      user.favorites.push(isbn);
      console.log(user);
      if (user?.favorites?.includes(isbn)){
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
      updateFavorites(user);
  }

  return (
    <div className="book">
      <button className="book__make-favorite" onClick={handleToggleBookFavorite}>
        {!isFavorite && (<img className="book__make-favorite-empty" src={FavoriteIconEmpty} alt="favorite star empty"/>)}
        {isFavorite && (<img className="book__make-favorite-full" src={FavoriteIconFull} alt="favorite star full"/> )}
      </button>
      <div className="book__image-cnt">
        <img
          src={imgURL}
          className="book__image"
          alt={description}
        />
      </div>
      <div
        className="book__body"
      >
        <h5
          className="book__title"
        >
          {title}
        </h5>
        <p
          className="book__description"
        >
          {description}
        </p>
        <Link
          to={isbn ? `/book-detail/${isbn}` : "#"}
          className="book__link"
          aria-disabled={!isbn}
        >
          View book
        </Link>
      </div>
    </div>
  );
}

export default Book;
