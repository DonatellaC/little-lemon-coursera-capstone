import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import BookingPage from "../../pages/BookingPage/BookingPage";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
};

export default Main;
