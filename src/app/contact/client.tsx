"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, MapPin, MessageSquare, ArrowUpRight, Clock3, ShieldCheck } from "lucide-react";
import { Section, Eyebrow, GradientText } from "@/components/site/Section";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  size: z.string().min(1, "Team size is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

async function submitContact(data: ContactFormData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message ?? "Submission failed");
  return json;
}

const contactCards = [
  { icon: Mail, title: "Email", description: "info@skoutai.io" },
  { icon: MessageSquare, title: "Live chat", description: "Mon – Fri · 9am – 7pm CET" },
  { icon: MapPin, title: "HQ", description: "Remote-first globally" },
];

const perks = [
  { icon: Clock3, title: "Fast responses", description: "Average first response time under 2 hours." },
  { icon: ShieldCheck, title: "Enterprise ready", description: "SOC 2 Type II with dedicated onboarding support." },
];

export default function ContactClient() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationFn: submitContact, onSuccess: () => reset() });

  return (
    <div>
      <div style={{ background: "var(--gradient-hero)" }} className="border-b border-border">
        <Section className="py-12! text-center md:py-20!">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            Talk to <GradientText>a human.</GradientText>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            Whether you're evaluating Skout AI, need support, or want to discuss partnerships — our team is here to help.
          </p>
        </Section>
      </div>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit((data) => mutate(data))} className="rounded-3xl border border-border p-6 md:p-8" style={{ background: "var(--gradient-card)" }}>
              <div>
                <h2 className="font-display text-2xl">Send us a message</h2>
                <p className="mt-1 text-sm text-muted-foreground">Fill out the form and we'll get back to you within one business day.</p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" register={register} error={errors.name?.message} />
                <Field label="Work email" name="email" type="email" register={register} error={errors.email?.message} />
                <Field label="Company" name="company" register={register} error={errors.company?.message} />
                <Field label="Team size" name="size" register={register} error={errors.size?.message} />
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">How can we help?</label>
                <textarea rows={5} placeholder="Tell us about your goals, current stack, or any questions you have..." className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary" {...register("message")} />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
              </div>
              {isSuccess && <p className="mt-4 rounded-xl bg-primary/10 px-4 py-3 text-sm text-primary">✓ Thanks — we'll be in touch soon!</p>}
              {isError && <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{(error as Error).message}</p>}
              <button type="submit" disabled={isPending || isSuccess} className="mt-5 inline-flex w-full items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-60 sm:w-auto" style={{ background: "var(--foreground)" }}>
                {isPending ? "Sending..." : isSuccess ? "Message sent ✓" : "Send message"}
              </button>
            </form>
          </div>

          <div className="space-y-4 lg:col-span-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-2xl border border-border p-5" style={{ background: "var(--gradient-card)" }}>
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
                    <div>
                      <h3 className="text-sm font-medium">{card.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="rounded-2xl border border-border p-5" style={{ background: "var(--gradient-card)" }}>
              <h3 className="text-base font-semibold">Need enterprise support?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Dedicated onboarding, migration assistance, SLA-backed support, custom integrations and advanced security reviews for large teams.</p>
              <Link href="/pricing" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                View enterprise plans <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div key={perk.title} className="rounded-2xl border border-border p-4">
                    <div className="flex items-start gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
                      <div>
                        <h4 className="text-sm font-medium">{perk.title}</h4>
                        <p className="mt-0.5 text-sm text-muted-foreground">{perk.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  register: ReturnType<typeof useForm<ContactFormData>>["register"];
  error?: string;
};

function Field({ label, name, type = "text", register, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input id={name} type={type} className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition focus:border-primary" {...register(name)} />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
