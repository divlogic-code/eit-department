import { gsap, ScrollTrigger } from "./gsap";
import { magneticButton } from "./buttons";
import { parallax } from "./parallax";
import { marquee } from "./marquee";

export function initAnimations(root = document) {
  const cleanups = [];
  const contexts = [];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    /* =========================================
       HERO
    ========================================= */

    const hero = root.querySelector("[data-gsap-section='hero']");

    if (hero) {
      const content = hero.querySelector("[data-gsap='hero-content']");
      const title = hero.querySelector("[data-gsap='text-reveal']");
      const tagline = hero.querySelector("[data-gsap='fade-up']");
      const buttons = hero.querySelectorAll(
        "[data-gsap='magnetic']"
      );
      const stats = hero.querySelectorAll(
        "[data-gsap='stagger'] > *"
      );

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (content) {
        timeline.fromTo(
          content,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
          }
        );
      }

      if (title) {
        timeline.fromTo(
          title,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.65"
        );
      }

      if (tagline) {
        timeline.fromTo(
          tagline,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.55"
        );
      }

      if (buttons.length) {
        timeline.fromTo(
          buttons,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.4"
        );
      }

      if (stats.length) {
        timeline.fromTo(
          stats,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.3"
        );
      }
    }

    /* =========================================
       SCROLL REVEALS
    ========================================= */

    root
      .querySelectorAll("[data-gsap='reveal']")
      .forEach((element) => {
        gsap.fromTo(
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

            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

    /* =========================================
       SECTION HEADINGS
    ========================================= */

    root
      .querySelectorAll("[data-gsap='heading']")
      .forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

    /* =========================================
       STAGGER GROUPS
    ========================================= */

    root
      .querySelectorAll("[data-gsap='stagger']")
      .forEach((group) => {
        const children = group.children;

        if (!children.length) return;

        gsap.fromTo(
          children,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

    /* =========================================
       MAGNETIC BUTTONS
    ========================================= */

    root
      .querySelectorAll("[data-gsap='magnetic']")
      .forEach((button) => {
        const cleanup = magneticButton(button);

        if (cleanup) {
          cleanups.push(cleanup);
        }
      });

    /* =========================================
       PARALLAX
    ========================================= */

    root
      .querySelectorAll("[data-gsap='parallax']")
      .forEach((element) => {
        parallax(element);
      });

    /* =========================================
       IMAGE PARALLAX
    ========================================= */

    root
      .querySelectorAll(".eit-cinematic-bg")
      .forEach((image) => {
        parallax(image, {
          yPercent: 10,
        });
      });

    /* =========================================
       MARQUEES
    ========================================= */

    root
      .querySelectorAll("[data-gsap='marquee']")
      .forEach((track) => {
        marquee(track);
      });
  }, root);

  contexts.push(ctx);

  ScrollTrigger.refresh();

  return () => {
    cleanups.forEach((cleanup) => cleanup());

    contexts.forEach((context) => {
      context.revert();
    });

    ScrollTrigger.refresh();
  };
}