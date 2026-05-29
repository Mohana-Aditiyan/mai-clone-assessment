import { useEffect, useState } from "react";

/**
 * SSR-safe media query hook.
 * Returns `false` on the server and during the first client render,
 * then updates after mount – avoids hydration mismatch.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}
