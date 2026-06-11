import Book from "./book.jsx";
import { useState, useEffect } from "react";
import * as BooksService from "../../services/trending-books-service.js";
import Loader from "./loader.jsx";
import ErrorMessage from "./errorMessage.jsx";

function Gallery() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const booksData = await BooksService.listTrendingBooks('harry%20potter',"*,availability",6);
        setBooks(booksData);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  return (
    <>
      {loading && <Loader/>}

      {(!loading && isError)
       && <ErrorMessage message="Error cargando trendingbooks"/>
      }

      {(!loading && !isError)
        && (
           <>
          <h2 style={{ paddingBlock: 20 }}>Libros en tendencia</h2>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              listStyleType: "none",
              padding: 0,
            }}
          >
            {books &&
              books.map((book) => {
                const description = book.first_sentence?.[0];

                return (
                  <li key={book.key} style={{ flex: "0 0 calc(16.66% - 9px)" }}>
                    <Book
                      title={book.title}
                      description={description}
                      imgURL={book.imgURL}
                    />
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </>
   )
}

export default Gallery;
