import Link from "next/link";
import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpSmall,
  stagger,
  inViewOnce,
} from "@/utils/animations";
import { FOOTER_NAV, PLACEHOLDER_HREF } from "@/constants/navigation";
import {
  FacebookIcon,
  XIcon,
  YouTubeIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ArrowUpRight,
} from "@/components/icons";

export default function Footer() {
  const footerRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!footerRef.current || !glowRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.setProperty("--mx", `${x}px`);
    glowRef.current.style.setProperty("--my", `${y}px`);
    glowRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = "0";
  }, []);

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-navy-deep text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-navy bg-grid-lg opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-700/10 blur-3xl"
      />

      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(125, 211, 252, 0.55) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(125, 211, 252, 0.55) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          WebkitMaskImage:
            "radial-gradient(circle 240px at var(--mx, -300px) var(--my, -300px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 75%)",
          maskImage:
            "radial-gradient(circle 240px at var(--mx, -300px) var(--my, -300px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, transparent 75%)",
        }}
      />

      <div className="container-wide relative z-10 py-20 lg:py-28">
        <motion.div
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={fadeUpSmall}
              className="eyebrow text-brand-blue-light"
            >
              START TODAY — IT&apos;S FREE
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
            >
              Let&apos;s{" "}
              <span className="bg-gradient-to-b from-sky-300 to-sky-500 bg-clip-text text-transparent">
                Build
              </span>{" "}
              <br />
              Our Nation Great.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base text-white/65 lg:text-lg"
            >
              Connect with verified UK tradespeople or find your next project.
              MAI brings the right people together.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link
              href={PLACEHOLDER_HREF}
              className="inline-flex items-center gap-2 rounded-pill bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-deep"
            >
              Post a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={PLACEHOLDER_HREF}
              className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="font-display text-3xl font-extrabold">
              MAI<sup className="text-[0.45em]">®</sup>
            </div>
            <p className="mt-1 text-[0.65rem] tracking-[0.25em] text-white/60">
              We Build Homes
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              A premier platform connecting homeowners with certified, skilled
              Traders across the UK.
            </p>

            {/* Social */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <SocialIcon href={PLACEHOLDER_HREF} bg="bg-[#1877F2]" label="Facebook"><FacebookIcon /></SocialIcon>
              <SocialIcon href={PLACEHOLDER_HREF} bg="bg-black" label="X"><XIcon /></SocialIcon>
              <SocialIcon href={PLACEHOLDER_HREF} bg="bg-[#FF0033]" label="YouTube"><YouTubeIcon /></SocialIcon>
              <SocialIcon href={PLACEHOLDER_HREF} bg="bg-gradient-to-br from-amber-500 via-pink-500 to-purple-600" label="Instagram"><InstagramIcon /></SocialIcon>
              <SocialIcon href={PLACEHOLDER_HREF} bg="bg-[#0077B5]" label="LinkedIn"><LinkedInIcon /></SocialIcon>
              <SocialIcon href={PLACEHOLDER_HREF} bg="bg-[#25D366]" label="WhatsApp"><WhatsAppIcon /></SocialIcon>
            </div>
          </div>

          <FooterLinks title="Company" links={FOOTER_NAV.Company} />

          <FooterLinks title="Platform" links={FOOTER_NAV.Platform} />

          <div>
            <h4 className="eyebrow text-white/50">Contact</h4>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5">
                  <MapPinIcon className="h-3.5 w-3.5" />
                </span>
                <span className="leading-relaxed">
                  1 De La Warr Way, Cambourne,
                  <br />
                  Cambridge CB23 6DX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5">
                  <PhoneIcon className="h-3.5 w-3.5" />
                </span>
                <a href="tel:+442080043345" className="hover:text-white">
                  +44 208 004 3345
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5">
                  <MailIcon className="h-3.5 w-3.5" />
                </span>
                <a href="mailto:info@myproject.ai" className="hover:text-white">
                  info@myproject.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Copyright row ─── */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>© 2026 myproject.ai — All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children, href, bg, label }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-200 hover:scale-110 ${bg}`}
    >
      {children}
    </Link>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="eyebrow text-white/50">{title}</h4>
      <ul className="mt-5 flex flex-col gap-3 text-sm text-white/75">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}