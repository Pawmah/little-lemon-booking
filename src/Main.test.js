import { initializeTimes, updateTimes } from "./Main";

beforeEach(() => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

test("initializeTimes returns a non-empty array of available booking times", () => {
  const times = initializeTimes();
  expect(times).toHaveLength(3);
});

test("updateTimes returns available times for the selected date", () => {
  const state = ["17:00"];
  const action = { type: "dateChange", date: "2026-01-01" };

  const result = updateTimes(state, action);

  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});

