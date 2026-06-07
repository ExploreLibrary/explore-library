import Book from "./book.jsx";
import { useState, useEffect } from "react";
import * as BooksService from "../../services/trending-books-services.js";

function Gallery() {

  // const [ books, setBooks ] = useState([]);
  let [titles, setTitles] = useState([]);

useEffect(() => {
    async function fetchBooks() {
      try {
        const booksData = await BooksService.listTrendingBooks();
        console.log(booksData);
        
        const titlesArray = [];

        booksData.forEach((book) => {
          titlesArray.push(book.title);
        })
        console.log('titles:',titlesArray);
        //setBooks(books);
        setTitles(titlesArray);
        console.log('titles:',titles);
      }
      catch(error){
        console.log(error);
      }
      
  }
  fetchBooks();
},[]);  


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
        {titles && 
        titles.map((title) => (

              <li key={title} style={{ flex: "0 0 calc(16.66% - 9px)" }}>
               <Book title={title} />
              </li>
          )
        )}
      </ul>
    </>
  );
}

export default Gallery;
