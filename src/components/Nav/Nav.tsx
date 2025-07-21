"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
// import { useRouter } from "next/router";

// Custom imports
import styles from "./Nav.module.scss";
import { handleFocusChange } from "~/helpers/handleFocusChange";
import Burger from "./Burger";
import { useIsDesktop } from "~/helpers/useIsDesktop";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Nav = () => {
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window?.innerWidth >= 1024;

      const atTop = window.scrollY === 0;

      console.log('bip atTop:', atTop);

      // if (atTop) {
        gsap.fromTo(
          ".shift-left",
          {
            x: "-20",
            opacity: 0,
          },
          {
            x: "0",
            duration: 1.5,
            opacity: 1,
            stagger: 0.125,
            ease: "power4.out",
            delay: 0.5,
          }
        );
      // } else {
      //   gsap.set(".shift-left", {
      //     x: "0",
      //     opacity: 1,
      //     duration: 0
      //   });
      // }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
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
        { y: isDesktop ? "-34" : "-22", duration: 1, ease: "power4.out", stagger: -0.05 },
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
    const changeNavColor = () => {
      const scrollPosition = window.scrollY;
      const logo = document.getElementById("logo");
      const burger = document.getElementById("burger-container");

      if (logo && burger) {
        const viewport = window.innerHeight;
        if (
          scrollPosition > viewport * 1.25 &&
          scrollPosition < viewport * (isDesktop ? 6.25 : 5.25)
        ) {
          logo.classList.add(styles["light-theme"]);
          burger.classList.add(styles["light-theme"]);
        } else {
          logo.classList.remove(styles["light-theme"]);
          burger.classList.remove(styles["light-theme"]);
        }
      }
    };
    changeNavColor();

    window.addEventListener("scroll", changeNavColor);

    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  }, [isDesktop]);

  return (
    <nav className="fixed top-0 left-0 w-full h-auto z-50">
      <div className="lg:max-w-[964px] lg:mx-auto w-full h-full flex items-center justify-between">
        <div className={styles["skip-to-main__container"]}>
          <button
            role="banner"
            className={styles["skip-to-main"]}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleFocusChange("hero-main-cta");
              }
            }}
          >
            Skip to main content
          </button>
        </div>
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
            aria-label="Go to top of page"
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
      </div>
    </nav>
  );
};

export default Nav;
