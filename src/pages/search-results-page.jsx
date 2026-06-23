import Book from "../components/ui/book/book";
import { useState, useEffect } from "react";
import * as BooksService from "../services/books-service.js";
import Loader from "../components/ui/loader/loader";
import ErrorMessage from "../components/ui/errorMessage/errorMessage";
import { useParams } from "react-router-dom";


function SearchResultsPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
    const { query } = useParams();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const booksData = await BooksService.searchBooks(
          `query:${query}`,
          18,
        );

        setBooks(booksData);
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, [query]);

  return (
    <>
      {loading && <Loader/>}

      {(!loading && isError)
       && <ErrorMessage message="Error cargando trendingbooks"/>
      }

      {(!loading && !isError)
        && (
           <>
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
                        isbn={book.isbn}
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

export default SearchResultsPage;
