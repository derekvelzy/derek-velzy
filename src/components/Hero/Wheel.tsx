// Package imports
import cx from "classnames";
import "keen-slider/keen-slider.min.css";

// Custom imports
import styles from "./Hero.module.scss";
import { RefObject } from "react";

const topics = [
  "Business",
  "Brewery",
  "Juice Bar",
  "Tattoo Studio",
  "Roofing company",
  "Pirate Ship",
  "Coffee Shop",
  "Yoga Studio",
  "Meme Page",
  "Bookstore",
  "Photography Studio",
  "Real Estate Office",
  "Plant Shop",
  "Haunted House",
  "Personal Trainer",
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

const Wheel = ({
  prevTargetRef,
  nextTargetRef,
  sliderRef
}: Props) => {

  return (
    <div className={styles["wheel"]}>
      <div
        ref={sliderRef}
        className={cx("keen-slider", styles["wheel__topics"])}
        style={{ height: "84px", overflow: "hidden" }}
      >
        <div className={styles["wheel__targets"]}>
          <div ref={prevTargetRef} />
          <div ref={nextTargetRef} />
        </div>
        {topics.map((topic, idx) => (
          <span
            key={idx}
            className="keen-slider__slide flex items-center justify-center font-alt italic font-[700]"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Wheel;
