"use client";

// Package imports
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const { back } = useRouter();

  return (
    <div className={styles["header"]}>
      <div className={styles["header__top-row"]}>
        <div className={styles["header__top-row__left-side"]}>
          <button className="title--flip" onClick={back}>
            <Arrow />
          </button>
          <div className="overflow-hidden">
            <h2 className="title--flip">{title}</h2>
          </div>
        </div>
        <div className={styles["header__top-row__right-side"]}>
          <div className="overflow-hidden">
            <span className="title--flip">{place}</span>
          </div>
          <div className="overflow-hidden">
            <SecondaryLink
              href={href}
              label="Visit Website"
              className="title--flip"
            />
          </div>
        </div>
      </div>
      <div className={styles["header__img"]}>
        <Image
          src={src}
          alt={"Header Image"}
          fill={true}
          sizes="(max-width: 479px) 100vw, (max-width: 1279px) 964px"
          className="header-img--flip"
        />
      </div>
    </div>
  );
};

export default Header;
