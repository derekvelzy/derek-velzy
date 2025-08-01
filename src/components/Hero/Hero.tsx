"use client";

// Package imports
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import cx from "classnames";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

// Custom imports
import Link from "../Link/Link";
import Button from "../Button/Button";
import styles from "./Hero.module.scss"; // Assuming you have a styles file for Hero
import Wheel from "./Wheel";
import Arrow from "~/res/svgs/arrow";

gsap.registerPlugin(ScrollToPlugin);

const Hero = ({}) => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    vertical: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;
    const auto = setInterval(() => {
      slider.next();
    }, 2000);

    return () => clearInterval(auto);
  }, [instanceRef, loaded]);

  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const prevTargetRef = useRef<HTMLDivElement>(null);
  const nextTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    const prev = prevTargetRef.current;
    const next = nextTargetRef.current;

    if (!prevButton || !nextButton || !prev || !next) return;

    let prevVisible = false;
    let nextVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(prevButton, {
        x: mouseX,
        y: mouseY,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(nextButton, {
        x: mouseX,
        y: mouseY,
        duration: 0.2,
        ease: "power2.out",
      });

      const prevRect = prev.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();

      const leftBoundary = mouseX - prevRect.left + 50;
      const rightBoundary = prevRect.right - mouseX + 50;
      const prevTopBoundary = mouseY - prevRect.top + 50;
      const prevBottom = prevRect.bottom - mouseY;

      const nextLeftBoundary = mouseX - nextRect.left + 50;
      const nextRightBoundary = nextRect.right - mouseX + 50;
      const nextTopBoundary = mouseY - nextRect.top;
      const nextBottom = nextRect.bottom - mouseY + 50;

      const prevInside =
        leftBoundary > 0 &&
        rightBoundary > 0 &&
        prevTopBoundary > 0 &&
        prevBottom > 0;

      const nextInside =
        nextLeftBoundary > 0 &&
        nextRightBoundary > 0 &&
        nextTopBoundary > 0 &&
        nextBottom > 0;

      if (prevInside && !prevVisible) {
        prevVisible = true;
        gsap.to(prevButton, { autoAlpha: 1, scale: 1, duration: 0.3 });
        return;
      } else if (!prevInside && prevVisible) {
        prevVisible = false;
        gsap.to(prevButton, { autoAlpha: 0, scale: 0.8, duration: 0.3 });
      }
      if (nextInside && !nextVisible) {
        nextVisible = true;
        gsap.to(nextButton, { autoAlpha: 1, scale: 1, duration: 0.3 });
      } else if (!nextInside && nextVisible) {
        nextVisible = false;
        gsap.to(nextButton, { autoAlpha: 0, scale: 0.8, duration: 0.3 });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [loaded]);

  useEffect(() => {
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
          <div className={styles["hero__content__title"]}>
            <div className="overflow-hidden">
              <h1 className="stagger">
                You have a{" "}
                {!loaded ? (
                  <span className="font-[700] font-alt italic">Business</span>
                ) : (
                  <Wheel
                    prevTargetRef={prevTargetRef}
                    nextTargetRef={nextTargetRef}
                    sliderRef={sliderRef}
                  />
                )}
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="stagger">to run. Let me handle</h1>
            </div>
            <div className="overflow-hidden pb-[4px]">
              <h1 className="stagger">your website.</h1>
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
      <button
        ref={prevButtonRef}
        className={cx(styles["hero__arrow"], styles["hero__arrow_prev"])}
        style={{ opacity: 0, transform: "scale(0.8)", position: "fixed" }}
        onClick={() => {
          instanceRef.current?.next();
        }}
      >
        <Arrow />
      </button>
      <button
        ref={nextButtonRef}
        className={cx(styles["hero__arrow"], styles["hero__arrow_next"])}
        style={{ opacity: 0, transform: "scale(0.8)", position: "fixed" }}
        onClick={() => {
          instanceRef.current?.prev();
        }}
      >
        <Arrow />
      </button>
    </div>
  );
};

export default Hero;
