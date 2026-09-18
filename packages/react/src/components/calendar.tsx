"use client";
import {
  useId,
  useRef,
  useState,
  useEffect,
  useEffectEvent,
  type KeyboardEvent,
} from "react";
import { Button } from "./button";
/** Gregorian calendar dates, never instants. UTC is used only for arithmetic. */
export function parseCalendarDate(iso: string): Date {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(iso) ||
    iso < "0001-01-01" ||
    iso > "9999-12-31"
  )
    throw new Error("Expected an ISO calendar date");
  const date = new Date(`${iso}T12:00:00Z`);
  if (
    !Number.isFinite(date.valueOf()) ||
    date.toISOString().slice(0, 10) !== iso
  )
    throw new Error("Invalid calendar date");
  return date;
}
function iso(date: Date) {
  return date.toISOString().slice(0, 10);
}
function plusDays(date: Date, days: number) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}
function monthStart(date: Date) {
  const result = new Date(date);
  result.setUTCDate(1);
  return result;
}
function shiftMonth(date: Date, amount: number) {
  const result = monthStart(date);
  result.setUTCMonth(result.getUTCMonth() + amount);
  return result;
}
export function Calendar({
  label = "Choose a date",
  value,
  defaultValue,
  onValueChange,
  min = "0001-01-01",
  max = "9999-12-31",
  locale = "en",
  weekStartsOn = 1,
  disabled = false,
}: {
  label?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (date: string) => void;
  min?: string;
  max?: string;
  locale?: string;
  weekStartsOn?: 0 | 1;
  disabled?: boolean;
}) {
  const [internal, setInternal] = useState(defaultValue),
    chosen = value ?? internal;
  parseCalendarDate(min);
  parseCalendarDate(max);
  if (min > max) throw new Error("Calendar min exceeds max");
  if (chosen) parseCalendarDate(chosen);
  const clamp = (date: string) => (date < min ? min : date > max ? max : date);
  const [focusDate, setFocusDate] = useState(() =>
    clamp(chosen ?? new Date().toISOString().slice(0, 10)),
  );
  const [month, setMonth] = useState(() =>
    monthStart(parseCalendarDate(focusDate)),
  );
  const synchronize = useEffectEvent(() => {
    const next = clamp(chosen ?? focusDate);
    setFocusDate(next);
    setMonth(monthStart(parseCalendarDate(next)));
  });
  useEffect(() => {
    synchronize();
  }, [chosen, min, max]);
  const headingId = useId(),
    grid = useRef<HTMLDivElement>(null);
  const monthLabel = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(month);
  const dayLabel = (date: Date) =>
    new Intl.DateTimeFormat(locale, {
      dateStyle: "full",
      timeZone: "UTC",
    }).format(date);
  const offset = (month.getUTCDay() - weekStartsOn + 7) % 7;
  const start = plusDays(month, -offset);
  const dates = Array.from({ length: 42 }, (_, i) => plusDays(start, i));
  function move(date: Date) {
    const next = clamp(iso(date));
    setFocusDate(next);
    setMonth(monthStart(parseCalendarDate(next)));
    requestAnimationFrame(() =>
      grid.current
        ?.querySelector<HTMLButtonElement>(`[data-date="${next}"]`)
        ?.focus(),
    );
  }
  function keyboard(event: KeyboardEvent<HTMLButtonElement>, date: Date) {
    let next: Date | undefined;
    const day = (date.getUTCDay() - weekStartsOn + 7) % 7;
    if (event.key === "ArrowRight") next = plusDays(date, 1);
    if (event.key === "ArrowLeft") next = plusDays(date, -1);
    if (event.key === "ArrowDown") next = plusDays(date, 7);
    if (event.key === "ArrowUp") next = plusDays(date, -7);
    if (event.key === "Home") next = plusDays(date, -day);
    if (event.key === "End") next = plusDays(date, 6 - day);
    if (event.key === "PageUp" || event.key === "PageDown") {
      next = shiftMonth(
        date,
        (event.key === "PageDown" ? 1 : -1) * (event.shiftKey ? 12 : 1),
      );
      const last = plusDays(shiftMonth(next, 1), -1).getUTCDate();
      next.setUTCDate(Math.min(date.getUTCDate(), last));
    }
    if (next) {
      event.preventDefault();
      if (next.getUTCFullYear() < 1) next = parseCalendarDate(min);
      if (next.getUTCFullYear() > 9999) next = parseCalendarDate(max);
      move(next);
    }
  }
  return (
    <div className="cr-calendar">
      <div className="cr-calendar-header">
        <Button
          variant="ghost"
          size="sm"
          aria-label="Previous month"
          disabled={disabled || iso(month) <= min.slice(0, 7) + "-01"}
          onClick={() => move(shiftMonth(month, -1))}
        >
          ‹
        </Button>
        <strong id={headingId} aria-live="polite">
          {monthLabel}
        </strong>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Next month"
          disabled={disabled || iso(month) >= max.slice(0, 7) + "-01"}
          onClick={() => move(shiftMonth(month, 1))}
        >
          ›
        </Button>
      </div>
      <div
        ref={grid}
        role="grid"
        aria-label={label}
        aria-describedby={headingId}
      >
        <div role="row" className="cr-calendar-week">
          {Array.from({ length: 7 }, (_, index) => {
            const day = plusDays(
              parseCalendarDate("2024-01-07"),
              (index + weekStartsOn) % 7,
            );
            return (
              <span
                key={index}
                role="columnheader"
                aria-label={new Intl.DateTimeFormat(locale, {
                  weekday: "long",
                  timeZone: "UTC",
                }).format(day)}
              >
                {new Intl.DateTimeFormat(locale, {
                  weekday: "short",
                  timeZone: "UTC",
                }).format(day)}
              </span>
            );
          })}
        </div>
        {Array.from({ length: 6 }, (_, week) => (
          <div key={week} role="row" className="cr-calendar-week">
            {dates.slice(week * 7, week * 7 + 7).map((date) => {
              if (date.getUTCFullYear() < 1 || date.getUTCFullYear() > 9999)
                return <span role="gridcell" key={date.valueOf()} />;
              const text = iso(date),
                unavailable = disabled || text < min || text > max;
              return (
                <div role="gridcell" aria-selected={chosen === text} key={text}>
                  <button
                    type="button"
                    data-date={text}
                    data-outside={
                      date.getUTCMonth() !== month.getUTCMonth() || undefined
                    }
                    data-selected={chosen === text || undefined}
                    aria-label={dayLabel(date)}
                    disabled={unavailable}
                    tabIndex={!unavailable && text === focusDate ? 0 : -1}
                    onFocus={() => setFocusDate(text)}
                    onKeyDown={(event) => keyboard(event, date)}
                    onClick={() => {
                      setInternal(text);
                      setFocusDate(text);
                      onValueChange?.(text);
                    }}
                  >
                    {date.getUTCDate()}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
