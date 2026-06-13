import { Route, Routes } from "react-router-dom";
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
