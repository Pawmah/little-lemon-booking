/* global fetchAPI, submitAPI */

import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

// ✅ Initialize times using the API for today's date (with fallback)
export function initializeTimes() {
  const today = new Date();

  // If the Coursera API script loaded correctly
  if (typeof fetchAPI === "function") {
    return fetchAPI(today);
  }

  // ✅ Fallback so the site NEVER white-screens
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

// ✅ Update times using the API for the selected date (with fallback)
export function updateTimes(state, action) {
  // If the Coursera API script loaded correctly
  if (typeof fetchAPI === "function") {
    return fetchAPI(new Date(action.date));
  }

  // ✅ Fallback: just keep whatever the current state is
  return state;
}

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // ✅ Submit booking form data to the API (with fallback)
  function submitForm(formData) {
    // If the Coursera API script loaded correctly
    if (typeof submitAPI === "function") {
      const success = submitAPI(formData);

      if (success) {
        navigate("/confirmed");
      }
      return;
    }

    // ✅ Fallback: still allow navigation so the app works in dev
    navigate("/confirmed");
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
