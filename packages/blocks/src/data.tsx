"use client";
import { useMemo, useState, type ComponentProps, type ReactNode } from "react";
import {
  Badge,
  Button,
  Card,
  DataTable,
  EmptyState,
  Field,
  Input,
  Select,
  Separator,
} from "@coderocket/react";
export function DataTableBlock({
  title,
  description,
  columns,
  rows,
  onCreate,
}: {
  title: string;
  description?: string;
  columns: ComponentProps<typeof DataTable>["columns"];
  rows: ComponentProps<typeof DataTable>["rows"];
  onCreate: () => void;
}) {
  return (
    <Card title={title} description={description}>
      <div className="cr-block-toolbar">
        <Badge>{rows.length} records</Badge>
        <Button onClick={onCreate}>Add record</Button>
      </div>
      <DataTable caption={title} columns={columns} rows={rows} />
    </Card>
  );
}
export function FiltersBlock({
  onChange,
  statuses,
}: {
  onChange: (filters: { query: string; status: string }) => void;
  statuses: Array<{ value: string; label: string }>;
}) {
  const [query, setQuery] = useState(""),
    [status, setStatus] = useState("all");
  return (
    <div className="cr-block-filters">
      <Field label="Search">
        <Input
          type="search"
          value={query}
          placeholder="Name or keyword…"
          onChange={(event) => {
            setQuery(event.target.value);
            onChange({ query: event.target.value, status });
          }}
        />
      </Field>
      <Field label="Status">
        <Select
          label="Status"
          value={status}
          options={[{ value: "all", label: "All statuses" }, ...statuses]}
          onValueChange={(value) => {
            const next = value ?? "all";
            setStatus(next);
            onChange({ query, status: next });
          }}
        />
      </Field>
      <Button
        variant="ghost"
        onClick={() => {
          setQuery("");
          setStatus("all");
          onChange({ query: "", status: "all" });
        }}
      >
        Clear filters
      </Button>
    </div>
  );
}
export function SearchBlock({
  items,
  onSelect,
}: {
  items: Array<{ id: string; title: string; description: string }>;
  onSelect: (id: string) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      items.filter((item) =>
        `${item.title} ${item.description}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [items, query],
  );
  return (
    <Card title="Find what you need">
      <Input
        aria-label="Search content"
        type="search"
        value={query}
        placeholder="Search…"
        onChange={(event) => setQuery(event.target.value)}
      />
      <p className="cr-description" role="status" style={{ marginTop: 16 }}>
        {results.length} results
      </p>
      <ul className="cr-block-list">
        {results.map((item) => (
          <li key={item.id}>
            <button
              className="cr-notification-item"
              onClick={() => onSelect(item.id)}
            >
              <strong>{item.title}</strong>
              <p className="cr-description">{item.description}</p>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export function EmptyStateBlock({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
}) {
  return (
    <Card>
      <EmptyState
        title={title}
        description={description}
        icon={<span aria-hidden="true">◇</span>}
        action={<Button onClick={onAction}>{actionLabel}</Button>}
      />
    </Card>
  );
}
export function DetailViewBlock({
  title,
  status,
  fields,
  children,
  onEdit,
}: {
  title: string;
  status: string;
  fields: Array<{ label: string; value: string }>;
  children?: ReactNode;
  onEdit: () => void;
}) {
  return (
    <Card title={title}>
      <div className="cr-block-toolbar">
        <Badge variant="success">{status}</Badge>
        <Button variant="outline" onClick={onEdit}>
          Edit details
        </Button>
      </div>
      <dl className="cr-details">
        {fields.map((field) => (
          <div key={field.label}>
            <dt>{field.label}</dt>
            <dd>{field.value}</dd>
          </div>
        ))}
      </dl>
      {children && (
        <>
          <Separator />
          {children}
        </>
      )}
    </Card>
  );
}
export function StatsBlock({
  items,
}: {
  items: Array<{
    label: string;
    value: string;
    change?: string;
    trend?: "positive" | "negative" | "neutral";
  }>;
}) {
  return (
    <div className="cr-block-grid">
      {items.map((item) => (
        <Card key={item.label} description={item.label}>
          <strong className="cr-stat-value">{item.value}</strong>
          {item.change && (
            <Badge
              variant={
                item.trend === "positive"
                  ? "success"
                  : item.trend === "negative"
                    ? "destructive"
                    : "outline"
              }
            >
              {item.change}
            </Badge>
          )}
        </Card>
      ))}
    </div>
  );
}
