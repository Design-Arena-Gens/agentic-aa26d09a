import { motion } from "framer-motion";

const motionProps = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
};

const cloudVariants = {
  animate: {
    x: ["0%", "-40%"],
    transition: {
      x: {
        repeat: Infinity,
        duration: 35,
        ease: "linear"
      }
    }
  }
};

export function HeroScene() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-gradient-to-br from-dusk via-night/90 to-night p-10 shadow-[0_0_120px_rgba(255,120,71,0.15)] lg:p-16">
      <div className="absolute inset-0 aurora opacity-60 blur-3xl" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex-1">
          <motion.span
            {...motionProps}
            className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-emerald-200"
          >
            AFTER THE IMPACT
          </motion.span>
          <motion.h1
            {...motionProps}
            transition={{ ...motionProps.transition, delay: 0.15 }}
            className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            In minutes, a routine ascent became a fight for survival.
          </motion.h1>
          <motion.p
            {...motionProps}
            transition={{ ...motionProps.transition, delay: 0.4 }}
            className="mt-6 max-w-xl text-base text-slate-200/80 md:text-lg"
          >
            Explore the timeline of Flight N4173 as a catastrophic engine failure
            forced an emergency descent and a violent crash that fractured the
            dawn sky. From the wreckage emerged three survivors whose resolve
            rewrote the ending.
          </motion.p>
          <motion.div
            {...motionProps}
            transition={{ ...motionProps.transition, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-200/70"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/60 px-4 py-2">
              <span className="size-2 rounded-full bg-emerald-300 animate-glow-pulse" />
              Live ATC transcript excerpts
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-800/60 px-4 py-2">
              <span className="size-2 rounded-full bg-amber-400 animate-glow-pulse" />
              Survivor testimonies
            </span>
          </motion.div>
        </div>
        <div className="relative mt-8 flex-1 lg:mt-0">
          <div className="grain relative h-80 overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 via-dusk to-slate-950 shadow-[0_60px_120px_-40px_rgba(17,23,41,0.5)]">
            <motion.div
              variants={cloudVariants}
              animate="animate"
              className="absolute -inset-x-1/2 top-12 h-48 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_55%)]"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <PlaneSilhouette />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.65 }}
              className="absolute bottom-6 right-6 flex items-center gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-xs uppercase tracking-[0.35em] text-amber-200"
            >
              Mayday · RR Engine 2 fire
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaneSilhouette() {
  return (
    <svg
      width="320"
      height="220"
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-slate-100/80"
    >
      <g filter="url(#glow)">
        <path
          d="M12 114c1-6 18.5-11 58-22l56-15 4-36c2-18 6-31 10-31h12c4 0 8 13 10 31l4 36 56 15c39.5 11 57 16 58 22 1 6-9 12-32 18l-66 16-16 40c-8 20-13 32-20 32s-12-12-20-32l-16-40-66-16c-23-6-33-12-32-18Z"
          fill="currentColor"
          opacity="0.86"
        />
        <path
          d="M152 106c0-6 4-10 8-10s8 4 8 10-4 10-8 10-8-4-8-10Z"
          fill="#ff7847"
        />
        <path
          d="M168 112c5 10 9 23 12 37 3 15 11 22 22 19s18-9 21-21c2-8 9-14 19-18 15-6 26-13 27-17 1-3-2-4-11-4-13 0-35 3-64 10-6 1-11-1-15-6l-11-13Z"
          fill="url(#fire)"
          opacity="0.75"
        />
      </g>
      <defs>
        <linearGradient
          id="fire"
          x1="196"
          y1="146"
          x2="246"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff7847" />
          <stop offset="0.6" stopColor="#ffd67b" stopOpacity="0.8" />
          <stop offset="1" stopColor="#ff7847" stopOpacity="0.2" />
        </linearGradient>
        <filter
          id="glow"
          x="0"
          y="0"
          width="320"
          height="220"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3" result="blur1" />
          <feComposite in="SourceGraphic" in2="blur1" operator="arithmetic" k2="1" k3="1" />
        </filter>
      </defs>
    </svg>
  );
}
