import { useEffect, useRef } from "react";

export function useScrollFade() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        // Normalizamos el rango: empieza a aparecer al 30%
        const start = 0.3;
        const end = 0.8;

        let progress = (ratio - start) / (end - start);
        progress = Math.min(Math.max(progress, 0), 1);

        element.style.opacity = progress;
        element.style.transform = `
          translateY(${24 - progress * 24}px)
          scale(${0.96 + progress * 0.04})
        `;
      },
      {
        // Margen negativo evita falsos positivos en componentes largos
        rootMargin: "-10% 0px -10% 0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}