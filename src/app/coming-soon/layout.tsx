import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launching Soon",
  description: "Skout AI is launching soon. Join the waitlist to get early access.",
};

export default function ComingSoonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
