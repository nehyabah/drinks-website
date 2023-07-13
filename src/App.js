import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage/Homepage.component";
import MenuPage from "./pages/MenuPage/MenuPage.component";
import Form from "./components/Forms/Form";
import ReservationPage from "./pages/Reservationage/ReservationPage";
import BookingPage from "./pages/BookingPage/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />

        <Route path="/form" element={<Form />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
