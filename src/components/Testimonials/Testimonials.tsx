"use client";

// Package imports
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom imports
import styles from "./Testimonials.module.scss";
import data from "./testimonials.json";
import portfolioData from "./testomonials-portfolio.json";
import LowPolyBgTestimonials from "./LowPolyBgTestimonials";
import SecondaryLink from "../Link/SecondaryLink";
import Image from "next/image";

const Testimonials = ({ portfolio }: { portfolio?: boolean }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    id: "testimonials-carousel",
    dots: false,
    arrows: false,
    infinite: true,
    // infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
  };

  return (
    <div className={styles["testimonials__container"]}>
      <div className={styles["low-poly-bg-testimonials__container"]}>
        <LowPolyBgTestimonials />
      </div>
      <div className="slice">
        <div className={styles["testimonials__carousel"]}>
          <div className={styles["carousel-navigation"]}>
            <button
              className={styles["external-nav-btn"]}
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={styles["external-nav-btn"]}
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {(portfolio ? portfolioData : data).map((item, index) => (
              <div key={`testimonial-${index}`}>
                <Block data={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

type Testimonial = {
  name: string;
  photo: string;
  business: string;
  "business-link": string;
  title: string;
  experience: string;
  quote: string;
};
const Block = ({ data }: { data: Testimonial }) => {
  return (
    <div className={styles["testimonial-block"]}>
      <div className={styles["testimonial-block__content"]}>
        <div className={styles["testimonial-block__content__photo"]}>
          {data.photo ? (
            <Image
              src={data.photo}
              alt={data.name}
              fill={true}
              sizes="200px"
              className="object-cover"
            />
          ) : (
            <div
              className={
                styles["testimonial-block__content__photo__placeholder"]
              }
            >
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.5 58C57.0587 58 64.3076 62.4252 69.6523 70.3018C74.9971 78.1783 78 88.8609 78 100H21C21 88.8609 24.0029 78.1783 29.3477 70.3018C34.6924 62.4252 41.9413 58 49.5 58ZM50 14C59.9411 14 68 22.0589 68 32C68 41.9411 59.9411 50 50 50C40.0589 50 32 41.9411 32 32C32 22.0589 40.0589 14 50 14Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
        <div
          className={styles["testimonial-block__content__name-and-business"]}
        >
          <h4>{data.name}</h4>
          <span>|</span>
          <SecondaryLink
            href={data["business-link"]}
            label={data.business}
            external
            tabIndex={-1}
          />
        </div>
        <div className={styles["testimonial-block__content__header"]}>
          <span className="flex gap-2">
            <span style={{ display: "contents", fontWeight: 500 }}>
              {data.title}
            </span>{" "}
            | {data.experience}
          </span>
        </div>
        <p>{data.quote}</p>
      </div>
    </div>
  );
};

export default Testimonials;
