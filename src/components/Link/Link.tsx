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
  external?: boolean;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
};

const PrimaryLink = ({
  id,
  href,
  className,
  withArrow = false,
  external = false,
  variant,
  children,
}: LinkProps) => {
  return (
    <Link
      id={id}
      rel={external ? "noreferrer noopener" : undefined}
      target={external ? "_blank" : "_self"}
      href={href}
      className={cx(
        styles["link"],
        {
          [styles["link_secondary"]]: variant === "secondary",
        },
        className
      )}
    >
      <span>{children}</span>
      {withArrow && <LinkArrow className={styles["link__arrow"]} />}
    </Link>
  );
};

export default PrimaryLink;
