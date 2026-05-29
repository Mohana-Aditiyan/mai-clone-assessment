import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/constants/projects";
import { PLACEHOLDER_HREF } from "@/constants/navigation";
import { MapPinIcon } from "@/components/icons";

/* ────────────────────────────────────────────
   MOTION — matches original myproject.ai timing
   ──────────────────────────────────────────── */
const EASE_OUT = [0.22, 1, 0.36, 1];

const headerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/* Per-card hover accents — cycles through colors by index (matches original) */
const CARD_ACCENTS = [
  {
    border: "hover:border-b-indigo-500",
    shadow: "hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3)]",
  },
  {
    border: "hover:border-b-rose-500",
    shadow: "hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)]",
  },
  {
    border: "hover:border-b-orange-500",
    shadow: "hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.3)]",
  },
  {
    border: "hover:border-b-teal-500",
    shadow: "hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.3)]",
  },
];

export default function RealProjects() {
  return (
    <section className="section-y bg-surface px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto w-full max-w-[1360px]">
        {/* ── Top row: left heading + right CTA ── */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <motion.span variants={headerItem} className="eyebrow">
              REAL WORK, REAL RESULTS
            </motion.span>
            <motion.h2 variants={headerItem} className="heading-section mt-3">
              Explore Real UK Projects
            </motion.h2>
            <motion.p variants={headerItem} className="mt-4 text-lead">
              From loft conversions in Leeds to boiler installs in Bristol.
            </motion.p>
          </div>
          <motion.div variants={headerItem}>
            <Button
              href={PLACEHOLDER_HREF}
              variant="primary"
              className="px-7 py-3.5"
            >
              Explore Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Card grid ── */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROJECTS.map((p, i) => (
            <motion.div key={p.id} variants={cardItem} className="h-full">
              <ProjectCard
                project={p}
                accent={CARD_ACCENTS[i % CARD_ACCENTS.length]}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, accent }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border-b-[4px] border-b-transparent bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out ${accent.border} ${accent.shadow}`}
    >
      {/* ── Image with status badge ── */}
      <div className="relative h-[220px] overflow-hidden bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Status badge — top-right, deep-emerald with backdrop blur, glowing dot */}
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-[#064e3b]/85 px-3.5 py-1 shadow-sm backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#34d399] shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span className="text-[11px] font-semibold tracking-wide text-white">
            {project.status}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#0F7BA2]">
          {project.category}
        </p>
        <h3 className="mt-1 line-clamp-1 text-[19px] font-bold leading-snug text-[#333333]">
          {project.title}
        </h3>

        <div className="mt-auto">
          {/* Manual divider line — matches original */}
          <div className="my-4 h-px w-full bg-gray-100" />

          <div className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-1.5 text-gray-400">
              <MapPinIcon className="h-4 w-4 shrink-0" />
              <span className="truncate text-sm font-medium text-[#6788AA]">
                {project.location}
              </span>
            </span>
            <span className="shrink-0 text-sm font-bold text-[#008000]">
              {project.timeline}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}