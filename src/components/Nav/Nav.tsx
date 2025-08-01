"use client";

// Package imports
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useRouter, usePathname } from "next/navigation";

// Custom imports
import styles from "./Nav.module.scss";
import { handleFocusChange } from "~/helpers/handleFocusChange";
import Burger from "./Burger";
import { useIsDesktop } from "~/helpers/useIsDesktop";

const Nav = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const [animationsCompleted, setAnimationsCompleted] = useState(false);

  const isDesktop = useIsDesktop();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window?.innerWidth >= 1024;
      const homepage = pathname === "/";

      if (!animationsCompleted) {
        gsap.to(".shift-left", {
          x: "0",
          opacity: 1,
          duration: homepage ? 1.5 : 0,
          stagger: homepage ? 0.125 : 0,
          ease: "power3.out",
          delay: homepage ? 0.5 : 0,
          onComplete: () => {
            setAnimationsCompleted(true);
          },
        });
      } else {
        gsap.set(".shift-left", {
          x: "0",
          opacity: 1,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: () => "+=400px top",
          scrub: true,
        },
      });

      if (homepage) {
        tl.fromTo(
          ".trans-up",
          { y: "0" },
          {
            y: isDesktop ? "-34" : "-22",
            duration: 1,
            ease: "power4.out",
            stagger: -0.05,
          },
          "<"
        );
        tl.fromTo(
          ".fade-out",
          { opacity: 1 },
          { opacity: 0, duration: 1, ease: "power4.out" },
          "<"
        );
      }

      tl.fromTo(
        "nav",
        { backdropFilter: "blur(0px)" },
        { backdropFilter: "blur(12px)", duration: 1, ease: "power4.out" }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [pathname, animationsCompleted, isDesktop]);

  useEffect(() => {
    const changeNavColor = () => {
      const scrollPosition = window.scrollY;
      const logo = document.getElementById("logo");
      const burger = document.getElementById("burger-container");

      if (logo && burger) {
        if (pathname === "/") {
          const viewport = window.innerHeight;
          const topLimit = isDesktop ? viewport * 1.25 : 1000;
          const bottomLimit = isDesktop ? viewport * 6.25 : 4450;
          if (scrollPosition > topLimit && scrollPosition < bottomLimit) {
            logo.classList.add(styles["light-theme"]);
            burger.classList.add(styles["light-theme"]);
          } else {
            logo.classList.remove(styles["light-theme"]);
            burger.classList.remove(styles["light-theme"]);
          }
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
  }, [isDesktop, pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full h-auto z-50">
      <div className="lg:max-w-[964px] lg:mx-auto w-full h-full flex items-center justify-between">
        <div className={styles["skip-to-main__container"]}>
          <button
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
        <div className="slice h-[76px] md:h-[100px] pt-5 md:pt-6 justify-between">
          <button
            id="logo"
            className={styles["logo"]}
            onClick={() => {
              if (pathname === "/") {
                gsap.to(window, {
                  scrollTo: { y: "#top", autoKill: false },
                  duration: 0.75,
                  ease: "power4.out",
                });
              } else {
                router.push("/");
              }
            }}
            aria-label="Go to top of page"
          >
            <div className="shift-left font-alt opacity-0 translate-x-[-20px]">
              <span>D</span>
              <span className="trans-up fade-out opacity-0 inline-block">
                erek
              </span>
            </div>
            <div className="shift-left opacity-0 translate-x-[-20px] font-alt italic trans-up translate-y-[-22px] lg:translate-y-[-34px]">
              <span>V</span>
              <span className="fade-out opacity-0 inline-block">elzy</span>
            </div>
          </button>
          <Burger animationsCompleted={animationsCompleted} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
