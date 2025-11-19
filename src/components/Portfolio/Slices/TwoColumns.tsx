// Package imports
import cx from "classnames";

// Custom imports
import styles from "./PortfolioSlices.module.scss";

const TwoColumns = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={cx(styles["two-columns"], className)}>{children}</div>;
};

export default TwoColumns;
