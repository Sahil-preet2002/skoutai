import Link from "next/link";
import {
  ArrowRight,
  Database,
  Sparkles,
  ShieldCheck,
  Workflow,
  Bot,
  Activity,
  Mail,
  BarChart3,
  Plug,
  Search,
  Bell,
} from "lucide-react";
import { Section, Eyebrow, GradientText } from "@/components/site/Section";
export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <div style={{ background: "var(--gradient-hero)" }}>
        <Section className="py-10! md:py-24!">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <Eyebrow>Issue 01 · Revenue Intelligence</Eyebrow>
              <h1 className="font-display mt-4 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                Find the right
                <br />
                people. <GradientText>Faster.</GradientText>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Skout AI is the unified data layer for modern revenue teams — 600M verified
                contacts, real-time enrichment, intent signals and multi-channel outreach in one
                place.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  Start free <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/features"
                  className="text-sm font-medium underline-offset-4 hover:underline"
                >
                  Tour the platform →
                </Link>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              { k: "600M+", v: "Verified contacts" },
              { k: "45M+", v: "Companies tracked" },
              { k: "98.5%", v: "Email accuracy" },
              { k: "<400ms", v: "Avg enrichment" },
            ].map((s) => (
              <div key={s.v} className="bg-background p-4 md:p-6">
                <div className="font-display text-2xl md:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* BENTO GRID */}
      <Section>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>The platform</Eyebrow>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl">
              A modular <GradientText>revenue stack.</GradientText>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Pick the pieces you need — they're built to compose, not collide.
          </p>
        </div>

        {/* ROW 1 — big card + 2 stacked small cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* BIG CARD */}
          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 md:col-span-2 md:p-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <Database className="h-3.5 w-3.5" /> Prospect Graph
              </div>
              <h3 className="font-display mt-4 text-xl leading-tight sm:text-2xl">
                600M people. <span className="italic-serif">40+ filters.</span> One search bar.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Firmographics, technographics, hiring signals and intent — combined into one
                queryable graph that updates every 4 hours.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-background p-4 shadow-sm">
              <div className="flex items-center gap-2 border-b border-border pb-3 text-xs text-muted-foreground">
                <Search className="h-3.5 w-3.5" /> Series B SaaS · US · hiring AE
              </div>
              <div className="mt-3 space-y-1">
                {[
                  { n: "Mira Kapoor", r: "VP Marketing · Loom", s: "Hiring +12%" },
                  { n: "David Chen", r: "Head of RevOps · Notion", s: "Intent surge" },
                  { n: "Sofia Alvarez", r: "CMO · Linear", s: "HubSpot user" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-sm hover:bg-muted"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-medium">{p.n}</div>
                      <div className="truncate text-xs text-muted-foreground">{p.r}</div>
                    </div>
                    <span
                      className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] text-white"
                      style={{ background: "var(--gradient-accent)" }}
                    >
                      {p.s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2 STACKED SMALL CARDS */}
          <div className="flex flex-col gap-4">
            <div
              className="flex flex-1 flex-col rounded-3xl border border-border p-5 text-white md:p-6"
              style={{ background: "var(--gradient-accent)" }}
            >
              <Sparkles className="h-5 w-5" />
              <h3 className="font-display mt-4 text-lg leading-tight">Waterfall enrichment</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Query 12 vendors in priority order. Pay only for the first verified match.
              </p>
            </div>
            <div className="flex flex-1 flex-col rounded-3xl border border-border bg-card p-5 md:p-6">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-display mt-4 text-lg leading-tight">Real-time verification</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                SMTP + catch-all + risk scoring. 98.5% deliverability.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2 — 2 equal bottom cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-border bg-foreground p-6 text-background">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-70">
              <Workflow className="h-3.5 w-3.5" /> Outreach engine
            </div>
            <h3 className="font-display mt-4 text-lg leading-tight sm:text-xl">
              Multi-channel cadences{" "}
              <span className="italic-serif opacity-80">that actually land.</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed opacity-70">
              Email, LinkedIn and calls in one sequence — with native warm-up and inbox rotation.
            </p>
          </div>
          <div className="flex flex-col rounded-3xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Bell className="h-3.5 w-3.5" /> Buyer intent
            </div>
            <h3 className="font-display mt-4 text-lg leading-tight sm:text-xl">
              Reach accounts <GradientText>before</GradientText> they fill out forms.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Track 5,000+ B2B topics and get surge alerts for accounts in-market right now.
            </p>
          </div>
        </div>
      </Section>

      <div className="border-y border-border bg-card">
        <Section className="py-10! md:py-20!">
          <div className="grid items-start gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Manifesto</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <p className="font-display text-2xl sm:text-3xl leading-snug md:text-4xl">
                Modern revenue teams glue together <GradientText>five vendors</GradientText> just to
                ship one outbound play. We thought that was nuts — so we built Skout AI as{" "}
                <span className="italic-serif">one connected system</span>, priced for results, not
                seats.
              </p>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <Eyebrow>Also in the box</Eyebrow>
        <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl">
          Eight more things <span className="italic-serif">you'd usually pay extra for.</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {[
            { i: Plug, t: "Chrome extension" },
            { i: Workflow, t: "Open API & webhooks" },
            { i: BarChart3, t: "Pipeline analytics" },
            { i: ShieldCheck, t: "GDPR & CCPA flows" },
            { i: Bot, t: "AI research agent" },
            { i: Activity, t: "Job change alerts" },
            { i: Mail, t: "Deliverability suite" },
            { i: Database, t: "Warehouse sync" },
          ].map((f) => (
            <div key={f.t} className="bg-background p-4 md:p-6">
              <f.i className="h-5 w-5 text-muted-foreground" />
              <div className="mt-3 text-sm font-medium">{f.t}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12!">
        <div
          className="grid items-end gap-6 rounded-3xl border border-border p-6 md:grid-cols-2 md:p-12"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl leading-[1.05] md:text-4xl">
            Replace 5 tools.
            <br />
            <GradientText>Ship this week.</GradientText>
          </h2>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-sm text-muted-foreground md:text-right">
              50 free credits. No credit card. Cancel anytime.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
