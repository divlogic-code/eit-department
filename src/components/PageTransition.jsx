import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "../animations/gsap";

function PageTransition() {
  const location = useLocation();

  useEffect(() => {
    const page = document.querySelector(".eit-route-page");

    if (!page) return;

    gsap.fromTo(
      page,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
      }
    );
  }, [location.pathname]);

  return null;
}

export default PageTransition;