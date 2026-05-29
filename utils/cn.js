// Tiny className joiner — avoids pulling in a dependency.
export function cn(...args) {
  return args.filter(Boolean).join(" ");
}
