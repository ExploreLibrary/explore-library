function Book({ title, description }) {
  return (
    <div
      className="card"
      style={{
        height: 603,
      }}
    >
      <img
        src="https://covers.openlibrary.org/b/id/15143479-M.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
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
        <a href="#" className="btn btn-primary">
          View book
        </a>
      </div>
    </div>
  );
}

export default Book;
