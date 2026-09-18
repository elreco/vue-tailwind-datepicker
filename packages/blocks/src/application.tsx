"use client";
import { useState, type ComponentProps } from "react";
import {
  Sidebar,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Dialog,
  Dropdown,
  Field,
  Input,
  Switch,
  Tabs,
  Textarea,
} from "@coderocket/react";
import { ActionForm, BlockCard, type FormAction } from "./common";
export function AppSidebarBlock({
  workspace,
  items,
  accountName,
}: {
  workspace: string;
  items: ComponentProps<typeof Sidebar>["items"];
  accountName: string;
}) {
  return (
    <Sidebar
      brand={workspace}
      items={items}
      footer={
        <div className="cr-row">
          <Avatar name={accountName} size={28} />
          <span>{accountName}</span>
        </div>
      }
    />
  );
}
export function AppHeaderBlock({
  breadcrumbs,
  accountName,
  onSearch,
  onSignOut,
}: {
  breadcrumbs: ComponentProps<typeof Breadcrumb>["items"];
  accountName: string;
  onSearch: () => void;
  onSignOut: () => void;
}) {
  return (
    <header className="cr-block-header">
      <Breadcrumb items={breadcrumbs} />
      <div className="cr-row">
        <Button variant="outline" onClick={onSearch}>
          Search <span aria-hidden="true">⌕</span>
        </Button>
        <Dropdown
          trigger={<Avatar name={accountName} size={28} />}
          items={[{ label: "Sign out", onSelect: onSignOut }]}
        />
      </div>
    </header>
  );
}
export function ProfileBlock({
  name,
  email,
  bio = "",
  onSave,
}: {
  name: string;
  email: string;
  bio?: string;
  onSave: FormAction;
}) {
  return (
    <BlockCard title="Your profile" description="How you appear to your team.">
      <div className="cr-row" style={{ marginBottom: 24 }}>
        <Avatar name={name} size={56} />
        <Badge>Member</Badge>
      </div>
      <ActionForm onSubmit={onSave}>
        <Field label="Display name">
          <Input name="name" defaultValue={name} required />
        </Field>
        <Field label="Email address">
          <Input name="email" type="email" defaultValue={email} required />
        </Field>
        <Field label="About you">
          <Textarea name="bio" defaultValue={bio} />
        </Field>
      </ActionForm>
    </BlockCard>
  );
}
export function SettingsBlock({
  workspaceName,
  onSave,
  onNotificationSave,
}: {
  workspaceName: string;
  onSave: FormAction;
  onNotificationSave: FormAction;
}) {
  return (
    <Card
      title="Workspace settings"
      description="A workspace that works for you."
    >
      <Tabs
        label="Settings sections"
        items={[
          {
            value: "general",
            label: "General",
            content: (
              <ActionForm onSubmit={onSave}>
                <Field label="Workspace name">
                  <Input
                    name="workspace"
                    defaultValue={workspaceName}
                    required
                  />
                </Field>
                <Field label="Description">
                  <Textarea
                    name="description"
                    placeholder="What are you building?"
                  />
                </Field>
              </ActionForm>
            ),
          },
          {
            value: "notifications",
            label: "Notifications",
            content: (
              <ActionForm onSubmit={onNotificationSave}>
                <Switch name="digest" label="Weekly digest" defaultChecked />
                <Switch
                  name="mentions"
                  label="Mention notifications"
                  defaultChecked
                />
              </ActionForm>
            ),
          },
        ]}
      />
    </Card>
  );
}
export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
}
export function TeamBlock({
  members,
  onInvite,
  onRemove,
}: {
  members: TeamMember[];
  onInvite: FormAction;
  onRemove: (id: string) => void | Promise<void>;
}) {
  const [removing, setRemoving] = useState<string | null>(null),
    [error, setError] = useState(false);
  return (
    <Card title="Your team" description="People who make things happen.">
      <div className="cr-block-toolbar">
        <Badge>{members.length} members</Badge>
        <Dialog trigger="Invite member" title="Invite someone to your team">
          <ActionForm
            onSubmit={onInvite}
            submitLabel="Send invitation"
            successMessage="Invitation sent."
          >
            <Field label="Email address">
              <Input name="email" type="email" required />
            </Field>
          </ActionForm>
        </Dialog>
      </div>
      <ul className="cr-block-list">
        {members.map((member) => (
          <li key={member.id}>
            <Avatar name={member.name} />
            <div>
              <strong>{member.name}</strong>
              <p className="cr-description">{member.email}</p>
            </div>
            <Badge variant="outline">{member.role}</Badge>
            <Button
              variant="ghost"
              size="sm"
              disabled={Boolean(removing)}
              onClick={async () => {
                setRemoving(member.id);
                setError(false);
                try {
                  await onRemove(member.id);
                } catch {
                  setError(true);
                } finally {
                  setRemoving(null);
                }
              }}
              aria-label={`Remove ${member.name}`}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      {error && (
        <p role="alert" className="cr-description">
          Unable to remove this member.
        </p>
      )}
    </Card>
  );
}
export function BillingBlock({
  plan,
  price,
  renewal,
  usage,
  limit,
  onManage,
  invoices,
}: {
  plan: string;
  price: string;
  renewal: string;
  usage: number;
  limit: number;
  onManage: () => void;
  invoices: Array<{ id: string; date: string; amount: string; href: string }>;
}) {
  return (
    <Card title="Billing" description="Your subscription and invoices.">
      <div className="cr-block-toolbar">
        <div>
          <Badge variant="primary">{plan}</Badge>
          <h3 style={{ marginTop: 16 }}>{price}</h3>
          <p className="cr-description">
            {renewal} · {usage} of {limit} seats used
          </p>
        </div>
        <Button variant="outline" onClick={onManage}>
          Manage subscription
        </Button>
      </div>
      <ul className="cr-block-list">
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <span>{invoice.date}</span>
            <strong>{invoice.amount}</strong>
            <a className="cr-link" href={invoice.href}>
              View invoice
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export function ApiKeysBlock({
  keys,
  onCreate,
  onRevoke,
}: {
  keys: Array<{ id: string; name: string; prefix: string; created: string }>;
  onCreate: FormAction;
  onRevoke: (id: string) => void | Promise<void>;
}) {
  const [error, setError] = useState(false),
    [busy, setBusy] = useState(false);
  return (
    <Card
      title="API keys"
      description="Keep your secret keys out of client-side code."
    >
      <Dialog trigger="Create key" title="Create an API key">
        <ActionForm
          onSubmit={onCreate}
          submitLabel="Create key"
          successMessage="Key created. Follow your application’s secure delivery flow."
        >
          <Field label="Key name">
            <Input name="name" required placeholder="Production integration" />
          </Field>
        </ActionForm>
      </Dialog>
      <ul className="cr-block-list">
        {keys.map((key) => (
          <li key={key.id}>
            <div>
              <strong>{key.name}</strong>
              <p className="cr-description">
                <code>{key.prefix}••••</code> · {key.created}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                setError(false);
                try {
                  await onRevoke(key.id);
                } catch {
                  setError(true);
                } finally {
                  setBusy(false);
                }
              }}
            >
              Revoke
            </Button>
          </li>
        ))}
      </ul>
      {error && (
        <p role="alert" className="cr-description">
          Unable to revoke this key.
        </p>
      )}
    </Card>
  );
}
export function NotificationsBlock({
  items,
  onReadAll,
  onOpen,
}: {
  items: Array<{
    id: string;
    title: string;
    description: string;
    time: string;
    unread: boolean;
  }>;
  onReadAll: () => void;
  onOpen: (id: string) => void;
}) {
  return (
    <Card title="Notifications">
      <div className="cr-block-toolbar">
        <Badge>{items.filter((item) => item.unread).length} unread</Badge>
        <Button variant="ghost" size="sm" onClick={onReadAll}>
          Mark all read
        </Button>
      </div>
      <ul className="cr-block-list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              className="cr-notification-item"
              onClick={() => onOpen(item.id)}
            >
              <strong>
                {item.title}
                {item.unread && (
                  <span aria-label="Unread" className="cr-unread-dot" />
                )}
              </strong>
              <p className="cr-description">{item.description}</p>
              <small className="cr-description">{item.time}</small>
            </button>
          </li>
        ))}
      </ul>
      {!items.length && <p className="cr-description">You’re all caught up.</p>}
    </Card>
  );
}
