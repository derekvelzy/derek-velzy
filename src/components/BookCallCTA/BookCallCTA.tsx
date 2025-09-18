"use client";

// Package imports
import cx from "classnames";

// Custom imports
import styles from "./BookCallCTA.module.scss";
import JaggedDivider from "../JaggedDivider/JaggedDivider";
import Link from "../Link/Link";

const BookCallCTA = ({
  label,
  smallPadding = false,
}: {
  label: string;
  smallPadding?: boolean;
}) => {
  return (
    <div className={cx({ [styles["small-padding"]]: smallPadding })}>
      <JaggedDivider />
      <div className={styles["book-call-cta"]}>
        <p>{label}</p>
        <Link href="https://calendly.com/dmvelzy/30min" external>
          Book a free discovery call
        </Link>
      </div>
    </div>
  );
};

export default BookCallCTA;
