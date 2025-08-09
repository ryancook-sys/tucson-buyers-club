// app/page.tsx
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
      <header className="w-full border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-black" aria-hidden />
            <span className="text-lg font-semibold tracking-tight">Tucson Buyers Club</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-20 flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Local group buying power—
            <span className="inline-block">for everyday households.</span>
          </h1>
          <p className="mt-6 text-neutral-700 max-w-2xl">
            Tucson Buyers Club negotiates exclusive, members-only prices with trusted local and regional partners.
          </p>
          <div className="mt-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 border border-neutral-300 rounded-xl px-4 py-3"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  maxLength={5}
                  required
                  placeholder="ZIP code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full sm:w-40 border border-neutral-300 rounded-xl px-4 py-3"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-medium hover:opacity-90 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Join waitlist"}
                </button>
              </form>
            ) : (
              <div className="rounded-xl border border-neutral-200 p-4">
                <p className="font-medium">You&apos;re on the list. 🎉</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}