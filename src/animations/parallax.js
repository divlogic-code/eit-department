import { gsap, ScrollTrigger } from "./gsap";

export function parallax(element, options = {}) {
  if (!element) return;

  return gsap.to(element, {
    yPercent: 8,
    ease: "none",

    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },

    ...options,
  });
}