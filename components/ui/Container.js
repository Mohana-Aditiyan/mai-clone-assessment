import { cn } from "@/utils/cn";

export default function Container({ children, wide = false, className = "" }) {
  return (
    <div className={cn(wide ? "container-wide" : "container-x", className)}>
      {children}
    </div>
  );
}
