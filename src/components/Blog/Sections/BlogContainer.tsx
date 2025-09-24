"use client";

// Package imports
import Script from "next/script";

// Custom imports
import styles from "./Sections.module.scss";

const BlogContainer = ({
  jsonLd,
  children,
}: {
  jsonLd: unknown;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.container}>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
};

export default BlogContainer;
