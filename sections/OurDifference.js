import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { DIFFERENCES } from "@/constants/differences";
import styles from "./OurDifference.module.css";

/* Per-card color class from the CSS module — applied to the watermark number */
const COLOR_CLASSES = [
  styles.colorBlue, // 01
  styles.colorGreen, // 02
  styles.colorPink, // 03
  styles.colorPurple, // 04
];

/* ──────────────────────────────────────────────
   Explode-from-center animation
   All 4 cards start collapsed at the center cross,
   then push outward to their corners simultaneously.
   ────────────────────────────────────────────── */
function cardVariants(i) {
  return {
    hidden: {
      x: i % 2 === 0 ? "50%" : "-50%",
      y: i < 2 ? "50%" : "-50%",
      scale: 0.9,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };
}

export default function OurDifference() {
  return (
    <section className="section-y bg-surface px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto w-full max-w-[1360px]">
        <SectionHeading
          eyebrow="OUR DIFFERENCE"
          title="Where Traders & Homeowners Both Win"
          subtitle="From first brief to final delivery. MAI gives you the tools, talent, and transparency to build with confidence."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid md:grid-cols-2"
        >
          {DIFFERENCES.map((item, i) => {
            const isLeftCol = i % 2 === 0;
            const isTopRow = i < 2;
            const isLast = i === DIFFERENCES.length - 1;

            return (
              <motion.div
                key={item.n}
                variants={cardVariants(i)}
                className={[
                  "relative flex flex-col p-6",
                  // Mobile: thin bottom border between items
                  !isLast && "border-b border-gray-200 md:border-b-0",
                  // Desktop: vertical cross line — right border on left column
                  isLeftCol && "md:border-r md:border-gray-200",
                  // Desktop: horizontal cross line — bottom border on top row
                  isTopRow && "md:border-b md:border-gray-200",
                  // Desktop padding — push content away from the dividers
                  isLeftCol ? "md:pl-0 md:pr-12" : "md:pl-12 md:pr-0",
                  isTopRow ? "md:pt-0 md:pb-14" : "md:pt-14 md:pb-0",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Watermark number — z-0, behind title */}
                <span
                  aria-hidden="true"
                  className={`${styles.watermark} ${
                    COLOR_CLASSES[i % COLOR_CLASSES.length]
                  }`}
                >
                  {item.n}
                </span>

                {/* Title — z-10, overlaps the bottom half of the number */}
                <h3 className={styles.title}>{item.title}</h3>

                {/* Body */}
                <p className={styles.body}>{item.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}