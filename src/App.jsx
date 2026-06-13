import Navbar from "./components/ui/navbar.jsx";
import Gallery from "./components/ui/gallery.jsx";
import BooksController from "./components/books/books-controller/books-controller.jsx";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route index element ={<HomePage/>} />
        {/*<Route path="/book-detail" element ={<BookDetailPage/>} />*/}
      </Routes>
    </>
  );
}

export default App;
