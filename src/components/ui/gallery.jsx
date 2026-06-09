import Book from "./book.jsx";
import { useState, useEffect } from "react";
import * as BooksService from "../../services/trending-books-services.js";

function Gallery() {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const booksData = await BooksService.listTrendingBooks();
        console.log(booksData);

        setBooks(booksData);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchBooks();
  }, []);

  return (
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
              <li key={book.title} style={{ flex: "0 0 calc(16.66% - 9px)" }}>
                <Book title={book.title} description={description} />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Gallery;
