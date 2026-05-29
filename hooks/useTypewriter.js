import { useEffect, useRef, useState } from "react";

/**
 * Cycles a list of phrases with a typewriter + backspace effect.
 * Designed for the hero rotating headline ("We Find You The ___").
 *
 * @param {string[]} phrases  – list of strings to cycle through
 * @param {object} opts
 *   typeSpeed   – ms per char while typing      (default 70)
 *   deleteSpeed – ms per char while deleting    (default 35)
 *   holdTime    – ms to hold a fully typed word (default 1500)
 *   startDelay  – ms before the very first char (default 400)
 */
export function useTypewriter(
  phrases,
  { typeSpeed = 70, deleteSpeed = 35, holdTime = 1500, startDelay = 400 } = {}
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;
    const current = phrases[phraseIndex % phrases.length];

    // Initial delay before the first character starts typing
    const initial = phraseIndex === 0 && text === "" && !isDeleting ? startDelay : 0;

    if (!isDeleting && text === current) {
      // Hold, then start deleting
      timeoutRef.current = setTimeout(() => setIsDeleting(true), holdTime);
    } else if (isDeleting && text === "") {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      timeoutRef.current = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? current.substring(0, prev.length - 1)
              : current.substring(0, prev.length + 1)
          );
        },
        initial || (isDeleting ? deleteSpeed : typeSpeed)
      );
    }

    return () => clearTimeout(timeoutRef.current);
  }, [text, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, holdTime, startDelay]);

  return text;
}
