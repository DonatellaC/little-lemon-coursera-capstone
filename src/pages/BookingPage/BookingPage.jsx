import BookingForm from "../../components/BookingForm/BookingForm";

const BookingPage = ({ availableTimes, dispatchTimes }) => {
  return (
    <>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
      />
    </>
  );
};

export default BookingPage;
