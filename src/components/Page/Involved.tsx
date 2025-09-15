"use client";

// Package imports
import Link from "next/link";

// Custom imports
import styles from "./Page.module.scss";
import LinkArrow from "~/res/svgs/linkArrow";

type InvolvedProps = {
    service: string;
    link: string;
}

export default function Involved({ service, link }: InvolvedProps) {
  return (
    <div className={styles["involved"]}>
      <span>This project involved </span>
      <Link href={link || "/services"}>
        <span>{service}</span>
        <LinkArrow />
      </Link>
    </div>
  );
}
