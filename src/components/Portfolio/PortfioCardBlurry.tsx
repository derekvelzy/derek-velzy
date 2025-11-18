// Package imports
import Image from "next/image";
import cx from "classnames";

// Custom imports
import styles from "./Portfolio.module.scss";

const PortfioCardBlurry = ({
  card,
}: {
  card: { title: string; description: string; image: string; skills: string[] };
}) => {
  return (
    <div className={styles["portfolio-cards__card"]}>
      <div className={styles["portfolio-cards__card__image"]}>
        <Image src={card.image} alt={card.title} fill={true} sizes="100vw" />
      </div>
      <div className={styles["portfolio-cards__card__overlay"]}>
        <div className={cx(styles["portfolio-cards__card__overlay__blur"])} />
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
  );
};

export default PortfioCardBlurry;
