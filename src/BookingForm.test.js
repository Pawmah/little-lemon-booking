import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockTimes = ["17:00", "18:00", "19:00"];

test("HTML5 validation attributes are applied correctly", () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  // Date input
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("min");

  // Time select
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toHaveAttribute("required");

  // Guests input
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");

  // Occasion select
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute("required");
});

test("Submit button is disabled when the form is invalid", () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const submitButton = screen.getByDisplayValue(/make your reservation/i);
  expect(submitButton).toBeDisabled();
});

test("Submit button becomes enabled when the form is valid", () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  // Fill in required fields
  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-01-01" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  const submitButton = screen.getByDisplayValue(/make your reservation/i);
  expect(submitButton).not.toBeDisabled();
});

test("Form submits correct data when valid", () => {
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={() => {}}
      submitForm={mockSubmitForm}
    />
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-01-01" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "18:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Anniversary" },
  });

  const submitButton = screen.getByDisplayValue(/make your reservation/i);
  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2026-01-01",
    time: "18:00",
    guests: 4,
    occasion: "Anniversary",
  });
});
