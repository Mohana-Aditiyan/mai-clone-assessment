import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  fadeUp,
  stagger,
  inViewOnce,
} from "@/utils/animations";
import { PLACEHOLDER_HREF } from "@/constants/navigation";

const BANNER =
  "https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775571051447-construction-site-with-cranes-european-business-quarter-daylight-wide-angle-nikon-z9-30mm-lens_1.png";

export default function CTABanner() {
  return (
    <section className="bg-surface py-10 lg:py-16">
      <Container>
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="relative isolate overflow-hidden rounded-3xl"
        >
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={BANNER}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-amber-700/10 to-black/35" />
          </div>

          <div className="grid gap-6 px-6 py-16 text-center sm:px-12 md:py-24">
            <motion.h2
              variants={fadeUp}
              className="mx-auto max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              Ready To Get Started?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-2xl text-base text-white/85 md:text-lg"
            >
              Have 10 minutes? Check out our case studies. We&apos;ve been in
              the industry for more than a decade. So there&apos;s lots of
              exciting stuff in here.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center pt-4">
              <Link
                href={PLACEHOLDER_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-white px-10 py-3.5 text-sm font-bold text-navy shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                Sign Up Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
