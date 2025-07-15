// Package imports
import cx from "classnames";

// Custom imports
import styles from "./Link.module.scss";

type LinkProps = {
  id?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

const Link = ({ id, href, className, children }: LinkProps) => {
  return (
    <a
      id={id}
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className={cx(styles["link"], className)}
    >
      {children}
    </a>
  );
};

export default Link;
