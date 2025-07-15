// Package imports
import cx from "classnames";

// Custom importS
import LinkArrow from "~/res/svgs/linkArrow";
import styles from "./Link.module.scss";

type Props = { href: string; label: string; light?: boolean };

const SecondaryLink = ({ href, label, light }: Props) => {
  return (
    <a
      className={cx(styles["secondary-link"], {
        [styles["secondary-link_light"]]: light,
      })}
      href={href}
    >
      <p>{label}</p>
      <LinkArrow />
    </a>
  );
};

export default SecondaryLink;
