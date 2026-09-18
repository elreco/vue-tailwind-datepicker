"use client";
import type { ReactNode } from "react";
import { Accordion, Avatar, Badge, Card, Separator } from "@coderocket/react";
export function HeroBlock({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <section className="cr-hero">
      <Badge variant="outline">{eyebrow}</Badge>
      <h1>{title}</h1>
      <p className="cr-description">{description}</p>
      <div className="cr-hero-actions">
        <a className="cr-button" href={primary.href}>
          {primary.label}
        </a>
        {secondary && (
          <a className="cr-button" data-variant="outline" href={secondary.href}>
            {secondary.label}
          </a>
        )}
      </div>
      {children}
    </section>
  );
}
export function FeaturesBlock({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Array<{ title: string; description: string; icon?: ReactNode }>;
}) {
  return (
    <section className="cr-marketing-section">
      <h2>{title}</h2>
      <p className="cr-description">{description}</p>
      <div className="cr-block-grid">
        {items.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.icon && (
              <span aria-hidden="true" className="cr-feature-icon">
                {item.icon}
              </span>
            )}
            <p className="cr-description">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
export function PricingBlock({
  title,
  plans,
}: {
  title: string;
  plans: Array<{
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    href: string;
    action: string;
    featured?: boolean;
  }>;
}) {
  return (
    <section className="cr-marketing-section">
      <h2>{title}</h2>
      <div className="cr-block-grid">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            title={plan.name}
            description={plan.description}
          >
            {plan.featured && <Badge variant="primary">Recommended</Badge>}
            <p className="cr-price">
              {plan.price}
              <small>{plan.period}</small>
            </p>
            <ul className="cr-price-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              className="cr-button"
              data-variant={plan.featured ? "primary" : "outline"}
              href={plan.href}
            >
              {plan.action}
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
export function TestimonialsBlock({
  title,
  quotes,
}: {
  title: string;
  quotes: Array<{ quote: string; name: string; role: string }>;
}) {
  return (
    <section className="cr-marketing-section">
      <h2>{title}</h2>
      <div className="cr-block-grid">
        {quotes.map((quote) => (
          <Card key={quote.name}>
            <blockquote className="cr-quote">“{quote.quote}”</blockquote>
            <div className="cr-row">
              <Avatar name={quote.name} />
              <div>
                <strong>{quote.name}</strong>
                <p className="cr-description">{quote.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
export function FaqBlock({
  title,
  items,
}: {
  title: string;
  items: Array<{ question: string; answer: ReactNode }>;
}) {
  return (
    <section className="cr-marketing-section">
      <h2>{title}</h2>
      <Accordion
        items={items.map((item, index) => ({
          value: String(index),
          title: item.question,
          content: item.answer,
        }))}
      />
    </section>
  );
}
export function CtaBlock({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: { label: string; href: string };
}) {
  return (
    <Card>
      <div className="cr-cta">
        <div>
          <h2>{title}</h2>
          <p className="cr-description">{description}</p>
        </div>
        <a className="cr-button" href={action.href}>
          {action.label}
        </a>
      </div>
    </Card>
  );
}
export function FooterBlock({
  brand,
  description,
  groups,
  copyright,
}: {
  brand: string;
  description: string;
  groups: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
  copyright: string;
}) {
  return (
    <footer className="cr-footer">
      <div className="cr-footer-main">
        <div>
          <strong>{brand}</strong>
          <p className="cr-description">{description}</p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <strong>{group.title}</strong>
            {group.links.map((link) => (
              <a className="cr-description" key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <Separator />
      <p className="cr-description">{copyright}</p>
    </footer>
  );
}
