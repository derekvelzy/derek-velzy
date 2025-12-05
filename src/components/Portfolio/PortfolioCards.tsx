"use client";

// Package imports
import { useEffect } from "react";
import cx from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Custom imports
import styles from "./Portfolio.module.scss";
import { useIsDesktop } from "~/helpers/useIsDesktop";
import cards from "./portfolio.json";
import PortfioCardSharp from "./PortfolioCardSharp";

gsap.registerPlugin(ScrollTrigger);

const PortfolioCards = () => {
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".portfolio-card-stagger", {
        opacity: 1,
        marginTop: 0,
        duration: 0.75,
        delay: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });
    });
    return () => {
      ctx.revert();
    };
  }, [isDesktop]);

  return (
    <div className={styles["portfolio-cards__container"]}>
      <div className="overflow-hidden">
        <div className="flex justify-between gap-8 w-full lg:w-[calc(50%-1rem)] items-center portfolio-stagger portfolio-stagger-mobile opacity-0 md:translate-y-[50px] translate-y-[32px]">
          <h5
            className={cx(
              "whitespace-nowrap",
              styles["portfolio-cards__title"]
            )}
          >
            Case studies
          </h5>
          <span className="mb-4 text-[var(--darkGray)] opacity-[40%]">{"06"}</span>
        </div>
      </div>
      <div className={styles["portfolio-cards__list"]}>
        {cards.map((card, index) => (
          <PortfioCardSharp key={`${index}-portfolio-card`} card={card} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCards;
