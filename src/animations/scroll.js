import { gsap, ScrollTrigger } from "./gsap";

export function scrollReveal(elements, options = {}) {
  if (!elements?.length) return;

  elements.forEach((element) => {
    gsap.from(element, {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
        ...options,
      },
    });
  });
}

export { ScrollTrigger };