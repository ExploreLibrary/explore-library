import { Link } from "react-router-dom";
import "./book.css";

function Book({ title, description, imgURL, isbn }) {
  return (
    <div className="book">
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
