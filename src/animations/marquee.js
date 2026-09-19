import { gsap } from "./gsap";

export function marquee(track, options = {}) {
  if (!track) return;

  const speed = options.speed || 30;

  return gsap.to(track, {
    xPercent: -50,
    duration: speed,
    ease: "none",
    repeat: -1,
  });
}
