import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Little Lemon logo" width="200" />
      </div>
    </header>
  );
}
