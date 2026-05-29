import { motion } from "framer-motion";
import { fadeUp, inViewOnce } from "@/utils/animations";

export default function Reveal({
  children,
  delay = 0,
  variants = fadeUp,
  className,
  as: As = "div",
  ...rest
}) {
  const MotionTag = motion[As] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
