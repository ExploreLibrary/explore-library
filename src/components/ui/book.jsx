import { Link } from "react-router-dom";

function Book({ title, description, imgURL, isbn }) {
  return (
    <div
      className="card"
      style={{
        height: 603,
      }}
    >
      <div
        style={{
          height: 344,
          width: "100%",
        }}
      >
        <img
          src={imgURL}
          className="card-img-top"
          alt={description}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <h5
          className="card-title"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
            overflow: "hidden",
          }}
        >
          {title}
        </h5>
        <p
          className="card-text"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "5",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
        <Link to={isbn ? `/book-detail/${isbn}` : '#'} className="btn btn-primary" aria-disabled={!isbn}>
          View book
        </Link>
      </div>
    </div>
  );
}

export default Book;
