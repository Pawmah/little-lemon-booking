import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns a non-empty array of available booking times", () => {
  const times = initializeTimes();

  expect(times).toBeDefined();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns available times for the selected date", () => {
  const state = ["17:00"];
  const action = { type: "dateChange", date: "2026-01-01" };

  const result = updateTimes(state, action);

  expect(result).toBeDefined();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

