// Package imports

// Custom imports
import styles from "./PortfolioSlices.module.scss";

const ThreeColumns = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["three-columns"]}>{children}</div>;
};

export default ThreeColumns;
