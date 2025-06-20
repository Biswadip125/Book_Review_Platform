import Header from "../components/Homepage/Header";
import BookPage from "../pages/BookPage/BookPage";
import HomePage from "../pages/Home/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ReviewFormPage from "../pages/ReviewFormPage/ReviewFormPage";
import LoginPage from "../pages/Login/LoginPage";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((store) => store.user.user);
  return (
    <Router>
      <div className="h-screen w-full flex flex-col">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/book/:id/add-review" element={<ReviewFormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
