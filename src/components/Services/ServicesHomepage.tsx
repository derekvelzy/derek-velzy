"use client";

// Package imports
import { useEffect, useState } from "react";
import cx from "classnames";
import gsap from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom imports
import services from "./services.json";
import styles from "./ServicesHomepage.module.scss";
import Link from "../Link/Link";
import SecondaryLink from "../Link/SecondaryLink";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("services");
      const title = document.getElementById("title--services");
      const servicesMarquee = document.getElementById("services--marquee");

      gsap.to(title, {
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(servicesMarquee, {
        x: -500,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ctx.revert(); // Clean up the context to prevent memory leaks
    };
  }, []);

  return (
    <div id="services" className={cx(styles["services__container"], "slice")}>
      <div className={styles["services__header"]}>
        <div className={styles["services__header__title"]}>
          <h2 id="title--services" className="slice-title translate-y-[62px]">
            Services
          </h2>
        </div>
        <SecondaryLink href="/services" light label="View All" />
      </div>
      <div id="services-section" className={styles["services"]}>
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
                      {service.subtitle && <h4>{service.subtitle}</h4>}
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
              {services[selectedService].subtitle && (
                <h4 className="service-stagger">
                  {services[selectedService].subtitle}
                </h4>
              )}
              <p className="service-stagger">
                {services[selectedService].brief}
              </p>
            </div>
            <Link
              variant="primary"
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
        </div>
      </div>
      <div className={styles["services__marquee"]}>
        <div
          id="services--marquee"
          className={styles["services__marquee__inner"]}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <div
              className={styles["services__marquee__item"]}
              key={`services-marquee-item-${i}`}
            >
              <p>From concept to live site in under 7 days</p>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
