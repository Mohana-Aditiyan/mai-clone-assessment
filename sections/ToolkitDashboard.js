import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ChevronDown,
  StarIcon,
  MapPinIcon,
  SparkleIcon,
} from "@/components/icons";
import { fadeUp, stagger, inViewOnce } from "@/utils/animations";

export default function ToolkitDashboard() {
  return (
    <section className="section-y bg-surface px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto w-full max-w-[1360px]">
        <SectionHeading
          eyebrow="YOUR MAI TOOLKIT"
          title="Unlock Powerful Tools After Sign Up"
          subtitle={
            <>
              Everything You Need to{" "}
              <span className="font-semibold text-brand-blue">
                Hire the Right Tradesperson
              </span>
            </>
          }
        />

        <motion.div
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="h-full">
            <DashboardCard />
          </motion.div>
          <motion.div variants={fadeUp} className="h-full">
            <PostcodeCard />
          </motion.div>
          <motion.div variants={fadeUp} className="h-full">
            <WriteAICard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   Shared sub-card style — used inside every mockup
   ──────────────────────────────────────────────────── */
const SUB_CARD = "rounded-2xl bg-white ring-1 ring-black/5 shadow-soft";

const PILL_CHIP =
  "flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-ink-muted ring-1 ring-black/5";

/* ─── Card 1: Dashboard with chart ─── */
function DashboardCard() {
  return (
    <div className="card-base card-hover flex h-full flex-col overflow-hidden p-6 lg:p-7">
      <h3 className="text-center text-2xl font-bold text-navy">Dashboard</h3>
      <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-ink-muted">
        Keep track of every job in one clean dashboard, from your first quote
        request to the final sign-off.
      </p>

      <div className="mt-7 flex flex-1 flex-col gap-3" style={{ minHeight: 280 }}>
        {/* Chart card */}
        <div className={`${SUB_CARD} flex flex-1 flex-col p-4`}>
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-navy">Project Overview</p>
            <button type="button" className={PILL_CHIP}>
              This Year - 2026
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>

          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-medium text-ink-muted">
            <LegendDot color="bg-navy-600" label="Posted" />
            <LegendDot color="bg-sky-400" label="Active" />
            <LegendDot color="bg-amber-400" label="Pending" />
            <LegendDot color="bg-emerald-500" label="Completed" />
          </ul>

          <div className="mt-auto flex flex-col">
            <ChartBars />
            <div className="mt-2 grid grid-cols-4 text-center text-[10px] font-medium text-ink-muted">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
            </div>
          </div>
        </div>

        {/* Rating row */}
        <div className={`${SUB_CARD} flex items-center justify-between px-4 py-3`}>
          <div className="flex items-center gap-1.5">
            <StarIcon className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-bold text-navy">4.6</span>
          </div>
          <button type="button" className={PILL_CHIP}>
            All Time
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <li className="flex items-center gap-1.5">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label} Project
    </li>
  );
}

function ChartBars() {
  const data = [
    [25, 18, 22, 15],
    [30, 22, 28, 18],
    [38, 28, 24, 30],
    [42, 35, 28, 22],
  ];
  const colors = ["bg-navy-600", "bg-sky-400", "bg-amber-400", "bg-emerald-500"];

  return (
    <div className="mt-4 flex h-32 items-end justify-between gap-2">
      {data.map((group, i) => (
        <div key={i} className="flex flex-1 items-end justify-center gap-0.5">
          {group.map((h, j) => (
            <motion.div
              key={j}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={inViewOnce}
              transition={{
                duration: 0.7,
                delay: 0.05 * (i * 4 + j),
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`w-2.5 origin-bottom rounded-t-sm ${colors[j]}`}
              style={{ height: `${h * 2}px` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─── Card 2: Search with Postcode ─── */
function PostcodeCard() {
  return (
    <div className="card-base card-hover flex h-full flex-col overflow-hidden p-6 lg:p-7">
      <h3 className="text-center text-2xl font-bold text-navy">
        Search With Postcode
      </h3>
      <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-ink-muted">
        Find tradespeople near you, just enter your county and browse verified,
        rated tradespeople in your area.
      </p>

      <div className="mt-7 grid flex-1 grid-cols-5 gap-3" style={{ minHeight: 280 }}>
        <div className="col-span-2 flex flex-col justify-center gap-2">
          {[
            { n: "EP", name: "Eleanor Pena", code: "AL5 2TR", rating: "4.8" },
            { n: "DL", name: "Devon Lane", code: "England", rating: "4.2" },
            { n: "WW", name: "Wade Warren", code: "England", rating: "4.0" },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${SUB_CARD} flex items-center gap-2 px-2 py-2`}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 to-sky-400 text-[10px] font-bold text-navy">
                {p.n}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-navy">
                  {p.name}
                </p>
                <p className="truncate text-[10px] text-ink-muted">{p.code}</p>
              </div>
              <div className="flex items-center gap-0.5 text-[10px] font-bold text-amber-500">
                <StarIcon className="h-2.5 w-2.5" />
                {p.rating}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative col-span-3 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-soft ring-1 ring-black/5">
          <MapMock />
        </div>
      </div>
    </div>
  );
}

function MapMock() {
  const pins = [
    { x: 30, y: 30 },
    { x: 65, y: 25 },
    { x: 45, y: 50 },
    { x: 70, y: 60 },
    { x: 25, y: 70 },
  ];
  return (
    <div className="absolute inset-0">
      <svg
        className="absolute inset-0 h-full w-full text-emerald-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        viewBox="0 0 120 120"
        preserveAspectRatio="none"
      >
        <path d="M0 30 Q40 35, 80 25 T120 40" />
        <path d="M0 60 Q40 55, 80 70 T120 60" />
        <path d="M30 0 Q35 40, 25 80 T40 120" />
        <path d="M70 0 Q75 40, 65 80 T80 120" />
      </svg>
      {pins.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, y: -8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <MapPinIcon className="h-5 w-5 text-brand-blue drop-shadow" />
        </motion.div>
      ))}
      <div className="absolute bottom-2 right-2 rounded bg-white/80 px-1.5 py-0.5 text-[8px] font-medium text-navy">
        London
      </div>
    </div>
  );
}

/* ─── Card 3: Write with AI ─── */
function WriteAICard() {
  return (
    <div className="card-base card-hover flex h-full flex-col overflow-hidden p-6 lg:p-7">
      <h3 className="text-center text-2xl font-bold text-navy">Write With AI</h3>
      <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-ink-muted">
        Not sure how to describe your project? Our AI helps you write a clear,
        detailed brief in seconds. Just answer a few questions, we do the rest.
      </p>

      <div
        className="mt-7 flex flex-1 flex-col justify-center gap-3"
        style={{ minHeight: 280 }}
      >
        <div className={`${SUB_CARD} px-4 py-3 text-sm font-semibold text-navy`}>
          Modern Kitchen Renovation
        </div>
        <div className={`${SUB_CARD} px-4 py-3 text-xs leading-relaxed text-ink-muted`}>
          This project involves renovating an existing kitchen to enhance
          functionality, layout efficiency, and overall aesthetics. The space
          measures roughly 12x15 feet…
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className="group mx-auto mt-2 flex items-center gap-2 rounded-pill bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-bold text-navy shadow-soft"
        >
          <SparkleIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />
          Write with MAI AI
        </motion.button>
      </div>
    </div>
  );
}