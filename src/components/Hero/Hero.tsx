"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

// Custom imports
import Link from "../Link/Link";
import Button from "../Button/Button";

gsap.registerPlugin(ScrollToPlugin);

const Hero = ({}) => {
  useEffect(() => {
    // GSAP animation for the hero section
    gsap.fromTo(
      ".stagger",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.125,
      }
    );
  }, []);

  return (
    <div id="top" className="relative w-full h-screen">
      <div className="max-w-[980px] h-full mx-auto flex items-center">
        <div className="w-2/3 flex flex-col gap-8">
          <div
            className={cx(
              "font-header font-[500] text-[var(--darkGray)] leading-[1.15]",
              "md:text-[80px] md:leading-[1.15]"
            )}
          >
            <div className="overflow-hidden">
              <h1 className="stagger text-[64px]">A Developer Who</h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="stagger text-[64px]">Understands Your</h1>
            </div>
            <div className="overflow-hidden pb-[4px]">
              <h1 className="stagger text-[64px]">Marketing Goals</h1>
            </div>
          </div>
          <p className="stagger font-sans text-[22px] text-[var(--darkGray)] pointer-events-none">
            With 4 years of experience as a solo web developer in a lean
            marketing team, I bridge the gap between tech and strategy -
            handling tracking, pixels, CRM, accessibility, and consent tools so
            you don’t have to.
          </p>
          <div className="stagger z-[1] flex items-center gap-4">
            <Link href="/">Book a free discovery call</Link>
            <Button
              action={() =>
                gsap.to(window, {
                  scrollTo: { y: "#contact", autoKill: false, offsetY: 112 },
                  duration: 0.75,
                  ease: "power4.out",
                })
              }
            >
              Say hello
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
