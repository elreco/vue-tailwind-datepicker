import { it, expect } from "vitest";
import { parseCalendarDate } from "./components/calendar";
it("preserves dates without local timezone conversion, including leap days and early years", () => {
  for (const value of [
    "2024-02-29",
    "2026-03-29",
    "2026-10-25",
    "0001-01-01",
    "9999-12-31",
  ])
    expect(parseCalendarDate(value).toISOString().slice(0, 10)).toBe(value);
  for (const value of [
    "2023-02-29",
    "2026-04-31",
    "2026-13-01",
    "0000-01-01",
    "2026-09-17T00:00:00Z",
  ])
    expect(() => parseCalendarDate(value)).toThrow();
});
