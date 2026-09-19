import { gsap } from "./gsap";

export function pageEnter(container) {
  if (!container) return;

  gsap.fromTo(
    container,
    {
      opacity: 0,
      y: 18,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: "power3.out",
    }
  );
}

export function pageExit(container) {
  if (!container) return Promise.resolve();

  return new Promise((resolve) => {
    gsap.to(container, {
      opacity: 0,
      y: -12,
      duration: 0.35,
      ease: "power2.in",
      onComplete: resolve,
    });
  });
}
