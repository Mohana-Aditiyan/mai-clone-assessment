import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/constants/services";
import { PLACEHOLDER_HREF } from "@/constants/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeUp, inViewOnce } from "@/utils/animations";

export default function ServicesMarquee() {
  return (
    <section className="section-y bg-surface px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto w-full max-w-[1360px]">
        {/* ── Header ── */}
        <SectionHeading
          eyebrow="GET ANY HOME REPAIR DONE"
          title="Looking For A Service?"
          subtitle={
            <>
              From a dripping tap to a full loft conversion find the right{" "}
              <span className="font-semibold text-brand-blue underline-offset-4 hover:underline">
                verified tradesperson
              </span>{" "}
              for any job.
            </>
          }
        />

        {/* ── Marquee — now padded, scrolls within the section boundaries.
              mask-fade-x creates the soft fade at the padded edges. ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-12 mask-fade-x"
        >
          <Marquee items={SERVICES} duration={60} />
        </motion.div>

        {/* ── Footer button ── */}
        <div className="mt-12 flex justify-center">
          <Button
            href={PLACEHOLDER_HREF}
            variant="primary"
            className="px-9 py-3.5"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

function Marquee({ items, duration = 60 }) {
  // Duplicate once so translateX(-50%) creates a seamless loop —
  // when the first copy fully exits the viewport, the second copy
  // is exactly where the first started.
  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((s, i) => (
          <ServiceCard key={`${s.label}-${i}`} item={s} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ item }) {
  return (
    <div className="group/card flex shrink-0 flex-col items-center">
      <div className="relative h-[160px] w-[160px] overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 group-hover/card:shadow-md sm:h-[180px] sm:w-[180px] lg:h-[200px] lg:w-[200px]">
        <Image
          src={item.image}
          alt={item.label}
          fill
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
        />
      </div>
      <p className="mt-3 max-w-[160px] text-center text-xs font-medium text-gray-700 md:text-sm lg:max-w-[200px] lg:text-base">
        {item.label}
      </p>
    </div>
  );
}