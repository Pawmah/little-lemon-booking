import { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ HTML5 validation helpers
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  // ✅ React validation: disable submit unless ALL fields are valid
  useEffect(() => {
    const dateValid = resDate !== "";
    const timeValid = resTime !== "";
    const guestsValid = guests >= 1 && guests <= 10;
    const occasionValid = occasion !== "";

    setIsFormValid(dateValid && timeValid && guestsValid && occasionValid);
  }, [resDate, resTime, guests, occasion]);

  function handleSubmit(e) {
    e.preventDefault();

    // Extra safety: stop submit if invalid
    if (!isFormValid) return;

    submitForm({
      date: resDate,
      time: resTime,
      guests: guests,
      occasion: occasion,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
    >
      <h2>Reserve a Table</h2>

      {/* ✅ Date (HTML5 validation: required + can't pick past dates) */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        required
        min={today}
        onChange={(e) => {
          setResDate(e.target.value);
          dispatch({ type: "dateChange", date: e.target.value });
        }}
      />

      {/* ✅ Time (HTML5 validation: required select) */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        required
        onChange={(e) => setResTime(e.target.value)}
      >
        <option value="">Select a time</option>

        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      {/* ✅ Guests (HTML5 validation: min/max) */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        required
        min="1"
        max="10"
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      {/* ✅ Occasion (required select) */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* ✅ React validation: disabled until valid */}
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

