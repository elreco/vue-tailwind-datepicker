"use client";
import { Button } from "./button";
export function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const total = Math.max(1, Math.floor(totalPages));
  const current = Math.max(1, Math.min(total, page));
  const pages = Array.from(
    { length: Math.min(total, 5) },
    (_, i) => Math.max(1, Math.min(current - 2, total - 4)) + i,
  );
  return (
    <nav aria-label="Pagination" className="cr-pagination">
      <Button
        variant="outline"
        size="sm"
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
      >
        Previous
      </Button>
      {pages.map((p) => (
        <Button
          key={p}
          size="sm"
          variant={p === current ? "primary" : "ghost"}
          aria-current={p === current ? "page" : undefined}
          aria-label={"Page " + p}
          onClick={() => onPageChange(p)}
        >
          {p}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
      >
        Next
      </Button>
    </nav>
  );
}
