"use client";

// Package imports
import cx from "classnames";
import Link from "next/link";

// Custom importS
import LinkArrow from "~/res/svgs/linkArrow";
import styles from "./Link.module.scss";

type Props = {
  href: string;
  label: string;
  light?: boolean;
  id?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
  action?: () => void;
  external?: boolean;
  className?: string;
  tabIndex?: number;
};

const SecondaryLink = ({
  href,
  label,
  light,
  id,
  onKeyDown,
  action,
  external = false,
  className,
  tabIndex = 0,
}: Props) => {
  return (
    <Link
      id={id}
      className={cx(
        styles["secondary-link"],
        {
          [styles["secondary-link_light"]]: light,
        },
        className
      )}
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      role="button"
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      onClick={(e) => {
        if (action) {
          e.preventDefault();
          action();
        }
      }}
    >
      <p>{label}</p>
      <LinkArrow />
    </Link>
  );
};

export default SecondaryLink;
