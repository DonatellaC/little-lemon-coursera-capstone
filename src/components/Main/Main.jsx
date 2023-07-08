import { useReducer, useEffect } from "react";
import { fetchAPI } from "../../assets/utils/api";

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import BookingPage from "../../pages/BookingPage/BookingPage";
import Menu from "../../pages/Menu/Menu";
import ConfirmedBooking from "../../components/ConfirmedBooking/ConfirmedBooking";
import "./Main.css";
import AboutPage from "../../pages/AboutPage/AboutPage";

export const initializeTimes = async () => {
  const date = new Date();
  const availableTimes = await fetchAPI(date);
  return availableTimes;
};

export const updateTimes = async (selectedDate, selectedTime) => {
  const availableTimes = await fetchAPI(selectedDate);
  if (availableTimes.includes(selectedTime)) {
    return selectedTime;
  } else {
    return null;
  }
};

const Main = () => {
  const [availableTimes, dispatchTimes] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "UPDATE_TIMES":
          return action.payload;
        case "BOOKING_SUBMITTED":
          return state;
        default:
          return state;
      }
    },
    [],
    initializeTimes
  );

  useEffect(() => {
    const fetchAndUpdateTimes = async () => {
      const updatedTimes = await initializeTimes();
      dispatchTimes({ type: "UPDATE_TIMES", payload: updatedTimes });
    };
    fetchAndUpdateTimes();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchTimes={dispatchTimes}
            />
          }
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default Main;
