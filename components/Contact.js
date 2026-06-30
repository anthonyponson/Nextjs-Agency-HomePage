"use client";

import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#574cff] px-5 pb-8 pt-24 text-white sm:px-8 lg:px-12 lg:pt-32">
      <div className="contact-orb absolute -right-28 -top-28 size-[430px] rounded-full border-[70px] border-[#c8ff3d]/90" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff3d]">Get in touch</p>
            <h2 className="text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Have an<br />
              idea<span className="font-serif font-normal italic text-[#c8ff3d]">?</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">
              Tell us what you are working on. We will get back to you within two working days.
            </p>
            <a
              href="mailto:hello@morrow.studio"
              className="group mt-9 inline-flex items-center gap-3 border-b border-white/50 pb-2 text-lg font-semibold transition hover:border-[#c8ff3d] hover:text-[#c8ff3d]"
            >
              hello@morrow.studio
              <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-white/25 bg-[#151515] p-6 shadow-[12px_12px_0_#c8ff3d] sm:p-9 lg:p-12"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="form-field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
              </div>
            </div>

            <div className="form-field mt-7">
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="A few details about your idea, goals and timeline..."
                required
                minLength="10"
              />
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="group inline-flex w-fit items-center gap-3 bg-[#c8ff3d] px-6 py-4 text-sm font-bold text-[#151515] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Send inquiry
                <Send size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <div aria-live="polite" className="min-h-6">
                {sent && (
                  <p className="flex items-center gap-2 text-sm font-semibold text-[#c8ff3d]">
                    <CheckCircle2 size={18} /> Message sent successfully!
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>

        <footer className="mt-24 flex flex-col gap-4 border-t border-white/25 pt-7 text-xs font-semibold uppercase tracking-[0.16em] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Morrow Studio</p>
          <p>Making good noise worldwide</p>
        </footer>
      </div>
    </section>
  );
}
