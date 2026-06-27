import { useAuth } from "../../../contexts/auth-context";
import { Link, useSearchParams } from "react-router-dom";
import "./book.css";
import FavoriteIconEmpty from "../../../assets/images/favorites/estrella-vacia.png";
import FavoriteIconFull from "../../../assets/images/favorites/estrella-rellena.png";
import { useEffect, useState } from "react";

function Book({ title, description, imgURL, isbn }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { user, updateFavorites } = useAuth();

  useEffect(() => {
    if (Array.isArray(user?.favorites)) {
      setIsFavorite(user.favorites.includes(isbn));
    }
  }, [user?.favorites, isbn]);

  const handleToggleBookFavorite = function() {
    if (!user) return;

    const currentFavorites = Array.isArray(user.favorites) ? user.favorites : [];
    const alreadyFavorite = currentFavorites.includes(isbn);
    const nextFavorites = alreadyFavorite
      ? currentFavorites.filter((favoriteIsbn) => favoriteIsbn !== isbn)
      : [...currentFavorites, isbn];

    const updatedUser = {
      ...user,
      favorites: nextFavorites
    };

    setIsFavorite(!alreadyFavorite);
    updateFavorites(updatedUser);
  }

  return (
    <div className="book">
      {user && (<button className="book__make-favorite" onClick={handleToggleBookFavorite}>
        {!isFavorite && (<img className="book__make-favorite-empty" src={FavoriteIconEmpty} alt="favorite star empty"/>)}
        {isFavorite && (<img className="book__make-favorite-full" src={FavoriteIconFull} alt="favorite star full"/> )}
      </button>)}
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
