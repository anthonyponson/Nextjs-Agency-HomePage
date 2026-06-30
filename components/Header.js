import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="relative z-40 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      <a href="#top" className="group flex items-center gap-2.5" aria-label="Morrow home">
        <span className="grid size-8 place-items-center bg-[#151515] text-sm font-black text-[#c8ff3d] transition-transform duration-300 group-hover:rotate-12 dark:bg-[#c8ff3d] dark:text-[#151515]">
          M
        </span>
        <span className="text-lg font-black tracking-[-0.05em]">MORROW®</span>
      </a>

      <nav
        className="hidden items-center gap-8 text-sm font-semibold md:flex"
        aria-label="Main navigation"
      >
        <a className="nav-link" href="#services">Services</a>
        <a className="nav-link" href="#work">Work</a>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href="#contact"
          className="hidden bg-[#151515] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ff5c35] dark:bg-[#c8ff3d] dark:text-[#151515] dark:hover:bg-[#ff5c35] sm:block"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
