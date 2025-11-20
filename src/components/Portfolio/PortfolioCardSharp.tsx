// Package imports
import Image from "next/image";
import cx from "classnames";

// Custom imports
import styles from "./Portfolio.module.scss";
import Arrow from "~/res/svgs/arrow";

const PortfioCardSharp = ({
  card,
}: {
  card: {
    title: string;
    link?: string;
    description: string;
    image: string;
    skills: string[];
  };
}) => {
  return (
    <a
      href={`/portfolio/${card.link}`}
      className={cx(styles["card-sharp"], "portfolio-card-stagger opacity-0 mt-8")}
    >
      <div className={styles["card-sharp__image"]}>
        <Image src={card.image} alt={card.title} fill={true} sizes="100vw" />
        <div className={styles["card-sharp__overlay"]} />
      </div>

      <div className={styles["card-sharp__read-tab"]}>
        <span>Read</span>
        <Arrow />
        <div className={styles["card-sharp__read-tab__shadow"]} />
      </div>
      <div className={styles["card-sharp__content"]}>
        <div className={styles["card-sharp__content__text"]}>
          <h6>{card.title}</h6>
          <p>{card.description}</p>
        </div>
        <div className={styles["card-sharp__content__skills"]}>
          {card.skills.map((skill, index) => (
            <span key={`${index}-card-sharp-skill`}>{skill}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default PortfioCardSharp;
