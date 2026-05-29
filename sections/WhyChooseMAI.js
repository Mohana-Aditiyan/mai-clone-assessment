import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TRADERS } from "@/constants/traders";
import { PLACEHOLDER_HREF } from "@/constants/navigation";

const EASE_OUT = [0.22, 1, 0.36, 1];

/* ──────────────────────────────────────────
   Wave offsets — symmetric 3-card pattern.
   Outer cards pushed down 56px, center at peak.
   ────────────────────────────────────────── */
const WAVE_3 = { "-1": 56, "0": 0, "1": 56 };
const WAVE_1 = { "0": 0 };

/* Visible count: 3 on tablet+, 1 on mobile.
   NEVER 5 — cards stay properly sized. */
function useVisibleCount() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const update = () => setN(window.innerWidth >= 640 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return n;
}

export default function WhyChooseMAI() {
  const [active, setActive] = useState(2);
  const count = useVisibleCount();
  const side = Math.floor(count / 2);
  const wave = count === 3 ? WAVE_3 : WAVE_1;

  const visible = [];
  for (let i = -side; i <= side; i++) {
    const idx = (active + i + TRADERS.length) % TRADERS.length;
    visible.push({ trader: TRADERS[idx], slot: i });
  }

  const prev = () =>
    setActive((i) => (i - 1 + TRADERS.length) % TRADERS.length);
  const next = () => setActive((i) => (i + 1) % TRADERS.length);

  return (
    <section className="section-y bg-surface px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto w-full max-w-[1360px]">
        <SectionHeading
          eyebrow="TRUSTED BY HOMEOWNERS"
          title="Why Choose MAI"
          subtitle="Every trader on MAI is verified, rated, and ready to work, so you get competitive bids from qualified professionals, not random strangers."
        />

        {/* ── Wave carousel — always 3 cards on tablet+ ── */}
        <div className="mt-14 flex min-h-[380px] items-start justify-center gap-4 sm:min-h-[440px] sm:gap-5 lg:min-h-[500px] lg:gap-6 xl:min-h-[560px] xl:gap-8">
          <AnimatePresence mode="popLayout" initial={true}>
            {visible.map(({ trader, slot }) => (
              <motion.a
                key={trader.id ?? trader.name}
                href={trader.href ?? PLACEHOLDER_HREF}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: wave[slot.toString()] ?? 0,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  ease: EASE_OUT,
                  layout: { duration: 0.6, ease: EASE_OUT },
                }}
                className="group relative block aspect-[3/4] w-[240px] flex-none overflow-hidden rounded-2xl bg-gray-300 shadow-card transition-shadow hover:shadow-card-hover sm:w-[260px] lg:w-[300px] xl:w-[340px]"
              >
                {/* Initials centered */}
                <div className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl xl:text-[64px]">
                  {trader.initials}
                </div>

                {/* Name strip — dark navy gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-b from-transparent via-[#003F6B60] to-[#003F6B] py-4 text-center text-white">
                  <p className="text-base font-semibold capitalize lg:text-lg">
                    {trader.name}
                  </p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Navigation arrows ── */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous trader"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next trader"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href={PLACEHOLDER_HREF}
            variant="primary"
            className="px-7 py-3.5"
          >
            View All Traders
          </Button>
        </div>
      </div>
    </section>
  );
}