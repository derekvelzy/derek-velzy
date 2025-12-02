"use client";

// Package imports
import cx from "classnames";

// Custom imports
import styles from "./PortfolioSlices.module.scss";

const TwoColumns = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={cx(styles["two-columns"], className)} style={style}>
      {children}
    </div>
  );
};

export default TwoColumns;
