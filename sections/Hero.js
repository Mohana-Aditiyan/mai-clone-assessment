import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { HERO_ROTATING_PHRASES } from "@/constants/services";
import { stagger, fadeUp, fadeUpSmall, EASE_OUT } from "@/utils/animations";
import { CheckCircle, SearchIcon } from "@/components/icons";
import { PLACEHOLDER_HREF } from "@/constants/navigation";
import Link from "next/link";

const HERO_VIDEO =
  "https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1766055134591-MAI_Landing_Page_Video_(Hero_Section).mp4";

const STATS = [
  "200K+ Trusted Traders",
  "Transparent Bidding System",
  "11K Monthly Active Users",
];

export default function Hero() {
  const rotating = useTypewriter(HERO_ROTATING_PHRASES, {
    typeSpeed: 75,
    deleteSpeed: 35,
    holdTime: 1400,
  });

  return (
    <section className="relative isolate -mt-[88px] flex min-h-[680px] items-center overflow-hidden lg:-mt-[120px] lg:min-h-[760px]">
      {/* ─── Background video ─── */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          poster="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%230E1B3D'/%3E%3C/svg%3E"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep/85" />
        <div className="absolute inset-0 bg-navy-deep/20" />
      </div>

      {/* ─── Content ─── */}
      <div className="container-wide relative z-10 w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          animate="show"
        >
          {/* Headline with typewriter */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]"
          >
            We Find You The{" "}
            <span className="relative whitespace-nowrap text-brand-gold">
              {rotating}
              <span
                className="ml-1 inline-block w-[3px] -translate-y-1 bg-brand-gold align-middle"
                style={{ height: "0.85em" }}
                aria-hidden="true"
              >
                <span className="block h-full w-full animate-blink bg-brand-gold" />
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base text-white/85 sm:text-lg md:text-xl"
          >
            Find Local Trusted Tradespeople in Minutes
          </motion.p>

          {/* Search bar */}
          <motion.form
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="mt-9 flex w-full max-w-2xl items-center gap-2 rounded-pill bg-white p-2 shadow-2xl shadow-navy-deep/30 ring-1 ring-black/5"
            role="search"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search for a service
            </label>
            <input
              id="hero-search"
              type="text"
              placeholder="I Want Local Wall Tilers"
              className="flex-1 bg-transparent px-4 text-base text-ink placeholder:text-ink-muted/70 focus:outline-none"
            />
            <Link
              href={PLACEHOLDER_HREF}
              aria-label="Search"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-soft transition-transform hover:scale-105"
            >
              <SearchIcon className="h-5 w-5" />
            </Link>
          </motion.form>

          {/* Trust stats */}
          <motion.ul
            variants={stagger(0.2, 0.12)}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/90"
          >
            {STATS.map((stat) => (
              <motion.li
                key={stat}
                variants={fadeUpSmall}
                className="flex items-center gap-2"
              >
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>{stat}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Subtle bottom mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface"
      />
    </section>
  );
}
