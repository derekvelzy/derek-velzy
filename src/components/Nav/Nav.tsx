"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import Burger from "./Burger";

// Custom imports
import styles from "./Nav.module.scss";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Nav = ({}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".shift-left", {
        x: "-20",
        opacity: 0,
      }, {
        x: "0",
        duration: 1.5,
        opacity: 1,
        stagger: 0.125,
        ease: "power4.out",
        delay: 0.5
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "nav",
          start: "top top",
          end: () => "+=400px top",
          scrub: true,
        },
      });

      tl.fromTo(
        "nav",
        { backdropFilter: "blur(0px)" },
        { backdropFilter: "blur(12px)", duration: 1, ease: "power4.out" }
      );

      tl.fromTo(
        ".trans-up",
        { y: "0" },
        { y: "-34", duration: 1, ease: "power4.out", stagger: -0.05 },
        "<"
      );

      tl.fromTo(
        ".fade-out",
        { opacity: 1 },
        { opacity: 0, duration: 1, ease: "power4.out" },
        "<"
      );
    });

    return () => {
      ctx.revert(); // Clean up the context to prevent memory leaks
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeNavColor = (e: any) => {
      const scrollPosition = window.scrollY;
      const logo = document.getElementById("logo");
      const burger = document.getElementById("burger");

      if (logo && burger) {
        const viewport = e.target.documentElement.clientHeight;
        if (scrollPosition > viewport * 1.25 && scrollPosition < viewport * 2.75) {
          logo.classList.add(styles["light-theme"]);
          burger.classList.add(styles["light-theme"]);
        } else {
          logo.classList.remove(styles["light-theme"]);
          burger.classList.remove(styles["light-theme"]);
        }
      }
    }

    window.addEventListener("scroll", changeNavColor);

    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full h-auto z-50">
      <div className="slice h-full pt-6 justify-between">
        <button
          id="logo"
          className={styles["logo"]}
          onClick={() => {
            gsap.to(window, {
              scrollTo: { y: "#top", autoKill: false },
              duration: 0.75,
              ease: "power4.out",
            });
          }}
        >
          <div className="shift-left font-alt">
            <span>D</span>
            <span className="trans-up fade-out inline-block">erek</span>
          </div>
          <div className="shift-left font-alt italic trans-up">
            <span>V</span>
            <span className="fade-out inline-block">elzy</span>
          </div>
        </button>
        <Burger />
      </div>
    </nav>
  );
};

export default Nav;
