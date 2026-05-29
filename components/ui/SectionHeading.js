import { motion } from "framer-motion";
import { fadeUp, fadeUpSmall, stagger, inViewOnce } from "@/utils/animations";
import { cn } from "@/utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  children,
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      className={cn("flex flex-col gap-4", alignment, className)}
      variants={stagger(0, 0.12)}
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUpSmall}
          className={cn("eyebrow", eyebrowClassName)}
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          variants={fadeUp}
          className={cn("heading-section text-balance max-w-4xl", titleClassName)}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "text-lead max-w-2xl text-balance",
            align === "left" ? "" : "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </motion.div>
  );
}
