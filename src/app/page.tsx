"use client";
import React, { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // TODO: replace with POST to /api/waitlist
      console.log("Waitlist lead:", { email, zip });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="container h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-xs font-semibold">
              TBC
            </span>
            <span className="text-lg font-semibold tracking-tight">Tucson Buyers Club</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-70">How it works</a>
            <a href="#value" className="hover:opacity-70">Value</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#join" className="rounded-md border border-black px-3 py-1 hover:bg-black hover:text-white transition">
              Join
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="section border-b border-neutral-200">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Founding launch</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Local group buying power—made simple.
            </h1>
            <p className="mt-6 text-lg text-neutral-700">
              Exclusive, members‑only pricing from trusted local and regional partners.
              Join the waitlist to help shape the launch and unlock founding perks.
            </p>

            <div id="join" className="mt-10 mx-auto max-w-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" aria-label="Join waitlist">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input flex-1"
                    aria-label="Email address"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    required
                    placeholder="ZIP code"
                    autoComplete="postal-code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="input w-full sm:w-36"
                    aria-label="ZIP code"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                  >
                    {isSubmitting ? "Submitting…" : "Join waitlist"}
                  </button>
                </form>
              ) : (
                <div className="card" role="status" aria-live="polite">
                  <p className="font-medium">You&apos;re on the list. 🎉</p>
                  <p className="text-sm text-neutral-700 mt-1">
                    We&apos;ll email next steps and early access details soon.
                  </p>
                </div>
              )}
              <p className="mt-3 text-xs text-neutral-500">
                ZIP helps us prioritize neighborhood launches. We never share your info.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value grid */}
      <section id="value" className="section">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Bigger Savings" text="Group‑negotiated pricing on everyday needs." />
            <Card title="Curated Partners" text="Quality‑first lineup across grocery, auto, wellness, home." />
            <Card title="Founding Perks" text="Early access, mystery rewards, and leaderboard bonuses." />
            <Card title="Flexible Subscriptions" text="Reorder essentials on your rhythm—pause anytime." />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section border-y border-neutral-200 bg-neutral-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3 text-neutral-800">
            <Step k="01" title="Join the waitlist" text="Tell us your ZIP so we can time partner launches near you." />
            <Step k="02" title="Vote for brands" text="Request businesses you want—your upvotes guide our deals." />
            <Step k="03" title="Unlock perks" text="Founding access, rewards, and invite‑only bonuses." />
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <FAQ q="What is Tucson Buyers Club?" a="A member community that uses collective demand to negotiate better prices with trusted partners." />
            <FAQ q="Is it only for Tucson?" a="We&apos;re launching in Tucson first. Your ZIP helps us plan high‑demand neighborhoods and future cities." />
            <FAQ q="How much does it cost?" a="Founding members get our best pricing. We&apos;ll share details at launch." />
            <FAQ q="When does it launch?" a="As soon as we hit partner and member thresholds in each area. Join to be notified." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="container py-10 text-sm text-neutral-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Tucson Buyers Club</div>
          <div className="flex gap-6">
            <a className="hover:opacity-70" href="#join">Join waitlist</a>
            <a className="hover:opacity-70" href="#">Privacy</a>
            <a className="hover:opacity-70" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="card">
      <div className="font-medium">{title}</div>
      <p className="mt-1 text-neutral-700 text-sm">{text}</p>
    </div>
  );
}

function Step({ k, title, text }: { k: string; title: string; text: string }) {
  return (
    <li className="card">
      <div className="eyebrow">Step {k}</div>
      <div className="mt-2 font-medium">{title}</div>
      <p className="mt-2 text-neutral-700 text-sm">{text}</p>
    </li>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="card">
      <div className="font-medium">{q}</div>
      <p className="mt-2 text-neutral-700 text-sm">{a}</p>
    </div>
  );
}
