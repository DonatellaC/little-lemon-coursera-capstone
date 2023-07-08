import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";
import { updateTimes } from "../Main/Main";

describe("Renders the BookingForm component", () => {
  test("Should show the submit button", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );
    const submitButton = screen.getByText("Book Now");
    expect(submitButton).to.exist;
  });

  test("Renders the BookingForm heading", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", { name: "Booking Form" });
    expect(heading).to.exist;
  });

  test("updateTimes should return the same value as provided in the state", async () => {
    const selectedTime = "17:00";
    const selectedDate = new Date("2023-07-07");
    const updatedTime = await updateTimes(selectedDate, selectedTime);
    expect(updatedTime).toBe(selectedTime);
  });
});
