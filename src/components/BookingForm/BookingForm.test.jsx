import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../Main/Main";

describe("Renders the BookingForm component", () => {
  test("Should show the submit button", () => {
    render(<BookingForm />);
    const submitButton = screen.getByText("Book Now");
    expect(submitButton).to.exist;
  });

  test("Renders the BookingForm heading", async () => {
    const availableTimes = await initializeTimes();
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByRole("heading", {
      name: "Booking Form",
    });
    expect(headingElement).to.exist;
  });

  test("updateTimes should return the same value as provided in the state", async () => {
    const selectedTime = "17:00";
    const selectedDate = new Date("2023-07-07");
    const updatedTime = await updateTimes(selectedDate, selectedTime);
    expect(updatedTime).toBe(selectedTime);
  });
});
