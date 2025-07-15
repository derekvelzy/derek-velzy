"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

// Custom imports
import Link from "../Link/Link";
import Button from "../Button/Button";
import styles from "./Hero.module.scss"; // Assuming you have a styles file for Hero

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
    <div id="top" className={styles["hero__container"]}>
      <div className={cx("slice", styles["hero"])}>
        <div className={styles["hero__content"]}>
          <div
            className={styles["hero__content__title"]}
          >
            <div className="overflow-hidden">
              <h1 className="stagger">A Developer Who</h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="stagger">Understands Your</h1>
            </div>
            <div className="overflow-hidden pb-[4px]">
              <h1 className="stagger">Marketing Goals</h1>
            </div>
          </div>
          <p className="stagger">
            With 4 years of experience as a solo web developer in a lean
            marketing team, I bridge the gap between tech and strategy -
            handling tracking, pixels, CRM, accessibility, and consent tools so
            you don’t have to.
          </p>
          <div className={cx("stagger", styles["hero__content__ctas"])}>
            <Link id="hero-main-cta" href="https://calendly.com/dmvelzy/30min">
              Book a free discovery call
            </Link>
            <Button
              action={() =>
                gsap.to(window, {
                  scrollTo: { y: "#contact", autoKill: false, offsetY: 112 },
                  duration: 1.5,
                  ease: "power3.out",
                })
              }
              variant="secondary"
              ariaLabel="Go to contact section"
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
