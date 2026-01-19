import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section>
      <h1>Reservations</h1>
      <p>Please fill out the form to reserve a table.</p>

      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
