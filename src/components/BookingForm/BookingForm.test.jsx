import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../Main/Main";

describe("Renders the BookingForm heading", () => {
  test("Should show the submit button", () => {
    const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    render(<BookingForm availableTimes={availableTimes} />);
    const submitButton = screen.getByRole("button", {
      name: "Book Now",
    });
    expect(submitButton).to.exist;
  });
  test("Renders the BookingForm heading", () => {
    const availableTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).to.exist;
  });
  test("initializeTimes should return the correct value", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });
  test("updateTimes should return the same value as provided in the state", () => {
    const initialState = {
      availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      selectedDate: {
        availableTimes: ["10:00", "11:00", "12:00"],
        selectedDate: "2022-01-01",
      },
    };
    const newState = updateTimes(
      initialState.selectedDate.selectedDate,
      initialState
    );
    expect(newState).to.deep.equal(initialState);
  });
});
