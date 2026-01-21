import { useEffect, useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ HTML5 "min" needs YYYY-MM-DD format
  const todayStr = new Date().toISOString().split("T")[0];

  function getFormData() {
    return {
      date,
      time,
      guests,
      occasion,
    };
  }

  useEffect(() => {
    const validDate = date !== "";
    const validTime = time !== "";
    const validGuests = Number(guests) >= 1 && Number(guests) <= 10;
    const validOccasion = occasion !== "";

    setIsFormValid(validDate && validTime && validGuests && validOccasion);
  }, [date, time, guests, occasion]);

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({ type: "dateChange", date: selectedDate });

    setTime("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;

    submitForm(getFormData());
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "320px", gap: "20px" }}
    >
      <h2>Book Now</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        min={todayStr}
        aria-label="On Click"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="On Click"
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
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        min="1"
        max="10"
        required
        aria-label="On Click"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-label="On Click"
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

