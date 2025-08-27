"use client";

// Package imports
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { usePathname } from "next/navigation";
import cx from "classnames";

// Custom imports
import styles from "./Nav.module.scss";
import { handleFocusChange } from "~/helpers/handleFocusChange";
import Burger from "./Burger";
import { useIsDesktop } from "~/helpers/useIsDesktop";
import useCollapse from "./helpers/useCollapse";
import SvB from "./SbV";

const Nav = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const [animationsCompleted, setAnimationsCompleted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useCollapse({ collapsed, setCollapsed });

  const isDesktop = useIsDesktop();
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      const divider = document.getElementById("nav-divider");

      if (logo && burger && divider) {
        if (pathname === "/") {
          const viewport = window.innerHeight;
          const topLimit = isDesktop ? viewport * 1.25 + 810 : 2000;
          const bottomLimit = isDesktop ? viewport * 6.25 + 230 : 4980;
          if (scrollPosition > topLimit && scrollPosition < bottomLimit) {
            logo.classList.add(styles["light-theme"]);
            burger.classList.add(styles["light-theme"]);
            divider.classList.add(styles["light-theme"]);
          } else {
            logo.classList.remove(styles["light-theme"]);
            burger.classList.remove(styles["light-theme"]);
            divider.classList.remove(styles["light-theme"]);
          }
        } else {
          logo.classList.remove(styles["light-theme"]);
          burger.classList.remove(styles["light-theme"]);
          divider.classList.remove(styles["light-theme"]);
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
    <nav
      className={cx(
        "fixed top-0 left-0 w-full h-auto z-50 transition-transform duration-500",
        {
          "translate-y-[-100%]": collapsed,
        }
      )}
    >
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
          <SvB
            animationsCompleted={animationsCompleted}
            setAnimationsCompleted={setAnimationsCompleted}
          />
          <Burger animationsCompleted={animationsCompleted} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
