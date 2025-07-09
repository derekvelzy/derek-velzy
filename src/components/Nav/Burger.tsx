// Package imports
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

// Custom imports
import styles from "./Nav.module.scss";

gsap.registerPlugin(ScrollToPlugin);

const Burger = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLLabelElement>(null);

  const closeNav = () => {
    const checkbox = containerRef.current?.querySelector(
      "input[type='checkbox']"
    );
    if (checkbox) {
      (checkbox as HTMLInputElement).checked = false;
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles["burger-container"]}>
      <label id="burger" ref={burgerRef} className={styles["burger"]}>
        <input type="checkbox" />
      </label>
      <div className={styles["sidebar"]}>
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: { y: "#about", autoKill: false, offsetY: 140 },
              duration: 0.75,
              ease: "power4.out",
            });
            closeNav();
          }}
        >
          <span>About</span>
          <span>01</span>
        </button>
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: { y: "#work", autoKill: false, offsetY: 140 },
              duration: 0.75,
              ease: "power4.out",
            });
            closeNav();
          }}
        >
          <span>Work</span>
          <span>02</span>
        </button>
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: { y: "#blog", autoKill: false, offsetY: 140 },
              duration: 0.75,
              ease: "power4.out",
            });
            closeNav();
          }}
        >
          <span>Blog</span>
          <span>03</span>
        </button>
        <button
          onClick={() => {
            gsap.to(window, {
              scrollTo: { y: "#contact", autoKill: false, offsetY: 140 },
              duration: 0.75,
              ease: "power4.out",
            });
            closeNav();
          }}
        >
          <span>Contact</span>
          <span>04</span>
        </button>
      </div>
    </div>
  );
};

export default Burger;
