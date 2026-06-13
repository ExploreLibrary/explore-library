import { useEffect, useState } from "react";
//import MoviesList from "../movies-list/movies-list";
import * as BookService from "../../../services/trending-books-service.js";
import BookDetail from "../../ui/bookDetail.jsx";

function BooksController() {
  const [book, setBook] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchBook() {
      try {
        const bookData = await BookService.getBook();
        setBook(bookData[0]);

      } catch {
        //pendiente de revisar 
        setIsError(true);
      }
    }

    fetchBook();
  }, [book]);

  //if (isError) {
    //return <p>Error al cargar libro</p>;
  //}

  /*const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  } */

  const cleanTitle =
    typeof book.title === "object" ? book.title.value : book.title;

  const description =
    book.first_sentence && book.first_sentence.length > 0
      ? book.first_sentence[0]
      : "";

  const cover = book.cover_i;

  return (
    <>
    {isError && (<p>Error al cargar libro</p>)}
    {!isError && 
    <BookDetail title={cleanTitle} description={description} cover={cover} readers={book.currently_reading_count}/>
    }
    </>
  );
}

export default BooksController;
