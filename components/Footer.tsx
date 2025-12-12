export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/50 p-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200/70">
          Flight N4173 Incident Archive
        </div>
        <p className="mt-2 max-w-2xl text-slate-400/80">
          Collection curated by the Civil Aviation Response Unit. Content compiled from the
          cockpit voice recorder, FDR analytics, and survivor interviews.
        </p>
      </div>
      <div className="flex items-center gap-6 text-slate-400/70">
        <span>Data Release v1.0</span>
        <span>Updated 41 days post-event</span>
      </div>
    </footer>
  );
}
