"use client";

// Package imports
import Image from "next/image";
import cx from "classnames";

// Custom imports
import styles from "./Page.module.scss";

type Props = {
  title: string;
  text: string;
  images: string[];
  swap?: boolean;
};

const TextAndImageBlock = ({ title, text, images, swap }: Props) => {
  return (
    <div className={cx(styles["taib"], { [styles["taib_swap"]]: swap })}>
      <div className={styles["taib__left"]}>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className={styles["taib__right"]}>
        {images.map((image, index) => (
          <div
            key={`taib-image-${title}-${index}`}
            className={styles["taib__right__img"]}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              fill={true}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 964px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextAndImageBlock;
