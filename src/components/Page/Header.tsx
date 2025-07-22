"use client";

// Package imports
import Image from "next/image";

// Custom imports
import SecondaryLink from "../Link/SecondaryLink";
import styles from "./Page.module.scss";
import Arrow from "~/res/svgs/arrow";

type Props = {
  title: string;
  place: string;
  href: string;
  src: string;
};

const Header = ({ title, place, href, src }: Props) => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header__top-row"]}>
        <div className={styles["header__top-row__left-side"]}>
          <button onClick={() => window.history.back()}>
            <Arrow />
          </button>
          <h2 className="text-[var(--darkGray)]">{title}</h2>
        </div>
        <div className={styles["header__top-row__right-side"]}>
          <span>{place}</span>
          <SecondaryLink href={href} label="Visit Website" />
        </div>
      </div>
      <div className={styles["header__img"]}>
        <Image
          src={src}
          alt={"Header Image"}
          fill={true}
          sizes="(max-width: 479px) 100vw, (max-width: 1279px) 964px"
        />
      </div>
    </div>
  );
};

export default Header;
