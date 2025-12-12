import { motion } from "framer-motion";

export type TimelineEvent = {
  timestamp: string;
  title: string;
  summary: string;
  details: string[];
  atcNote?: string;
  tone: "alert" | "critical" | "impact" | "recovery";
};

const toneStyles: Record<TimelineEvent["tone"], string> = {
  alert: "border-amber-400/40 bg-amber-400/10",
  critical: "border-red-500/40 bg-red-500/10",
  impact: "border-orange-500/40 bg-orange-500/10",
  recovery: "border-emerald-400/30 bg-emerald-400/10"
};

const toneAccent: Record<TimelineEvent["tone"], string> = {
  alert: "from-amber-200 to-amber-500/60",
  critical: "from-red-300 to-red-600/70",
  impact: "from-orange-300 to-orange-500/80",
  recovery: "from-emerald-200 to-emerald-500/80"
};

type EventTimelineProps = {
  events: TimelineEvent[];
};

export function EventTimeline({ events }: EventTimelineProps) {
  return (
    <section className="relative mt-16 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-10 shadow-[0_40px_120px_-50px_rgba(9,12,20,0.8)]">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" />
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        The eight minutes that reshaped ninety-three lives
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-slate-300/70 md:text-base">
        Reconstructed from flight data recorder samples and tower transcripts,
        this timeline charts the cascading failures and human responses that
        followed the first spark in engine two.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {events.map((event, index) => (
          <motion.article
            key={event.timestamp}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.8, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-3xl border p-6 ${toneStyles[event.tone]}`}
          >
            <div
              className={`absolute -left-px top-6 h-14 w-1 rounded-r-full bg-gradient-to-b ${toneAccent[event.tone]}`}
            />
            <span className="text-xs uppercase tracking-[0.3em] text-slate-200/60">
              {event.timestamp}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-white">{event.title}</h3>
            <p className="mt-2 text-sm text-slate-200/80">{event.summary}</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-200/70">
              {event.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start gap-3">
                  <span className="mt-1 size-1.5 rounded-full bg-current opacity-50" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            {event.atcNote && (
              <blockquote className="mt-5 rounded-2xl border border-slate-700/50 bg-slate-800/50 p-4 text-xs text-slate-300/80">
                <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">
                  Tower / Flight Deck Excerpt
                </span>
                “{event.atcNote}”
              </blockquote>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
