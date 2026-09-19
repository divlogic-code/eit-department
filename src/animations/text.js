import { gsap } from "./gsap";

export function textReveal(element, options = {}) {
  if (!element) return;

  return gsap.fromTo(
    element,
    {
      y: 45,
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

export function staggerText(elements, options = {}) {
  if (!elements?.length) return;

  return gsap.fromTo(
    elements,
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      ...options,
    }
  );
}