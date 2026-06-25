import Book from "../book/book";
import "./booksGrid.css";
import FeedbackMessage from "../feedbackMessage/feedbackMessage.jsx";

function BooksGrid({ books = [] }) {
  if (!books || books.length === 0) {
    return <FeedbackMessage message="No results found" />;
  }

  return (
    <ul className="books-grid">
      {books.map((book) => {
        const description = book.first_sentence
          ? book.first_sentence
          : "No description available";

        return (
          <li
            key={book.key ?? book.isbn ?? book.title}
            className="books-grid__item"
          >
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
