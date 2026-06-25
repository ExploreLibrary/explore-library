import Book from "../book/book";
import "./booksGrid.css";

function BooksGrid({ books }) {
  return (
    <ul className="books-grid">
      {books &&
        books.map((book) => {
          const description = book.first_sentence
            ? book.first_sentence
            : "No description available";

          return (
            <li key={book.key} className="books-grid__item">
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
  );
}

export default BooksGrid;
