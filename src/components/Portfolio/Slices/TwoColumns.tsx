// Package imports

// Custom imports
import styles from "./PortfolioSlices.module.scss";

const TwoColumns = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["two-columns"]}>{children}</div>;
};

export default TwoColumns;
