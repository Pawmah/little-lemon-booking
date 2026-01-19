import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

// ✅ Named exports so we can unit test these functions
export function updateTimes(state, action) {
  // For now, return the same state regardless of date
  return state;
}

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main className="main">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/booking"
            element={
              <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
            }
          />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
