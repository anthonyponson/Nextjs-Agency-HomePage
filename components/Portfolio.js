import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Kiyo Coffee", category: "Brand Identity", year: "2026", image: "/project-kiyo.svg", background: "#ff6b45" },
  { title: "Onward", category: "Digital Product", year: "2026", image: "/project-onward.svg", background: "#c8ff3d" },
  { title: "Terra Homes", category: "Web Design", year: "2025", image: "/project-terra.svg", background: "#69d7ff" },
  { title: "Rove Festival", category: "Campaign", year: "2025", image: "/project-rove.svg", background: "#8e85ff" },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="bg-[#f3f0e8] px-5 py-24 text-[#151515] transition-colors duration-500 sm:px-8 lg:px-12 lg:py-32 dark:bg-[#1d1d19] dark:text-[#f3f0e8]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex flex-col justify-between gap-7 sm:flex-row sm:items-end lg:mb-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#574cff] dark:text-[#c8ff3d]">Selected work</p>
            <h2 className="text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Recent<br />
              <span className="font-serif font-normal italic">projects.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-[#69675f] dark:text-[#aaa89e]">
            A small selection of identity, web and campaign work made with ambitious teams.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-card group ${index % 2 === 1 ? "md:translate-y-16" : ""}`}>
              <div
                className="relative aspect-[4/3] overflow-hidden border border-[#151515]/10 dark:border-white/10"
                style={{ backgroundColor: project.background }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute right-5 top-5 grid size-12 translate-y-3 place-items-center rounded-full bg-[#151515] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4 border-t border-[#151515]/30 pt-4 dark:border-white/30">
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">{project.title}</h3>
                  <p className="mt-1 text-sm text-[#69675f] dark:text-[#aaa89e]">{project.category}</p>
                </div>
                <span className="text-sm font-semibold">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
