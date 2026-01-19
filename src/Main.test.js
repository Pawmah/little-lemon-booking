import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state it receives", () => {
  const state = ["17:00", "18:00", "19:00"];
  const action = { type: "dateChange", date: "2026-01-01" };

  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});
