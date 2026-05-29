import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SparkleIcon } from "@/components/icons";

/**
 * Decorative floating "Talk to MAI / Need help?" widget that
 * cycles through a few tooltips, mirroring the original site.
 */
const PROMPTS = [
  { color: "from-emerald-400 to-emerald-600", label: "Talk to MAI" },
  { color: "from-sky-400 to-sky-600", label: "Need help?" },
  { color: "from-amber-300 to-amber-500", label: "Ask MAI AI" },
];

export default function FloatingHelp() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % PROMPTS.length), 4200);
    return () => clearInterval(t);
  }, []);

  const current = PROMPTS[i];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-6 right-4 z-40 hidden items-center gap-2 sm:flex"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.label}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-pill bg-gradient-to-r ${current.color} px-3 py-1.5 text-xs font-semibold text-white shadow-soft`}
        >
          {current.label}
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-y-4 border-l-[6px] border-y-transparent border-l-emerald-500/80" />
        </motion.div>
      </AnimatePresence>

      <motion.button
        aria-label="Open help"
        className="pointer-events-auto relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-lg ring-4 ring-white/40"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        <SparkleIcon className="h-5 w-5" />
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-40" />
      </motion.button>
    </div>
  );
}
