import { useState, useEffect } from "react";
import * as BooksService from "../services/books-service.js";
import Loader from "../components/ui/loader/loader";
import ErrorMessage from "../components/ui/errorMessage/errorMessage";
import { useParams } from "react-router-dom";
import PageLayout from "../components/layouts/page-layout/page-layout.jsx";
import BooksGrid from "../components/ui/booksGrid/booksGrid.jsx";


function SearchResultsPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
    const { query } = useParams();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const booksData = await BooksService.searchBooks(
          query,
          "title,author_name,cover_i,isbn,first_sentence,key",
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
    <PageLayout>
      <h2 className="u-mt-25">Book results including "{query}"</h2>
      
        {loading && <Loader/>}

        {(!loading && isError)
        && <ErrorMessage message="Error cargando libros"/>
        }

        {(!loading && !isError)
          && (
            <>
            
              <BooksGrid books={books} />
            
          </>
        )}

      </PageLayout>
    </>
   )
}

export default SearchResultsPage;
