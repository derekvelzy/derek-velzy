// Package imports
import Image from "next/image";

// Custom imports
import styles from "./Sections.module.scss";

const ImageWithCaption = ({
  imageSrc,
  caption,
  captionHidden,
}: {
  imageSrc: string;
  caption: string;
  captionHidden?: boolean;
}) => {
  return (
    <figure className={styles["image-with-caption"]}>
      <div className={styles["image-with-caption__image-container"]}>
        <Image
          src={imageSrc}
          alt={caption}
          fill={true}
          sizes="100vw, (max-width: 1023px) 990px"
          className="object-cover"
        />
      </div>
      {captionHidden ? null : (
        <figcaption className={styles["image-with-caption__caption"]}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageWithCaption;
