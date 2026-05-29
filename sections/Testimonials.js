import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { TESTIMONIALS } from "@/constants/testimonials";
import {
  fadeUp,
  stagger,
  fadeUpSmall,
  inViewOnce,
} from "@/utils/animations";
import { QuoteIcon } from "@/components/icons";

export default function Testimonials() {
  return (
    // Transparent section — the page-level fixed background image shows through here.
    <section className="relative">
      <Container className="relative z-10 py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Heading column */}
          <motion.div
            variants={stagger(0, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
            className="lg:col-span-5"
          >
            <motion.span
              variants={fadeUpSmall}
              className="eyebrow text-sky-300"
            >
              WHAT PEOPLE SAY
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              The Proof Is In The Pudding
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-white/80"
            >
              Tradespeople are winning, homeowners are relieved. Don&apos;t take
              our word for it, here&apos;s what real MAI users across the UK
              have to say.
            </motion.p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={stagger(0.05, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
            className="grid gap-5 sm:grid-cols-2 lg:col-span-7"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} variants={fadeUp}>
                <TestimonialCard data={t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ data }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card-hover"
    >
      <QuoteIcon className="h-8 w-8 text-navy" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        “{data.quote}
      </p>
      <div className="mt-6">
        <p className="font-bold text-navy">{data.name}</p>
        <p className="mt-0.5 text-sm text-ink-muted">{data.city}</p>
      </div>
    </motion.div>
  );
}