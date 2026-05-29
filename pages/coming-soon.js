import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/utils/animations";
import { ArrowRight, SparkleIcon } from "@/components/icons";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon | MAI</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep px-6 text-white">
        {/* Decorative grid + glows */}
        <div className="pointer-events-none absolute inset-0 bg-grid-navy bg-grid-lg opacity-40" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-700/15 blur-3xl" />

        <motion.div
          variants={stagger(0.05, 0.12)}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg"
          >
            <SparkleIcon className="h-8 w-8 text-navy" />
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="mt-8 eyebrow text-brand-blue-light"
          >
            COMING SOON
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl"
          >
            Page is under{" "}
            <span className="bg-gradient-to-b from-sky-300 to-sky-500 bg-clip-text text-transparent">
              development
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-base text-white/65 md:text-lg"
          >
            Feature will be updated soon. We&apos;re crafting something great
            for you — check back in a little while.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-pill bg-white px-8 py-3.5 text-sm font-bold text-navy shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-16 flex items-center gap-2 text-xs text-white/40"
          >
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            All systems operational
          </motion.p>
        </motion.div>
      </main>
    </>
  );
}
