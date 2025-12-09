"use client";

// Package imports
import cx from "classnames";
import gsap from "gsap";
import { useEffect } from "react";

// Custom imports
import SecondaryLink from "../Link/SecondaryLink";
import styles from "./ThreeBlocks.module.scss";
import Performance from "../../res/svgs/performance";
import Tracking from "../../res/svgs/tracking";
import Optimizations from "../../res/svgs/optimizations";

const ThreeBlocks = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("three-blocks");
      const title = document.getElementById("title--three-blocks");
      const exploreSolutions = document.getElementById("explore-solutions");

      gsap.to(title, {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(exploreSolutions, {
        y: 0,
        delay: 0.2,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".stagger-three-blocks", {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const staggerClass = "stagger-three-blocks opacity-0 translate-y-[40px]";

  return (
    <div
      id="three-blocks"
      className={cx(styles["three-blocks__container"])}
    >
      <div className={styles["three-blocks__header__title"]}>
        <div className="overflow-hidden">
          <h4 id="title--three-blocks" className="translate-y-[40px]">
            How I Help Businesses Grow Online
          </h4>
        </div>
        <SecondaryLink
          id="explore-solutions"
          className="translate-y-[46px]"
          href="/solutions"
          light
          label="Explore Solutions"
        />
      </div>
      <div className={styles["three-blocks__blocks"]}>
        <div className={cx(styles["three-blocks__block"], staggerClass)}>
          <div className={styles["three-blocks__block__icon"]}>
            <Performance />
          </div>
          <h3>High-Performance Websites</h3>
          <p>
            Fast, mobile-ready, and conversion-focused sites that bring in more
            customers.
          </p>
        </div>
        <div className={cx(styles["three-blocks__block"], staggerClass)}>
          <div className={styles["three-blocks__block__icon"]}>
            <Tracking />
          </div>
          <h3>Smart Tracking & Integrations</h3>
          <p>
            Google Tag, Meta Pixel, consent management, and analytics
            dashboards, so you actually know what’s working.
          </p>
        </div>
        <div className={cx(styles["three-blocks__block"], staggerClass)}>
          <div className={styles["three-blocks__block__icon"]}>
            <Optimizations />
          </div>
          <h3>Ongoing Optimization & Insights</h3>
          <p>
            Regular updates, audits, and improvements that keep your site
            compliant and performing like a top-tier brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeBlocks;
