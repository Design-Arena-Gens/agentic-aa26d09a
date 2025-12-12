import { motion } from "framer-motion";

export type Survivor = {
  name: string;
  role: string;
  injuries: string;
  quote: string;
  focus: string;
  metric: { label: string; value: string };
};

type SurvivorSpotlightProps = {
  survivors: Survivor[];
};

const gradientPalette = [
  "from-sky-400/20 via-sky-500/5 to-slate-900/40",
  "from-rose-400/20 via-rose-500/5 to-slate-900/40",
  "from-emerald-400/20 via-emerald-500/5 to-slate-900/40"
];

export function SurvivorSpotlight({ survivors }: SurvivorSpotlightProps) {
  return (
    <section className="mt-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            The three who made it out
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300/70 md:text-base">
            Amid smoke, ruptured metal, and burning fuel, three passengers forced
            a path to daylight. Their recovery arcs underscore how coordinated
            improvisation and courage can beat the worst odds.
          </p>
        </div>
        <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
          93 aboard · 3 survivors · 8 minutes elapsed
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {survivors.map((survivor, index) => (
          <motion.article
            key={survivor.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ delay: index * 0.1, duration: 0.9, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br ${gradientPalette[index]} p-8`}
          >
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
            <header className="relative flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">{survivor.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-slate-300/60">
                  {survivor.role}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-600/60 bg-slate-800/40 px-4 py-2 text-xs text-slate-200/70">
                {survivor.focus}
              </div>
            </header>
            <p className="mt-6 text-sm leading-relaxed text-slate-200/80">{survivor.quote}</p>
            <div className="mt-6 rounded-2xl border border-slate-600/60 bg-slate-800/50 p-4 text-xs text-slate-200/70">
              <span className="font-medium text-slate-100">{survivor.injuries}</span>
            </div>
            <div className="mt-8 flex items-center justify-between text-emerald-200">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-200/50">
                {survivor.metric.label}
              </span>
              <span className="text-3xl font-semibold text-emerald-100">
                {survivor.metric.value}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
