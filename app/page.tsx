"use client";

import { HeroScene } from "@/components/HeroScene";
import { EventTimeline, type TimelineEvent } from "@/components/EventTimeline";
import { SurvivorSpotlight, type Survivor } from "@/components/SurvivorSpotlight";
import { ResilienceInsights } from "@/components/ResilienceInsights";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const timelineEvents: TimelineEvent[] = [
  {
    timestamp: "05:47:18",
    title: "Rotation and climb",
    summary:
      "Flight N4173 departs Runway 22R with 93 passengers and 6 crew. Weather is clear with a coastal crosswind.",
    details: [
      "Initial climb rate 2,500 ft/min; all gauges nominal.",
      "Cabin interphone records routine climb checks.",
      "Seatbelt sign remains on as aircraft levels through 3,800 ft."
    ],
    tone: "alert"
  },
  {
    timestamp: "05:51:02",
    title: "Engine two surge and fire warning",
    summary:
      "The right Rolls-Royce engine experiences an overpressure surge followed by a compressor stall resulting in an uncontained failure.",
    details: [
      "Cockpit alerts: triple chime · Master Warning · Engine Fire R.",
      "Directional control inputs increase as debris compromises hydraulics.",
      "Flight attendants brief for possible return while cabin reports smell of fuel."
    ],
    atcNote:
      "N4173 heavy, we copy engine fire. You are cleared to return runway 27. Fire crews rolling.",
    tone: "critical"
  },
  {
    timestamp: "05:52:49",
    title: "Loss of control on base turn",
    summary:
      "Hydraulic B pressure collapses; spoilers deploy asymmetrically. The aircraft rolls, entering an unrecoverable attitude.",
    details: [
      "First officer attempts fire bottle discharge; no extinguish light.",
      "Cockpit voice records 'Brace! Brace!' as cabin crew command passengers.",
      "Descent rate exceeds 8,000 ft/min, airspeed spiking beyond Vmo."
    ],
    atcNote: "Tower, 4173 is rolling— we’ve lost two— Mayday Mayday— uncontrolled.",
    tone: "critical"
  },
  {
    timestamp: "05:53:21",
    title: "Impact in marshland",
    summary:
      "Aircraft strikes tidal marsh 4.2 nm short of the runway. Fuselage fractures in three sections; post-impact fire engulfs cabin.",
    details: [
      "Impact force recorded at 6.8g. Right wing detaches and ignites surrounding reeds.",
      "Forward galley collapses, blocking primary exit routes.",
      "Cabin fills with thick, toxic smoke within 22 seconds."
    ],
    tone: "impact"
  },
  {
    timestamp: "05:54:10",
    title: "Self-evacuation and assisted rescue",
    summary:
      "Three survivors breach the portside fuselage seam before responders reach the site.",
    details: [
      "Passenger Leena Ortiz uses beverage cart brace to pry torn hull plating.",
      "First officer Malik Carter, pinned at knees, directs remaining conscious passengers toward opening.",
      "Maintenance engineer Jonah Wright escorts Ortiz and fellow survivor across knee-deep marsh."
    ],
    atcNote: "Rescue 3, we have movement near the port section— survivors emerging— approach with foam.",
    tone: "recovery"
  },
  {
    timestamp: "06:02:37",
    title: "Fire under control · medevac",
    summary:
      "Responders suppress pool fires; survivors are airlifted to St. Aurora Regional within nine minutes of impact.",
    details: [
      "All three sustain burns and blunt-force trauma but remain conscious.",
      "Incident command establishes 2 nm TFR; NTSB notified at 06:04.",
      "Data recorders recovered intact despite thermal damage."
    ],
    tone: "recovery"
  }
];

const survivors: Survivor[] = [
  {
    name: "Leena Ortiz",
    role: "Lead Cabin Attendant",
    injuries: "Second-degree burns · Fractured clavicle · Lung irritation",
    quote:
      "The aisle was a river of smoke. We crawled, counted, and someone kept replying— that meant we still had a chance to be louder than the fire.",
    focus: "PASSENGER EGRESS",
    metric: { label: "Passengers Guided Out", value: "17" }
  },
  {
    name: "Malik Carter",
    role: "First Officer",
    injuries: "Crushed knees · Wrist fractures · Smoke inhalation",
    quote:
      "We rehearsed it a thousand times, but when the panels blew out there was no checklist. Just voices, and making sure the last one I heard was outside the hull.",
    focus: "COCKPIT CALLS",
    metric: { label: "Commands Issued", value: "11" }
  },
  {
    name: "Jonah Wright",
    role: "Passenger · Maintenance Engineer",
    injuries: "Broken ribs · Lacerations · Fuel exposure",
    quote:
      "Metal can be replaced, people cannot. I saw daylight through the seams and refused to believe that was the end of the story for all of us.",
    focus: "FIELD TRIAGE",
    metric: { label: "Survivors Escorted", value: "3" }
  }
];

const insights = [
  {
    label: "Command Voice Continuity",
    description:
      "Consistent, calm directives from the flight deck and cabin crew reduced panic, enabling passengers to locate alternate egress points.",
    stat: "87%",
    statLabel: "Passengers who followed brace order"
  },
  {
    label: "Improvised Escape Route",
    description:
      "A beverage cart, dislodged on impact, became leverage for prying open a fuselage seam— the only breathable pathway.",
    stat: "22s",
    statLabel: "Time before smoke obscured aisle visibility"
  },
  {
    label: "Responder Synchronization",
    description:
      "Airfield units coordinated foam lines with survivor movement to prevent flashover during extraction, sustaining survivable conditions.",
    stat: "9m",
    statLabel: "Medevac wheels-up post-impact"
  }
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <HeroScene />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <EventTimeline events={timelineEvents} />
      </motion.div>
      <SurvivorSpotlight survivors={survivors} />
      <ResilienceInsights insights={insights} />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mt-20 grid gap-8 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-10 md:grid-cols-[1.5fr,1fr]"
      >
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Flight data reconstruction
          </h2>
          <p className="mt-4 text-sm text-slate-200/70 md:text-base">
            Black box data and ATC telemetry were synchronized to rebuild the sequence
            of events shown above. Each marker aligns with recorded altitude,
            control surface deflection, and fire-sensor data points for training
            simulations.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-slate-200/70">
            <li className="flex items-start gap-3">
              <span className="mt-1 size-1.5 rounded-full bg-emerald-300" />
              <span>FDR sample rate: 256 parameters / sec · 12 recovered channels</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 size-1.5 rounded-full bg-emerald-300" />
              <span>CVR scrubbed for personal identifiers yet preserves command cadence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 size-1.5 rounded-full bg-emerald-300" />
              <span>Incident now forms basis for emergency egress drills at 17 carriers</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-700/60 bg-slate-800/50 p-6 text-sm text-slate-200/70">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-300/60">
            Survivor Debrief Excerpt
          </div>
          <p className="mt-4 leading-relaxed text-slate-100/80">
            “When we hit, the world compressed and then stretched. I counted five breaths.
            By the sixth, Leena was already yelling for us to crawl toward the
            blue light— she meant the torn seam. That voice kept me moving.”
          </p>
          <div className="mt-6 text-xs text-slate-400/70">— Jonah Wright · 41 days later</div>
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}
