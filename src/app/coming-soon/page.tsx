"use client";

import { useState } from "react";

export default function ComingSoonPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      style={{ minHeight: "80vh" }}
      className="relative flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--gradient-accent)" }}
      />

      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Coming Soon</p>

      <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
        We&rsquo;re almost{" "}
        <span className="italic-serif" style={{ color: "var(--color-accent)" }}>
          ready.
        </span>
      </h1>

      <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
        Skout AI is putting the finishing touches on the platform. Drop your email and you&rsquo;ll
        be first in line.
      </p>

      {submitted ? (
        <p className="mt-8 rounded-full border border-border bg-card px-6 py-3 text-sm text-muted-foreground">
          ✅ You&rsquo;re on the list! We&rsquo;ll be in touch soon.
        </p>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const emailInput = form.elements.namedItem("email") as HTMLInputElement;
            const email = emailInput.value.trim();
            if (!email) return;
            try {
              await fetch("/api/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });
              setSubmitted(true);
            } catch (err) {
              console.error("Notify error", err);
            }
          }}
          className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="flex-1 rounded-full border border-border bg-background px-5 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-foreground/20"
          />
          <button
            type="submit"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Notify me
          </button>
        </form>
      )}

      <p className="mt-4 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
