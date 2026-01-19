import { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ Today's date for min attribute
  const today = new Date().toISOString().split("T")[0];

  // ✅ React validation (enable/disable submit button)
  useEffect(() => {
    const validDate = date !== "";
    const validTime = time !== "";
    const validGuests = guests >= 1 && guests <= 10;
    const validOccasion = occasion !== "";

    setIsFormValid(validDate && validTime && validGuests && validOccasion);
  }, [date, time, guests, occasion]);

  function handleSubmit(e) {
    e.preventDefault();

    submitForm({
      date: date,
      time: time,
      guests: Number(guests),
      occasion: occasion,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      aria-label="Table reservation form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        required
        min={today}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "dateChange", date: e.target.value });
        }}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        required
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid}
        aria-label="On Click"
      />
    </form>
  );
}

export default BookingForm;

