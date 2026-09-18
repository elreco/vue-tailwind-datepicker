"use client";
import { useMemo, useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Pagination } from "./pagination";
export interface DataColumn {
  key: string;
  label: string;
  sortable?: boolean;
}
export function DataTable({
  caption,
  columns,
  rows,
  pageSize = 5,
}: {
  caption: string;
  columns: DataColumn[];
  rows: Array<Record<string, string | number>>;
  pageSize?: number;
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<{ key: string; direction: 1 | -1 } | null>(
    null,
  );
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => {
    const list = rows.filter((row) =>
      columns.some((c) =>
        String(row[c.key] ?? "")
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    );
    if (sort)
      list.sort(
        (a, b) =>
          String(a[sort.key]).localeCompare(String(b[sort.key]), undefined, {
            numeric: true,
          }) * sort.direction,
      );
    return list;
  }, [rows, columns, query, sort]);
  const size = Math.max(1, pageSize);
  const total = Math.max(1, Math.ceil(filtered.length / size));
  const current = Math.min(page, total);
  return (
    <div className="cr-data-table">
      <Input
        aria-label={"Search " + caption}
        placeholder="Search records…"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setPage(1);
        }}
      />
      <div className="cr-table-scroll">
        <table className="cr-table">
          <caption>{caption}</caption>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  aria-sort={
                    sort?.key === column.key
                      ? sort.direction === 1
                        ? "ascending"
                        : "descending"
                      : undefined
                  }
                >
                  {column.sortable !== false ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setSort({
                          key: column.key,
                          direction:
                            sort?.key === column.key && sort.direction === 1
                              ? -1
                              : 1,
                        })
                      }
                    >
                      {column.label} ↕
                    </Button>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered
              .slice((current - 1) * size, current * size)
              .map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column.key}>{row[column.key]}</td>
                  ))}
                </tr>
              ))}
            {!filtered.length && (
              <tr>
                <td colSpan={columns.length}>No matching records.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination page={current} totalPages={total} onPageChange={setPage} />
    </div>
  );
}
