import Navbar from "./components/ui/navbar.jsx";
import Gallery from "./components/ui/gallery.jsx";

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
      </div>
    </>
  );
}

export default App;
