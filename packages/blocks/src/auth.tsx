"use client";
import { Field, Input } from "@coderocket/react";
import { ActionForm, BlockCard, type FormAction } from "./common";
export function LoginBlock({
  onSubmit,
  signupHref,
  forgotHref,
}: {
  onSubmit: FormAction;
  signupHref: string;
  forgotHref: string;
}) {
  return (
    <BlockCard title="Welcome back" description="Sign in to your workspace.">
      <ActionForm
        onSubmit={onSubmit}
        submitLabel="Sign in"
        successMessage="Signed in."
      >
        <Field label="Email address">
          <Input name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Password">
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </Field>
        <a className="cr-link" href={forgotHref}>
          Forgot password?
        </a>
      </ActionForm>
      <p className="cr-description" style={{ marginTop: 20 }}>
        New here?{" "}
        <a className="cr-link" href={signupHref}>
          Create an account
        </a>
      </p>
    </BlockCard>
  );
}
export function SignupBlock({
  onSubmit,
  loginHref,
}: {
  onSubmit: FormAction;
  loginHref: string;
}) {
  return (
    <BlockCard
      title="Your next chapter"
      description="Create an account to get started."
    >
      <ActionForm
        onSubmit={onSubmit}
        submitLabel="Create account"
        successMessage="Check your inbox to confirm your email address."
      >
        <Field label="Full name">
          <Input name="name" autoComplete="name" required />
        </Field>
        <Field label="Email address">
          <Input name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Password" description="Use at least 12 characters.">
          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={12}
          />
        </Field>
      </ActionForm>
      <p className="cr-description" style={{ marginTop: 20 }}>
        Already registered?{" "}
        <a className="cr-link" href={loginHref}>
          Sign in
        </a>
      </p>
    </BlockCard>
  );
}
export function ForgotPasswordBlock({
  onSubmit,
  loginHref,
}: {
  onSubmit: FormAction;
  loginHref: string;
}) {
  return (
    <BlockCard
      title="Forgot your password?"
      description="We’ll send you a link to reset it."
    >
      <ActionForm
        onSubmit={onSubmit}
        submitLabel="Send reset link"
        successMessage="If this address has an account, a reset link is on its way."
      >
        <Field label="Email address">
          <Input name="email" type="email" autoComplete="email" required />
        </Field>
      </ActionForm>
      <a className="cr-link" href={loginHref}>
        Back to sign in
      </a>
    </BlockCard>
  );
}
export function ResetPasswordBlock({ onSubmit }: { onSubmit: FormAction }) {
  return (
    <BlockCard
      title="Choose a new password"
      description="Use at least 12 characters."
    >
      <ActionForm
        onSubmit={async (data) => {
          if (data.get("password") !== data.get("confirmation"))
            throw new Error("Passwords differ");
          await onSubmit(data);
        }}
        submitLabel="Update password"
        successMessage="Your password has been updated."
      >
        <Field label="New password">
          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={12}
          />
        </Field>
        <Field label="Confirm password">
          <Input
            name="confirmation"
            type="password"
            autoComplete="new-password"
            required
            minLength={12}
          />
        </Field>
      </ActionForm>
    </BlockCard>
  );
}
export function OtpBlock({
  onSubmit,
  length = 6,
}: {
  onSubmit: FormAction;
  length?: number;
}) {
  const size = Math.max(4, Math.min(10, Math.floor(length)));
  return (
    <BlockCard
      title="Check your inbox"
      description={`Enter the ${size}-digit verification code.`}
    >
      <ActionForm
        onSubmit={onSubmit}
        submitLabel="Verify code"
        successMessage="Code verified."
      >
        <Field label="Verification code">
          <Input
            name="code"
            inputMode="numeric"
            autoComplete="one-time-code"
            minLength={size}
            maxLength={size}
            pattern={`[0-9]{${size}}`}
            required
            className="cr-otp"
          />
        </Field>
      </ActionForm>
    </BlockCard>
  );
}
