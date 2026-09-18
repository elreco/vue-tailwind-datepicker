"use client";
export function Breadcrumb({
  items,
  label = "Breadcrumb",
}: {
  items: Array<{ label: string; href?: string }>;
  label?: string;
}) {
  return (
    <nav aria-label={label}>
      <ol className="cr-breadcrumb">
        {items.map((item, index) => (
          <li key={index}>
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href && index < items.length - 1 ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
