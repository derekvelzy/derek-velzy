"use client";

// Package imports
import { JSX } from "react";
import cx from "classnames";

// Custom imports
import Github from "~/res/svgs/github";
import Linkedin from "~/res/svgs/linkedin";
import Mail from "~/res/svgs/mail";
import styles from "./FloatingLinks.module.scss";

const FloatingLinks = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <div className={cx("z-20 flex-col gap-4", mobile ? "relative flex lg:hidden" : "hidden lg:flex fixed bottom-8 left-8")}>
      <FloatingLink
        label="Send email"
        href="mailto:dmvelzy@gmail.com"
        icon={<Mail />}
      />
      <FloatingLink
        label="Connect on LinkedIn"
        href="https://www.linkedin.com/in/dvelzy/"
        icon={<Linkedin />}
      />
      <FloatingLink
        label="View Github profile"
        href="https://github.com/derekvelzy"
        icon={<Github />}
      />
    </div>
  );
};

type Props = {
  label?: string;
  href: string;
  icon: JSX.Element;
};

const FloatingLink = ({ label, href, icon }: Props) => {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx(
        styles["floating-link"],
        {
          [styles["boxy"]]:
            href.includes("mailto") || href.includes("linkedin"),
        },
        "stagger"
      )}
    >
      <div>{icon}</div>
      <div className={styles["floating-link__svg-container"]}>
        <svg viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="#E1E9E4"
            stroke="var(--green)"
            strokeWidth="6"
            strokeDasharray="251.2"
            strokeDashoffset="251.2"
          />
          <path
            d="M46.5 33C46.5 33.6566 45.1566 35.9997 43.5 36C41.8431 36 40.5 33.6569 40.5 33V11.0244L6.64453 45.5976C5.48547 46.7811 3.58323 46.8033 2.39941 45.6445C1.21644 44.4855 1.19727 42.5859 2.35547 41.4023L37.0225 6H13.5C11.8431 6 10.5 4.65684 10.5 3C10.5 1.34315 11.8431 0 13.5 0H46.5V33Z"
            fill="var(--green)"
            transform="scale(0.75) translate(42, 42)"
          />
        </svg>
      </div>
    </a>
  );
};

export default FloatingLinks;
