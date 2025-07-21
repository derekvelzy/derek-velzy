// Package imports

// Custom imports
import SecondaryLink from "../Link/SecondaryLink";
import styles from "./Page.module.scss";

type Props = {
    title: string;
    place: string;
    href: string;
}

const Header = ({ title, place, href }: Props) => {
  return (
    <div className={styles["header"]}>
      <h2 className="text-[var(--darkGray)]">{title}</h2>
      <div className={styles["header__right-side"]}>
        <span>{place}</span>
        <SecondaryLink 
          href={href}
          label="View Project"
        />
      </div>
    </div>
  );
};

export default Header;
