"use client";

// Package imports
import Image from "next/image";
// import cx from "classnames";

// Custom imports
import styles from "./Page.module.scss";

type Props = {
  src: string;
  alt?: string;
  caption: string;
  imgStyles?: React.CSSProperties;
};

const ImageWithCaption = ({ src, alt, caption, imgStyles }: Props) => {
  return (
    <div className={styles["image-with-caption"]}>
      <div className="relative">
        <Image
          src={src}
          alt={alt || caption}
          width={964}
          height={1000}
          sizes="(max-width: 479px) 100vw, (max-width: 1279px) 964px"
          className="object-cover"
          style={imgStyles}
        />
      </div>

      <p>{caption}</p>
    </div>
  );
};

export default ImageWithCaption;
