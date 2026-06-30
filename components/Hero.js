import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Header from "./Header";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-grid relative min-h-[100svh] bg-[#f3f0e8] text-[#151515] transition-colors duration-500 dark:bg-[#171714] dark:text-[#f3f0e8]"
    >
      <Header />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:pb-20 lg:pt-14">
        <div className="relative z-10">
          <div className="animate-rise mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
            <span className="size-2 animate-pulse rounded-full bg-[#ff5c35]" />
            Independent creative studio
          </div>

          <h1 className="max-w-5xl text-[clamp(3.35rem,8.3vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">
            <span className="animate-rise block [animation-delay:100ms]">Ideas with</span>
            <span className="animate-rise block text-[#574cff] [animation-delay:180ms] dark:text-[#c8ff3d]">
              nerve<span className="font-serif font-normal italic">.</span>
            </span>
          </h1>

          <div className="mt-9 grid max-w-3xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="animate-rise max-w-lg text-lg leading-relaxed text-[#4b4a45] [animation-delay:260ms] sm:text-xl dark:text-[#c9c7bd]">
              We build bold identities and digital experiences for people who want
              to shape what comes next.
            </p>

            <div className="animate-rise flex flex-wrap gap-3 [animation-delay:340ms]">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-[#151515] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#574cff] dark:bg-[#f3f0e8] dark:text-[#151515] dark:hover:bg-[#c8ff3d]"
              >
                View our work
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:rotate-45"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-[#151515] px-6 py-4 text-sm font-bold transition duration-300 hover:bg-[#c8ff3d] hover:text-[#151515] dark:border-[#f3f0e8] dark:hover:border-[#c8ff3d]"
              >
                Let&apos;s talk
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="animate-rise relative mx-auto w-full max-w-[500px] [animation-delay:300ms] lg:justify-self-end">
          <div className="poster-shadow relative aspect-[4/5] overflow-hidden bg-[#574cff] p-6 text-white sm:p-8">
            <div className="absolute -right-16 -top-16 size-56 rounded-full border-[28px] border-[#c8ff3d] orbit-spin" />
            <div className="absolute right-10 top-40 h-40 w-px rotate-45 bg-white/50" />
            <div className="absolute right-24 top-36 h-56 w-px rotate-45 bg-white/30" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                <span>Morrow / 2026</span>
                <span>Brand + Digital</span>
              </div>

              <div>
                <p className="mb-4 font-serif text-2xl italic text-[#c8ff3d]">
                  Make it mean something.
                </p>
                <p className="text-[clamp(4rem,9vw,7.5rem)] font-black uppercase leading-[0.7] tracking-[-0.09em]">
                  Good
                  <br />
                  noise
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div className="sticker-float grid size-20 rotate-6 place-items-center rounded-full bg-[#ff5c35] text-center text-[10px] font-black uppercase leading-tight tracking-wider text-[#151515] sm:size-24">
                  Built to
                  <br />be felt
                </div>
                <span className="text-right text-xs font-semibold uppercase leading-relaxed tracking-widest">
                  Scroll to
                  <br />explore ↓
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full border border-[#151515] bg-[#c8ff3d] dark:border-[#f3f0e8]" />
        </div>
      </div>
    </section>
  );
}
