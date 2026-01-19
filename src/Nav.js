function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/menu">Menu</a>
          </li>

          <li>
            <a href="/booking">Reservations</a>
          </li>

          <li>
            <a href="/order-online">Order Online</a>
          </li>

          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
