import Link from "next/link";
import { cn } from "@/utils/cn";

const VARIANTS = {
  primary: "btn-primary",
  outline: "btn-outline",
  white: "btn-white",
  ghost: "btn-ghost",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}) {
  const classes = cn(VARIANTS[variant] || VARIANTS.primary, className);

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
