// Package imports
import cx from "classnames";
import Link from "next/link";

// Custom imports
import styles from "./Link.module.scss";
import LinkArrow from "~/res/svgs/linkArrow";

type LinkProps = {
  id?: string;
  href: string;
  className?: string;
  withArrow?: boolean;
  newPage?: boolean;
  children?: React.ReactNode;
};

const PrimaryLink = ({
  id,
  href,
  className,
  withArrow = false,
  newPage = false,
  children,
}: LinkProps) => {
  return (
    <Link
      id={id}
      rel="noopener noreferrer"
      target={newPage ? "_blank" : "_self"}
      href={href}
      className={cx(styles["link"], className)}
    >
      <span>{children}</span>
      {withArrow && <LinkArrow className={styles["link__arrow"]} />}
    </Link>
  );
};

export default PrimaryLink;
