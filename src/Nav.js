import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav" aria-label="On Click">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/booking">Reservations</Link>
          </li>

          <li>
            <Link to="/order-online">Order Online</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
