// Package imports
import cx from "classnames";

// Custom importS
import LinkArrow from "~/res/svgs/linkArrow";
import styles from "./Link.module.scss";

type Props = {
  href: string;
  label: string;
  light?: boolean;
  id?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const SecondaryLink = ({ href, label, light, id, onKeyDown }: Props) => {
  return (
    <a
      id={id}
      className={cx(styles["secondary-link"], {
        [styles["secondary-link_light"]]: light,
      })}
      href={href}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <p>{label}</p>
      <LinkArrow />
    </a>
  );
};

export default SecondaryLink;
