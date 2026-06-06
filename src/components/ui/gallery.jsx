import Book from "./book.jsx";

function Gallery() {
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
        <li style={{ flex: "0 0 calc(16.66% - 9px)" }}>
          <Book />
        </li>
        <li style={{ flex: "0 0 calc(16.66% - 9px)" }}>
          <Book />
        </li>
        <li style={{ flex: "0 0 calc(16.66% - 9px)" }}>
          <Book />
        </li>
        <li style={{ flex: "0 0 calc(16.66% - 9px)" }}>
          <Book />
        </li>
        <li style={{ flex: "0 0 calc(16.66% - 9px)" }}>
          <Book />
        </li>
        <li style={{ flex: "0 0 calc(16.66% - 9px)" }}>
          <Book />
        </li>
      </ul>
    </>
  );
}

export default Gallery;
