import Book from "../book/book";
import { useState, useEffect } from "react";
import * as BooksService from "../../../services/books-service.js";
import Loader from "../loader/loader.jsx";
import ErrorMessage from "../errorMessage/errorMessage.jsx";
import "./gallery.css";

function Gallery({ subject, title }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const booksData = await BooksService.listTrendingBooks(
          `subject:${subject}`,
          "title,author_name,cover_i,isbn,first_sentence,key",
          6,
        );

        setBooks(booksData);
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, [subject]);

  return (
    <>
      {loading && <Loader />}

      {!loading && isError && (
        <ErrorMessage message="Error cargando trendingbooks" />
      )}

      {!loading && !isError && (
        <div className="gallery">
          <h2 className="gallery__title">{title}</h2>
          <ul className="gallery__list">
            {books &&
              books.map((book) => {
                const description = book.first_sentence?.[0];

                return (
                  <li key={book.key} className="gallery__item">
                    <Book
                      title={book.title}
                      description={description}
                      imgURL={book.imgURL}
                      isbn={book.isbn}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Gallery;
