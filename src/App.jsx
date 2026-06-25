import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import BookDetailPage from "./pages/book-detail-page.jsx";
import PrivateRoute from "./guards/private-route.jsx";
import LoginPage from "./pages/login-page.jsx";
import RegisterPage from "./pages/register-page.jsx";
import SearchResultsPage from "./pages/search-results-page.jsx";
import UserProfilePage from "./pages/user-profile-page.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route index element ={<HomePage/>} />
        <Route path="/login" element ={<LoginPage/>} />
        <Route path="/register" element ={<RegisterPage/>} />
        <Route path="/profile" element={ <PrivateRoute> <UserProfilePage/> </PrivateRoute>} />
        <Route path="/book-detail/:isbn" element = {<BookDetailPage/>} />
        <Route path="/search/:query" element = {<SearchResultsPage/>} />
      </Routes>
    </>
  );
}

export default App;
