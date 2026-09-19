import { gsap } from "./gsap";

export function magneticButton(button) {
  if (!button) return () => {};

  const move = (event) => {
    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.18,
      y: y * 0.18,
      duration: 0.35,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const reset = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
      overwrite: true,
    });
  };

  button.addEventListener("mousemove", move);
  button.addEventListener("mouseleave", reset);

  return () => {
    button.removeEventListener("mousemove", move);
    button.removeEventListener("mouseleave", reset);
    gsap.killTweensOf(button);
  };
}