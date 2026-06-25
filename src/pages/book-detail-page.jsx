import PageLayout from "../components/layouts/page-layout/page-layout";
import BookDetail from "../components/ui/bookDetail/bookDetail.jsx";
import ErrorMessage from "../components/ui/errorMessage/errorMessage.jsx";
import * as BooksService from "../services/books-service.js";
import { useEffect, useState } from "react";
import Loader from "../components/ui/loader/loader.jsx";
import { useParams } from "react-router-dom";

function BookDetailPage() {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { isbn } = useParams();

    useEffect(() => {
        async function fetchBook() {
          if (!isbn) {
            setIsError(true);
            setLoading(false);
            return;
          }
          try {
            const bookData = await BooksService.getBook(isbn);
            setBook(bookData);
          } catch {
            setIsError(true);
          } finally {
            setLoading(false);
          }
        }
        fetchBook();
      }, [isbn]);

  return (
    <PageLayout
    >
        {loading && <Loader/>}
        {!loading && isError && <ErrorMessage message="Error de carga"/>}
        {!loading && !isError && book && <BookDetail 
        title={book.title} 
        description={book.description}
        cover={book.cover}
        numberOfPages={book.numberOfPages}
        authors={book.authors}
        publishDate={book.publishDate}
        />
      }
      
    </PageLayout>
  );
}

export default BookDetailPage;