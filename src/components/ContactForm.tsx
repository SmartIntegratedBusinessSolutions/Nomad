"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-line bg-sand-deep p-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-night">Thank you</h3>
        <p className="mt-2 text-sm text-night-soft">
          Your message has been received. Our team will respond at
          info@nomadsahan.org shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-night">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-line bg-sand px-4 py-2.5 text-sm text-night outline-none focus:border-clay"
          />
        </div>
        <div>
          <label htmlFor="organization" className="text-sm font-medium text-night">
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            className="mt-2 w-full rounded-lg border border-line bg-sand px-4 py-2.5 text-sm text-night outline-none focus:border-clay"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-night">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-line bg-sand px-4 py-2.5 text-sm text-night outline-none focus:border-clay"
        />
      </div>

      <div>
        <label htmlFor="topic" className="text-sm font-medium text-night">
          Area of Interest
        </label>
        <select
          id="topic"
          name="topic"
          className="mt-2 w-full rounded-lg border border-line bg-sand px-4 py-2.5 text-sm text-night outline-none focus:border-clay"
        >
          <option>Research & Policy Analysis Hub</option>
          <option>Humanitarian & Development Hub</option>
          <option>Partnership & Collaboration</option>
          <option>Media & Press</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-night">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-line bg-sand px-4 py-2.5 text-sm text-night outline-none focus:border-clay"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-clay px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-clay-dark"
      >
        Send Message
      </button>
    </form>
  );
}
