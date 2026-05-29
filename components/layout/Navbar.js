import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PRIMARY_NAV,
  ACTION_NAV,
  SIGN_IN_DROPDOWN,
  PLACEHOLDER_HREF,
} from "@/constants/navigation";
import {
  ChevronDown,
  PlusIcon,
  SendIcon,
  BriefcaseIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/utils/cn";
import Image from "next/image";

const ICON_MAP = {
  plus: PlusIcon,
  send: SendIcon,
  briefcase: BriefcaseIcon,
};

/* Inline search icon (no need to touch icons.js) */
const SearchIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

/* ─────────────────────────────────────────────────────
   MOTION VARIANTS
   ───────────────────────────────────────────────────── */

const headerVariants = {
  hidden: { y: -120, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const topBarPadding = {
  top: { paddingTop: 14, paddingBottom: 14 },
  scrolled: { paddingTop: 8, paddingBottom: 8 },
};

const logoVariants = {
  top: { scale: 1 },
  scrolled: { scale: 0.82 },
};

const sharedShrink = { duration: 0.35, ease: [0.4, 0, 0.2, 1] };

const panelVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const chevronVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

const searchVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

/* ─────────────────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────────────────── */

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const state = scrolled ? "scrolled" : "top";

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* ─── TOP DARK BAR: logo + search + sign in ───
            relative z-20 lifts the top bar (and its dropdowns)
            ABOVE the bottom nav so panels can extend down freely */}
        <motion.div
          variants={topBarPadding}
          animate={state}
          transition={sharedShrink}
          className={cn(
            "relative z-20 transition-colors duration-300",
            scrolled
              ? "bg-[#0A1929]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.04)]"
              : "bg-[#0A1929]",
          )}
        >
          <div className="mx-auto flex w-full max-w-[1360px] items-center gap-4 px-5 sm:px-6 lg:px-12">
            {/* Logo block */}
            <Link
              href="/"
              aria-label="MAI - We Build Homes"
              className="flex shrink-0 items-center"
            >
              <motion.div
                variants={logoVariants}
                animate={state}
                transition={sharedShrink}
                className="origin-left"
              >
                <Image
                  src="/assets/logo.webp"
                  alt="MAI"
                  width={240}
                  height={120}
                  priority
                  className="h-auto w-[92px] sm:w-[104px] lg:w-[118px]"
                />
              </motion.div>
            </Link>

            {/* Search bar — appears in the middle when scrolled */}
            <div className="hidden min-w-0 flex-1 justify-center md:flex">
              <AnimatePresence>
                {scrolled && (
                  <motion.div
                    key="search"
                    variants={searchVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full max-w-[640px]"
                  >
                    <div className="relative">
                      <input
                        type="search"
                        placeholder="Search Here"
                        aria-label="Search"
                        className="h-11 w-full rounded-full bg-white pl-6 pr-14 text-sm text-gray-800 placeholder:text-gray-400 shadow-sm outline-none focus:ring-2 focus:ring-[#4DB8FF]/40"
                      />
                      <button
                        type="button"
                        aria-label="Search"
                        className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#4DB8FF] to-[#1F5CAC] text-white shadow-md transition-transform hover:scale-105"
                      >
                        <SearchIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right side: Sign In dropdown + mobile hamburger */}
            <div className="ml-auto flex shrink-0 items-center gap-2">
              {/* Sign In — HOVER DROPDOWN */}
              <div
                onMouseEnter={() => setOpenMenu("signin")}
                onMouseLeave={() => setOpenMenu(null)}
                className="relative hidden sm:block"
              >
                <button
                  type="button"
                  className="group flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] py-1.5 pl-1.5 pr-5 text-[13px] font-semibold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#4DB8FF] to-[#1F5CAC]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 text-white"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3 0-9 1.5-9 4.5V20h18v-1.5c0-3-6-4.5-9-4.5Z" />
                    </svg>
                  </span>
                  Sign In
                  <motion.span
                    variants={chevronVariants}
                    animate={openMenu === "signin" ? "open" : "closed"}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex"
                  >
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </motion.span>
                </button>

                {/* Sign In dropdown panel */}
                <AnimatePresence>
                  {openMenu === "signin" && (
                    <motion.div
                      variants={panelVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ transformOrigin: "top right" }}
                      className="absolute right-0 top-full mt-2 min-w-[200px] rounded-xl border border-white/10 bg-[#0A1929]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md"
                    >
                      {SIGN_IN_DROPDOWN.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-[13px] text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="rounded-full p-2 text-white transition-colors hover:bg-white/5 lg:hidden"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ─── BOTTOM NAV ROW — stays visible on scroll, sits BELOW the top bar in z-order ─── */}
        <nav
          className={cn(
            "relative z-10 hidden h-[52px] overflow-visible border-t border-white/[0.06] transition-colors duration-300 lg:block",
            scrolled
              ? "bg-[#0F2238]/90 backdrop-blur-md"
              : "bg-[#0F2238]/75 backdrop-blur-sm",
          )}
        >
          <div className="mx-auto flex h-[52px] w-full max-w-[1360px] items-center justify-between px-5 text-[13px] sm:px-6 lg:px-12">
            {/* Primary nav (left) */}
            <ul className="flex items-center gap-9 text-white/85">
              {PRIMARY_NAV.map((item) => (
                <li
                  key={item.label}
                  onMouseEnter={() =>
                    item.hasDropdown && setOpenMenu(item.label)
                  }
                  onMouseLeave={() => setOpenMenu(null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className="group inline-flex h-[52px] items-center gap-1 font-medium transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <motion.span
                        variants={chevronVariants}
                        animate={openMenu === item.label ? "open" : "closed"}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-flex"
                      >
                        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                      </motion.span>
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.hasDropdown && openMenu === item.label && (
                      <motion.div
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ transformOrigin: "top left" }}
                        className="absolute left-0 top-full min-w-[220px] rounded-xl border border-white/10 bg-[#0A1929]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md"
                      >
                        {(item.children || []).map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 text-[13px] text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            <ul className="flex h-[52px] items-center divide-x divide-white/[0.12] text-white">
              {ACTION_NAV.map((item) => {
                const Icon = ICON_MAP[item.icon];
                return (
                  <li key={item.label} className="h-[52px]">
                    <Link
                      href={item.href}
                      className="group flex h-full items-center gap-2.5 px-5 text-[12.5px] font-bold uppercase tracking-[0.06em] transition-colors hover:text-white"
                    >
                      <motion.span
                        whileHover={{ scale: 1.08, rotate: -8 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 18,
                        }}
                        className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4DB8FF] to-[#1F5CAC] text-white shadow-[0_4px_14px_rgba(31,92,172,0.45)]"
                      >
                        <Icon className="h-3 w-3" />
                      </motion.span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </motion.header>

      <div aria-hidden="true" className="h-[68px] lg:h-[124px]" />

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

const drawerListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.18 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const drawerItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: 24,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

function MobileMenu({ onClose }) {
  return (
    <motion.div
      key="mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] lg:hidden"
    >
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-[#0A1929] p-6 text-white shadow-2xl"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-2xl font-extrabold">
            MAI
            <sup className="ml-0.5 align-super text-[10px] font-normal text-white/80">
              ®
            </sup>
          </span>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-white/10"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <motion.ul
          variants={drawerListVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col gap-1"
        >
          {PRIMARY_NAV.map((item) => (
            <motion.li key={item.label} variants={drawerItemVariants}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-medium hover:bg-white/5"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 opacity-60" />
                )}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="my-6 h-px bg-white/10" />

        <motion.ul
          variants={drawerListVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col gap-2"
        >
          {ACTION_NAV.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.li key={item.label} variants={drawerItemVariants}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-3 text-[13px] font-bold uppercase tracking-[0.06em]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4DB8FF] to-[#1F5CAC]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {item.label}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <Link
          href={PLACEHOLDER_HREF}
          onClick={onClose}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4DB8FF] to-[#1F5CAC] py-3 text-sm font-semibold text-white shadow-lg"
        >
          Sign In
        </Link>
      </motion.div>
    </motion.div>
  );
}