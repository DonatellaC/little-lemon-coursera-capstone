import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatchTimes }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const booking = {
      selectedDate,
      selectedTime,
      guestNumber,
      occasion,
      name,
      email,
      phone,
    };

    dispatchTimes({ type: "BOOKING_SUBMITTED", payload: booking });
    navigate("/booking-confirmed", { state: { booking } });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setSelectedTime(selectedTime);
  };

  const isFormValid = () => {
    if (
      selectedDate.trim() === "" ||
      selectedTime.trim() === "" ||
      guestNumber.trim() === "" ||
      occasion.trim() === "" ||
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === ""
    ) {
      return false;
    }

    return true;
  };

  return (
    <>
      <h2 role="heading" aria-label="Booking Form">
        Booking Form
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={handleTimeChange}
          required
        >
          <option value="">Select a time</option>
          {Array.isArray(availableTimes) &&
            availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestNumber}
          onChange={(e) => setGuestNumber(e.target.value)}
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input type="submit" value="Book Now" />
      </form>
    </>
  );
};

export default BookingForm;
