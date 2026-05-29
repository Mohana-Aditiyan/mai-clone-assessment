import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { STEPS } from "@/constants/steps";
import { PLACEHOLDER_HREF } from "@/constants/navigation";
import { inViewOnce } from "@/utils/animations";

/* ──────────────────────────────────────────────
   MOTION — timing matches the original
   ──────────────────────────────────────────────
   Original behavior:
     - Step 1 fires at 200ms, then 450ms, 700ms, 950ms → 250ms between each
     - Each step animates over 1000ms with ease-out
     - Connector line fills over 2000ms (synchronized with the steps reveal)
*/
const EASE_OUT = [0.22, 1, 0.36, 1];

const stepsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const stepItem = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: EASE_OUT },
  },
};

export default function HowItWorks() {
  return (
    <section className="section-y bg-white px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto w-full max-w-[1360px]">
        <SectionHeading
          eyebrow="SIMPLE PROCESS"
          title="How To Find Verified Traders"
          subtitle="Find trusted professionals in 4 simple steps"
        />

        <div className="relative mt-16">
          {/* ── Horizontal connector (md+) ── */}
          {/* Base gray line — always visible */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[64px] hidden h-px bg-gray-200 md:block lg:top-[80px]"
          />
          {/* Animated green gradient fill — original uses #0C7A56 → #CBECE2 over 2s */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={inViewOnce}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            style={{ transformOrigin: "left center" }}
            className="absolute left-[12.5%] right-[12.5%] top-[64px] hidden h-px bg-gradient-to-r from-[#0C7A56] to-[#CBECE2] md:block lg:top-[80px]"
          />

          {/* ── Vertical connector (mobile) ── */}
          <div
            aria-hidden="true"
            className="absolute bottom-[10%] left-1/2 top-[80px] w-px -translate-x-1/2 bg-gray-200 md:hidden"
          />
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={inViewOnce}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            style={{ transformOrigin: "top center" }}
            className="absolute bottom-[10%] left-1/2 top-[80px] w-px -translate-x-1/2 bg-gradient-to-b from-[#0C7A56] to-[#CBECE2] md:hidden"
          />

          {/* ── Steps grid ── */}
          <motion.div
            variants={stepsContainer}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
            className="relative z-10 grid gap-14 md:grid-cols-4 md:gap-4"
          >
            {STEPS.map((step) => (
              <motion.div
                key={step.n}
                variants={stepItem}
                className="flex flex-col items-center text-center"
              >
                <div className="relative">
                  {/* Circle image */}
                  <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-card ring-1 ring-black/5 lg:h-40 lg:w-40">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 128px, 160px"
                      className="object-cover"
                    />
                  </div>
                  {/* Number badge — dark green, white ring creates the halo from the screenshot */}
                  <span className="absolute right-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#0C7A56] text-sm font-bold text-white shadow-md ring-4 ring-white lg:right-1">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            href={PLACEHOLDER_HREF}
            variant="primary"
            className="px-9 py-3.5"
          >
            Post Your Project Now
          </Button>
        </div>
      </div>
    </section>
  );
}