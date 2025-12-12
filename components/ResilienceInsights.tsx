import { motion } from "framer-motion";

type Insight = {
  label: string;
  description: string;
  stat: string;
  statLabel: string;
};

type ResilienceInsightsProps = {
  insights: Insight[];
};

export function ResilienceInsights({ insights }: ResilienceInsightsProps) {
  return (
    <section className="relative mt-20 overflow-hidden rounded-3xl border border-emerald-200/20 bg-gradient-to-br from-emerald-500/10 via-dusk to-night p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,247,214,0.25),transparent_55%)] blur-3xl opacity-70" />
      <div className="relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Resilience markers we mapped
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-emerald-100/80 md:text-base">
              Every survivor testimony provided insights into decision-making
              under extreme duress. These markers now inform training playbooks
              for emergency responders and cabin crew alike.
            </p>
          </div>
          <div className="rounded-full border border-emerald-200/40 bg-emerald-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-100">
            Debrief compiled · 41 days post-incident
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ delay: index * 0.12, duration: 0.8, ease: "easeOut" }}
              className="rounded-3xl border border-emerald-200/20 bg-emerald-300/5 p-6 text-emerald-50"
            >
              <header className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{insight.label}</h3>
                <span className="text-2xl font-semibold text-emerald-200">{insight.stat}</span>
              </header>
              <p className="mt-3 text-sm text-emerald-100/80">{insight.description}</p>
              <div className="mt-5 text-xs uppercase tracking-[0.3em] text-emerald-100/60">
                {insight.statLabel}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
