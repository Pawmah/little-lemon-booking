/* global fetchAPI, submitAPI */

import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

// ✅ Initialize times using the API for today's date
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

// ✅ Update times using the API for the selected date
export function updateTimes(state, action) {
  return fetchAPI(new Date(action.date));
}

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // ✅ Submit booking form data to the API
  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  }

  return (
    <main className="main">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />

          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
