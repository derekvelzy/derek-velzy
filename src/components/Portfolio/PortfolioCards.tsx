"use client";

// Package imports
import { useEffect } from "react";
import cx from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

// Custom imports
import styles from "./Portfolio.module.scss";
import { useIsDesktop } from "~/helpers/useIsDesktop";
import cards from "./portfolio.json";

gsap.registerPlugin(ScrollTrigger);

// const staggerClass = "portfolio-stagger opacity-100 translate-y-[50px]";
// const staggerClassMobile =
//   "portfolio-stagger-mobile opacity-100 translate-y-[32px]";

const PortfolioCards = () => {
  const isDesktop = useIsDesktop();

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.to(".portfolio-card-stagger", {
          opacity: 1,
          duration: 1,
          delay: 1,
          ease: "power3.out",
          stagger: 0.25,
        });
      });
      return () => {
        ctx.revert();
      };
    }, [isDesktop]);

  return (
    <div className={styles["portfolio-cards__container"]}>
      <div className="overflow-hidden">
        <h5
          className={cx(
            "portfolio-stagger portfolio-stagger-mobile opacity-0 md:translate-y-[50px] translate-y-[32px]",
            styles["portfolio-cards__title"]
          )}
        >
          Case studies
        </h5>
      </div>
      <div className={styles["portfolio-cards__list"]}>
        {cards.map((card, index) => (
          <div
            key={`${index}-portfolio-card`}
            className={cx(styles["portfolio-cards__card"], "portfolio-card-stagger opacity-0 translate-y-[16px]")}
          >
            <div className={styles["portfolio-cards__card__image"]}>
              <Image
                src={card.image}
                alt={card.title}
                fill={true}
                sizes="100vw"
              />
            </div>
            <div className={styles["portfolio-cards__card__overlay"]}>
              <div
                className={cx(styles["portfolio-cards__card__overlay__blur"])}
              />
            </div>
            <div className={styles["portfolio-cards__card__content"]}>
              <h6>{card.title}</h6>
              <p>{card.description}</p>
            </div>
            <div className={styles["portfolio-cards__card__skills"]}>
              {card.skills.map((skill, index) => (
                <span key={`${index}-portfolio-card-skill`}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCards;
