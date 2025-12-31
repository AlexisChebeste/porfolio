import { useEffect, useRef } from "react";

export function useScrollFade<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        const ratio = entry.intersectionRatio;

        const start = 0.2;
        const end = 0.6;

        let progress = (ratio - start) / (end - start);
        progress = Math.min(Math.max(progress, 0), 1);

        element.style.opacity = String(progress);
        element.style.transform = `
          translateY(${24 - progress * 24}px)
          scale(${0.96 + progress * 0.04})
        `;
      },
      {
        rootMargin: "-10% 0px -10% 0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
