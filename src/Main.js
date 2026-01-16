import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
