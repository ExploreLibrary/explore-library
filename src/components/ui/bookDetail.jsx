function BookDetail({ title, description, cover, numberOfPages, authors, publishDate }) {
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

      {cover ? (
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
      ) : (
        <p>Portada no disponible</p>
      )}

      <p>{description}</p>

      {authors ? <p><strong>Autor(es):</strong> {authors}</p> : null}
      {publishDate ? <p><strong>Publicado:</strong> {publishDate}</p> : null}
      {numberOfPages ? <p>Number of Pages: {numberOfPages}</p> : null}
    </div>
  );
}

export default BookDetail;
