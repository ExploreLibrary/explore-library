import Navbar from "./components/ui/navbar.jsx";
import Gallery from "./components/ui/gallery.jsx";
import BooksController from "./components/books/books-controller/books-controller.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: 1400,
          marginInline: "auto",
        }}
      >
        <Gallery />
        <BooksController />
      </div>
    </>
  );
}

export default App;
