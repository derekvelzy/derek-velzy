"use client";

// Package imports
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cx from "classnames";
import Image from "next/image";

// Custom imports
import solutions from "./solutions.json";
import styles from "./Solutions.module.scss";
import Link from "../Link/Link";
import BookCallCTA from "../BookCallCTA/BookCallCTA";
import LowPolyBgSolutions from "./LowPolyBgSolutions";
import AuditForm from "../AuditForm/AuditForm";
import Button from "../Button/Button";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const [showAuditForm, setShowAuditForm] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".solutions-stagger", {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.15,
      });

      // Get every block and fade up as it enters the viewport, using scroll trigger
      ScrollTrigger.batch(".block-fade", {
        onEnter: (blocks) => {
          blocks.forEach((block) => {
            gsap.to(block, {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: block,
                start: "top 55%",
                end: "bottom top",
                toggleActions: "play none none reverse",
              },
            });
          });
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (showAuditForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAuditForm]);

  const staggerClass = "solutions-stagger opacity-0 md:translate-y-[40px] translate-y-[20px]";

  return (
    <div id="container--solutions" className={styles["solutions__container"]}>
      <AuditForm show={showAuditForm} onClose={() => setShowAuditForm(false)} />
      <LowPolyBgSolutions />
      <div className="overflow-hidden">
        <span className={cx(staggerClass, styles["solutions__eyebrow"])}>
          Solutions
        </span>
      </div>
      <div
        className={cx(
          styles["solutions__title"],
          styles["solutions__title__desktop"]
        )}
      >
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>
            Websites that{" "}
            <span className={styles["solutions__title__highlight"]}>
              perform
            </span>
            ,{" "}
            <span className={styles["solutions__title__highlight"]}>track</span>
            ,
          </h1>
        </div>
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>
            and{" "}
            <span className={styles["solutions__title__highlight"]}>grow</span>{" "}
            with your business.
          </h1>
        </div>
      </div>
      <div
        className={cx(
          styles["solutions__title"],
          styles["solutions__title__mobile"]
        )}
      >
        <div className="overflow-hidden py-[2px]">
          <h1 className={staggerClass}>Websites that </h1>
          <h1 className={staggerClass}>
            <span className={styles["solutions__title__highlight"]}>
              perform
            </span>
            ,{" "}
            <span className={styles["solutions__title__highlight"]}>track</span>
            , and{" "}
            <span className={styles["solutions__title__highlight"]}>grow</span>{" "}
          </h1>
          <h1 className={staggerClass}>with your business.</h1>
        </div>
      </div>
      <div className={styles["solutions__blocks"]}>
        {solutions.map((solution, index) => (
          <Block
            key={index}
            index={index}
            solution={solution}
            setShowAuditForm={() => setShowAuditForm(true)}
          />
        ))}
      </div>
      <BookCallCTA label="Not sure which solution is right for you? No problem, we can figure it out together." />
    </div>
  );
};

type BlockProps = {
  index: number;
  solution: (typeof solutions)[number];
  setShowAuditForm: () => void;
};

const Block = ({ index, solution, setShowAuditForm }: BlockProps) => {
  return (
    <div
      className={cx(styles["block"], "block-fade opacity-0 translate-y-[40px]")}
    >
      <div
        className={cx(styles["block__header"], {
          [styles["block__header_odd"]]: index % 2 === 1,
        })}
      >
        <span className={styles["block__header__number"]}>0{index + 1}</span>
        <h2>{solution.title}</h2>
      </div>
      <div
        className={cx(styles["block__content"], {
          [styles["block__content_odd"]]: index % 2 === 1,
        })}
      >
        <div className={styles["block__content__text"]}>
          <p>{solution.description}</p>
          <ul>
            {solution.bullets.map((bullet, index) => (
              <li key={`${index}-solution-${solution["service-id"]}-bullet`}>
                {bullet}
              </li>
            ))}
          </ul>
          {solution.action === "audit" ? (
            <Button action={setShowAuditForm}>{solution.CTA}</Button>
          ) : (
            <Link
              href={`/contact?solution=${solution["service-id"]}`}
              variant={index % 2 === 1 ? "secondary" : "primary"}
            >
              {solution.CTA}
            </Link>
          )}
        </div>
        <div className={styles["block__content__image"]}>
          <Image
            src={solution.image}
            alt={solution.title}
            fill={true}
            sizes="(max-width: 479px) 100vw, (max-width: 1279px) 440px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
