import PageLayout from "../components/layouts/page-layout/page-layout";
import BookDetail from "../components/ui/bookDetail";
import ErrorMessage from "../components/ui/errorMessage.jsx";
import * as BooksService from "../services/trending-books-service.js";
import { useEffect, useState } from "react";
import Loader from "../components/ui/loader.jsx";

function BookDetailPage() {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchBook() {
          try {
            const bookData = await BooksService.getBook ("8702113996");
           setBook(bookData);
          } catch {
            setIsError(true);
          } finally {
            setLoading(false);
          }
        }
        fetchBook();
      }, []);

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
        />
      }
      
    </PageLayout>
  );
}

export default BookDetailPage;