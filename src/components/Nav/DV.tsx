"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { usePathname, useRouter } from "next/navigation";

// Custom imports
import styles from "./Nav.module.scss";
import { useIsDesktop } from "~/helpers/useIsDesktop";

type Props = {
  animationsCompleted: boolean;
  setAnimationsCompleted: (completed: boolean) => void;
};

const DV = ({ animationsCompleted, setAnimationsCompleted }: Props) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const isDesktop = useIsDesktop();
  const router = useRouter();
  const pathname = usePathname();

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

    });

    return () => {
      ctx.revert();
    };
  }, [pathname, animationsCompleted, isDesktop, setAnimationsCompleted]);

  return (
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
        <span className="trans-up fade-out opacity-0 inline-block">erek</span>
      </div>
      <div className="shift-left opacity-0 translate-x-[-20px] font-alt italic trans-up translate-y-[-22px] lg:translate-y-[-34px]">
        <span>V</span>
        <span className="fade-out opacity-0 inline-block">elzy</span>
      </div>
    </button>
  );
};

export default DV;
