import { gsap } from "./gsap";

export function revealUp(element, options = {}) {
  if (!element) return;

  return gsap.fromTo(
    element,
    {
      y: 70,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      ...options,
    }
  );
}

export function revealFade(element, options = {}) {
  if (!element) return;

  return gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      ...options,
    }
  );
}