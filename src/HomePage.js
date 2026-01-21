import { Link } from "react-router-dom";

import Chicago from "./Chicago";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-label="On Click">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>

              <Link to="/booking" className="btn btn-primary">
                Reserve a Table
              </Link>
            </div>

            <div className="hero-image-wrap">
              <Chicago />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALS */}
      <Specials />

      {/* TESTIMONIALS */}
      <CustomersSay />

      {/* ABOUT */}
      <section className="specials-section" aria-label="On Click">
        <div className="container">
          <h2>About Little Lemon</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple,
            delicious Mediterranean food in Chicago.
          </p>
        </div>
      </section>
    </>
  );
}
