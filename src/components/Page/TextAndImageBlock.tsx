"use client";

// Package imports
import Image from "next/image";
import cx from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom imports
import styles from "./Page.module.scss";

type Props = {
  title: string;
  text: string;
  images?: string[];
  swap?: boolean;
  square?: boolean; // Optional prop for image aspect ratio
};

const TextAndImageBlock = ({ title, text, images, swap, square }: Props) => {
  const settings = {
    id: `taib-carousel-${title}`,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={cx(styles["taib"], { [styles["taib_swap"]]: swap })}>
      <div className={styles["taib__left"]}>
        <div className="overflow-hidden mb-8">
          <h3 className="text-and-img--flip">{title}</h3>
        </div>
        <div
          className={cx("text-and-img--flip", styles["taib__left__content"])}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      {(images ?? []).length > 0 && (
        <div
          className={cx(styles["taib__right"], {
            [styles["taib__right_square"]]: square,
          })}
        >
          <div className={styles["taib__right__images"]}>
            {images?.map((image, index) => (
              <div
                key={`taib-image-${title}-${index}`}
                className={styles["taib__right__images__img"]}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  fill={true}
                  sizes="(max-width: 479px) 100vw, (max-width: 1279px) 964px"
                  className="text-and-img--flip"
                />
              </div>
            ))}
          </div>
          <div
            id={`taib-right-${title}`}
            className={styles["taib__right__carousel"]}
          >
            {images && images.length > 1 ? (
              <Slider {...settings}>
                {images?.map((image, index) => (
                  <div
                    key={`taib-carousel-image-${title}-${index}`}
                    className={styles["taib__right__carousel__img"]}
                  >
                    <Image
                      src={image}
                      alt={`Carousel Image ${index + 1}`}
                      fill={true}
                      sizes="(max-width: 479px) 100vw, (max-width: 1279px) 964px"
                    />
                  </div>
                ))}
              </Slider>
            ) : images && images.length === 1 ? (
              <div className={styles["taib__right__carousel__img"]}>
                <Image
                  src={images[0]}
                  alt="Carousel Image"
                  fill={true}
                  sizes="(max-width: 479px) 100vw, (max-width: 1279px) 964px"
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAndImageBlock;
