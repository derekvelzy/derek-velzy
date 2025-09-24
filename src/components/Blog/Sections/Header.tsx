"use client";

// Package imports

// Custom imports
import styles from "./Sections.module.scss";
import SecondaryLink from "~/components/Link/SecondaryLink";

const Header = ({
  text,
  date,
  href,
}: {
  text: string;
  date: string;
  href?: string;
}) => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header__breadcrumbs"]}>
        <a href="/articles">Articles</a> / <span>{text}</span>
      </div>
      <h1>{text}</h1>
      <h5>By Derek Velzy</h5>
      <div className={styles["header__details"]}>
        <span>{date}</span>
        {href && <SecondaryLink external href={href} label="View on Medium" />}
      </div>
    </div>
  );
};

export default Header;
