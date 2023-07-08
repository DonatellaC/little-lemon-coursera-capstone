import { useState, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import BookingPage from "../../pages/BookingPage/BookingPage";
import "./Main.css";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (selectedDate, state) => {
  return {
    ...state,
    selectedDate: {
      ...state.selectedDate,
      selectedDate: selectedDate,
    },
  };
};

const Main = () => {
  const [availableTimes, dispatchTimes] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "UPDATE_TIMES":
          return updateTimes(action.payload, state);
        default:
          return state;
      }
    },
    null,
    initializeTimes
  );

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
