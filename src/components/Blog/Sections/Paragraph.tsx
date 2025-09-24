// Package imports
import cx from "classnames";

// Custom imports
import styles from "./Sections.module.scss";

const Paragraph = ({ text, quote }: { text: string; quote?: boolean }) => {
  return (
    <div
      className={cx(styles["paragraph__container"], {
        [styles["paragraph__quote"]]: quote,
      })}
    >
      {quote && <div className={styles["paragraph__quote-bar"]} />}
      <p className={styles["paragraph"]}>{text}</p>
    </div>
  );
};

export default Paragraph;
