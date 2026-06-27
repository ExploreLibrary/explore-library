import PageLayout from "../components/layouts/page-layout/page-layout";
import { useAuth } from "../contexts/auth-context";
import Loader from "../components/ui/loader/loader";
import ErrorMessage from "../components/ui/errorMessage/errorMessage";
import BooksGrid from "../components/ui/booksGrid/booksGrid";
import { useState, useEffect } from "react";
import * as BookService from "../services/books-service";

function UserProfilePage() {

    const { user } = useAuth();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    const getBookData = async (favoriteISBN) => {
        try{
         const book = await BookService.getBook(favoriteISBN); 
         return book;  
        } catch(error){
            return {};   
        }
    } 


  useEffect(() => {
    function fetchBooks() {
        const bookArray = [];

        user.favorites?.map((favoriteISBN) => {

            const book = getBookData(favoriteISBN);
            bookArray.push(book);
        })

        setBooks(bookArray);
    }
    fetchBooks();
  }, [books]);


    return(
    <PageLayout>
        <h2 className="u-mt-30 u-mb-30">
            User Info
        </h2>
          <p>
            <strong>Username: </strong> {user.name}
         </p>
        
         <p>
            <strong>Email: </strong> {user.email}
         </p>
        <h2 className="u-mt-30 u-mb-30">
            My Favorite Books
        </h2>

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

    )
}

export default UserProfilePage;
