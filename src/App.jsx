import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import BookDetailPage from "./pages/book-detail-page.jsx";
import PrivateRoute from "./guards/private-route.jsx";
import LoginPage from "./pages/login-page.jsx";
import RegisterPage from "./pages/register-page.jsx";
import SearchResultsPage from "./pages/search-results-page.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route index element ={<HomePage/>} />
        <Route path="/login" element ={<LoginPage/>} />
         <Route path="/register" element ={<RegisterPage/>} />
        <Route path="/book-detail/:isbn" element =
        {<PrivateRoute> 
             <BookDetailPage/>
          </PrivateRoute>} />
          <Route path="/search/:query" element = {
            <SearchResultsPage/>
          }
          />
      </Routes>
    </>
  );
}

export default App;
