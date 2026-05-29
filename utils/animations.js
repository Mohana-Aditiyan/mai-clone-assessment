// Centralised Framer Motion variants and easings.
// Keep this lean — every shared animation lives here so timing
// stays consistent across sections.

export const EASE_OUT = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const stagger = (delayChildren = 0.05, staggerChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

// Shared "whileInView" config so we trigger consistently
export const inViewOnce = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
};

// Hover micro-interactions
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.25, ease: EASE_OUT } },
  whileTap: { y: -1, scale: 0.99 },
};
