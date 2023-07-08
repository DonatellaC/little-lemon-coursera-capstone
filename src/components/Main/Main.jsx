import { useReducer, useEffect } from "react";
import { fetchAPI } from "../../assets/utils/api";

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import BookingPage from "../../pages/BookingPage/BookingPage";
import "./Main.css";

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
      </Routes>
    </>
  );
};

export default Main;
