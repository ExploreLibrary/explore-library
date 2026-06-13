function BookDetail({ title, description, cover, numberOfPages }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        overflow: "hidden",
        background: "#eee",
        padding: 40,
        marginBlock: 80,
      }}
    >
      <h1>{title}</h1>

      <p>
        <img
          src={`https://covers.openlibrary.org/b/id/${cover}.jpg`}
          width="100%"
          height="auto"
          style={{
            maxWidth: 300,
          }}
        />
      </p>

      <p>{description}</p>

      <p>Number of Pages: {numberOfPages} </p>
    </div>
  );
}

export default BookDetail;
