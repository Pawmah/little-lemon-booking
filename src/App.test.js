import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Little Lemon heading", () => {
  render(<App />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});
