import './bookDetail.css';

function BookDetail({ title, description, cover, numberOfPages, authors, publishDate }) {
  return (
    <div className='book-detail'>
      <h1>{title}</h1>

      {cover ? (
        <div className='book-detail__img-cnt'>
          <img
            src={`https://covers.openlibrary.org/b/id/${cover}.jpg`}
            width="100%"
            height="auto"
            className='book-detail__img'
          />
        </div>
      ) : (
        <p className='book-detail__img-missing'>Portada no disponible</p>
      )}

      <p>{description}</p>

      {authors ? <p><strong>Autor(es):</strong> {authors}</p> : null}
      {publishDate ? <p><strong>Publicado:</strong> {publishDate}</p> : null}
      {numberOfPages ? <p>Number of Pages: {numberOfPages}</p> : null}
    </div>
  );
}

export default BookDetail;
