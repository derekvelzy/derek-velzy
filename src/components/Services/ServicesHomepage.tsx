"use client";

// Package imports
import { useState } from "react";
import cx from "classnames";
import gsap from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom imports
import services from "./services.json";
import styles from "./ServicesHomepage.module.scss";
import Link from "../Link/Link";

const settings = {
  id: "services-mobile-carousel-homepage",
  dots: true, 
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [blockIndex, setBlockIndex] = useState(0);

  const handleServiceChange = (index: number) => {
    setBlockIndex(index);

    gsap.to("#selected-service-block", {
      duration: 0.35,
      y: index * 64,
      ease: "power3.out",
    });

    const tl = gsap.timeline();

    tl.to(".service-stagger", {
      duration: 0.15,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.1,
      onComplete: () => setSelectedService(index),
    });
    tl.to(".service-stagger", {
      duration: 0.35,
      y: 0,
      opacity: 1,
      ease: "power2.out",
      stagger: 0.1,
    });
  };

  return (
    <div id="services" className={styles["services__container"]}>
      <div id="services-section" className={cx(styles["services"], "slice")}>
        <div className={styles["services__list"]}>
          <div
            id="selected-service-block"
            className={styles["services__list__selected-block"]}
          >
            <h5>{services[blockIndex].name}</h5>
          </div>
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceChange(index)}
              className={selectedService === index ? styles.active : ""}
              tabIndex={selectedService === index ? -1 : 0}
            >
              <h5>{service.name}</h5>
            </button>
          ))}
        </div>
        <div className={styles["services__details"]}>
          <div className={styles["services__details__svg-1"]}>
            <svg
              width="100%"
              height="116"
              viewBox="0 0 100 116"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,116 0,20 40,0 100,116" fill="currentColor" />
            </svg>
            <h2 id="title--services" className="slice-title">
              Services
            </h2>
          </div>

          <div className={styles["services__mobile-carousel"]}>
            <Slider {...settings}>
              {services.map((service, index) => (
                <div
                  key={`services-mobile-carousel-${index}`}
                  className={styles["services__mobile-carousel__slide"]}
                >
                  <div
                    className={
                      styles["services__mobile-carousel__slide__content"]
                    }
                  >
                    <div>
                      <h3>{service.name}</h3>
                      <p>{service.brief}</p>
                    </div>
                    <Link
                      href={
                        service["service-id"] === "web-design"
                          ? "/services"
                          : `/services#${service["service-id"]}`
                      }
                      withArrow
                    >
                      {service.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className={styles["services__details__content"]}>
            <div className={styles["services__details__content__text"]}>
              <h3 className="service-stagger">
                {services[selectedService].name}
              </h3>
              <p className="service-stagger">
                {services[selectedService].brief}
              </p>
            </div>
            <Link
              href={
                services[selectedService]["service-id"] === "web-design"
                  ? "/services"
                  : `/services#${services[selectedService]["service-id"]}`
              }
              withArrow
            >
              {services[selectedService].cta}
            </Link>
          </div>
          <div className={styles["services__details__svg-2"]}>
            <svg
              width="100%"
              height="52"
              viewBox="0 0 100 52"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 75,52 100,0" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
