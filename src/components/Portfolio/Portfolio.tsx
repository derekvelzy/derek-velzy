"use client";

// Package imports
import { useEffect } from "react";
import cx from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Custom imports
import styles from "./Portfolio.module.scss";
import { useIsDesktop } from "~/helpers/useIsDesktop";
import PortfolioCards from "./PortfolioCards";

gsap.registerPlugin(ScrollTrigger);

const staggerClass = "portfolio-stagger opacity-100 translate-y-[50px]";
const staggerClassMobile =
  "portfolio-stagger-mobile opacity-100 translate-y-[32px]";

const Portfolio = () => {
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(
        `${isDesktop ? ".portfolio-stagger" : ".portfolio-stagger-mobile"}`,
        {
          y: 0,
          opacity: 1,
          duration: isDesktop ? 1 : 0.75,
          ease: "power3.out",
          stagger: isDesktop ? 0.125 : 0.08,
        }
      );
    });
    return () => {
      ctx.revert();
    };
  }, [isDesktop]);

  return (
    <div id="container--portfolio" className={styles["portfolio__container"]}>
      <div className="overflow-hidden">
        <span
          className={cx(
            "portfolio-stagger portfolio-stagger-mobile opacity-100 md:translate-y-[50px] translate-y-[32px]",
            styles["portfolio__eyebrow"]
          )}
        >
          Portfolio
        </span>
      </div>
      <div
        className={cx(
          styles["portfolio__title"],
          styles["portfolio__title_desktop"]
        )}
      >
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>This portfolio showcases selected</h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>
            projects that highlight my approach to
          </h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>
            building and improving digital products
          </h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>
            — combining{" "}
            <span
              className={cx(
                styles["portfolio__title__highlight"],
                styles["portfolio__title__highlight--design"]
              )}
            >
              design
            </span>
            ,{" "}
            <span
              className={cx(
                styles["portfolio__title__highlight"],
                styles["portfolio__title__highlight--development"]
              )}
            >
              development
            </span>{" "}
            and
          </h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>
            <span
              className={cx(
                styles["portfolio__title__highlight"],
                styles["portfolio__title__highlight--product-thinking"]
              )}
            >
              product thinking
            </span>{" "}
            <span className={styles["portfolio__title__drive"]}>
              to drive measurable
            </span>
          </h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>results.</h1>
        </div>
      </div>

      <div
        className={cx(
          styles["portfolio__title"],
          styles["portfolio__title_mobile"]
        )}
      >
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>This portfolio</h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>showcases selected</h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>projects that highlight</h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>my approach to</h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>building and improving</h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>digital products</h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>
            — combining{" "}
            <span className={cx(styles["portfolio__title__highlight"])}>
              design
            </span>
          </h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>
            <span className={cx(styles["portfolio__title__highlight"])}>
              development
            </span>
            , and
          </h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>
            <span className={cx(styles["portfolio__title__highlight"])}>
              product thinking
            </span>{" "}
            to
          </h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>drive measurable</h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClassMobile}>results.</h1>
        </div>
      </div>
      <PortfolioCards />
    </div>
  );
};

export default Portfolio;
