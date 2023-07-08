import BookingForm from "../../components/BookingForm/BookingForm";

const BookingPage = ({ availableTimes, dispatchTimes }) => {
  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatchTimes={dispatchTimes}
    />
  );
};

export default BookingPage;
