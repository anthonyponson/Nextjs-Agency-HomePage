"use client";

import { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      {/* Logo */}
      <a
        href="#top"
        className="group flex items-center gap-2.5"
        aria-label="Morrow home"
      >
        <span className="grid size-8 place-items-center bg-[#151515] text-sm font-black text-[#c8ff3d] transition-transform duration-300 group-hover:rotate-12 dark:bg-[#c8ff3d] dark:text-[#151515]">
          M
        </span>

        <span className="text-lg font-black tracking-[-0.05em]">
          MORROW®
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
        <a className="nav-link" href="#services">
          Services
        </a>

        <a className="nav-link" href="#work">
          Work
        </a>

        <a className="nav-link" href="#contact">
          Contact
        </a>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden items-center gap-3 md:flex">
        <ThemeToggle />

        <a
          href="#contact"
          className="bg-[#151515] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ff5c35] dark:bg-[#c8ff3d] dark:text-[#151515]"
        >
          Start a project
        </a>
      </div>

      {/* Mobile Actions */}
      <div className="flex items-center gap-3 md:hidden">
        <ThemeToggle />

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="relative flex h-12 w-12 items-center justify-center border border-[#151515] dark:border-white"
        >
          <span className="absolute h-[2px] w-5 -translate-y-1.5 bg-current" />
          <span className="absolute h-[2px] w-5 bg-current" />
          <span className="absolute h-[2px] w-5 translate-y-1.5 bg-current" />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide Menu */}
      <div
        className={`fixed right-0 top-0 z-[100] h-screen w-[90%] max-w-md bg-[#f3f0e8] p-8 text-[#151515] transition-transform duration-500 dark:bg-[#171714] dark:text-[#f3f0e8]
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Top */}
        <div className="mb-16 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6b6a64] dark:text-[#9f9d92]">
            Navigation
          </span>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-12 w-12 items-center justify-center border border-[#151515] transition duration-300 hover:rotate-90 dark:border-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col">
          {[
            ["01", "Services", "#services"],
            ["02", "Work", "#work"],
            ["03", "Contact", "#contact"],
          ].map(([number, title, href]) => (
            <a
              key={title}
              href={href}
              onClick={closeMenu}
              className="group flex items-center justify-between border-b border-black/20 py-8 dark:border-white/20"
            >
              <span className="text-xs font-bold text-[#8a8880]">
                {number}
              </span>

              <span className="text-4xl font-black uppercase tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2">
                {title}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="mt-12">
          <a
            href="#contact"
            onClick={closeMenu}
            className="group flex items-center justify-center gap-3 bg-[#151515] px-6 py-5 text-sm font-bold text-white transition duration-300 hover:bg-[#574cff] dark:bg-[#c8ff3d] dark:text-[#151515]"
          >
            Start a Project

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </header>
  );
}