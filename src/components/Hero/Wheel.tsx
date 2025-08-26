// Package imports
import { RefObject } from "react";
import cx from "classnames";
import "keen-slider/keen-slider.min.css";

// Custom imports
import styles from "./Hero.module.scss";

const topics = [
  "Business",
  "Brewery",
  "Juice Bar",
  "Tattoo Studio",
  "Roofing company",
  "Surf Shop",
  "Pirate Ship",
  "Auto Repair Shop",
  "Barbershop",
  "Therapy Practice",
  "Meme Page",
  "Bookstore",
  "Coffee Shop",
  "Yoga Studio",
  "Photography Studio",
  "HVAC Company",
  "Real Estate Office",
  "Haunted House",
  "Plant Shop",
  "Personal Trainer",
  "Cat Backpack Shop",
  "Art Gallery",
  "Music School",
  "Garage Band",
  "Dance Studio",
];

type Props = {
  prevTargetRef: RefObject<HTMLDivElement | null>;
  nextTargetRef: RefObject<HTMLDivElement | null>;
  sliderRef: (node: HTMLDivElement | null) => void;
};

const Wheel = ({ prevTargetRef, nextTargetRef, sliderRef }: Props) => {

  return (
    <div className={styles["wheel"]}>
      <div
        ref={sliderRef}
        className={cx("keen-slider", styles["wheel__topics"])}
      >
        <div className={styles["wheel__targets"]}>
          <div ref={prevTargetRef} />
          <div ref={nextTargetRef} />
        </div>
        {topics.map((topic, idx) => {
          console.log();
          return (
            <span
              key={idx}
              className={cx(
                "keen-slider__slide font-alt italic font-[700]"
              )}
            >
              {topic}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
