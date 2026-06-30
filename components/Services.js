import { ArrowUpRight, Brush, Code2, Megaphone, Shapes } from "lucide-react";

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "Clear, useful interfaces shaped around real people and real business goals.",
    icon: Shapes,
    color: "#c8ff3d",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern tools and careful attention to detail.",
    icon: Code2,
    color: "#8e85ff",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Distinct identities, visual systems and guidelines that keep your brand consistent.",
    icon: Brush,
    color: "#ff7a57",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Creative campaigns and content designed to earn attention and build momentum.",
    icon: Megaphone,
    color: "#69d7ff",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#151515] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 grid gap-7 border-b border-white/20 pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#c8ff3d]">
              What we do
            </p>
            <h2 className="text-[clamp(3rem,6.5vw,6.7rem)] font-black uppercase leading-[0.85] tracking-[-0.075em]">
              Built for
              <br />
              <span className="font-serif font-normal italic text-[#c8ff3d]">impact.</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-white/60 lg:justify-self-end lg:text-lg">
            From the first sketch to the final launch, we bring strategy, design and
            code together under one roof.
          </p>
        </div>

        <div className="grid border-l border-t border-white/15 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="service-card group relative min-h-[320px] overflow-hidden border-b border-r border-white/15 p-7 sm:p-9"
                style={{ "--card-color": service.color }}
              >
                <div className="relative z-10 flex h-full min-h-[250px] flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold text-white/40">/{service.number}</span>
                    <span
                      className="grid size-14 place-items-center rounded-full text-[#151515] transition duration-500 group-hover:rotate-12 group-hover:scale-110"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                      {service.title}
                      <ArrowUpRight
                        size={23}
                        className="opacity-0 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </h3>
                    <p className="max-w-md leading-relaxed text-white/55 transition-colors group-hover:text-white/80">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
