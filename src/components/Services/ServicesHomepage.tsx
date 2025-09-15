"use client";

// Package imports
import { useState } from "react";
import cx from "classnames";
import gsap from "gsap";

// Custom imports
import services from "./services.json";
import styles from "./ServicesHomepage.module.scss";
import Button from "../Button/Button";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [blockIndex, setBlockIndex] = useState(0);

  const handleServiceChange = (index: number) => {
    setBlockIndex(index);

    gsap.to("#selected-service-block", {
      duration: 0.35,
      y: index * 80,
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
              className={styles["services__details__svg-1_desktop"]}
            >
              <polygon points="0,116 0,20 40,0 100,116" fill="currentColor" />
            </svg>
            <svg
              width="100%"
              height="180"
              viewBox="0 0 100 180"
              preserveAspectRatio="none"
              aria-hidden="true"
              className={styles["services__details__svg-1_mobile"]}
            >
              <polygon points="0,180 0,20 80,0 100,180" fill="currentColor" />
            </svg>

            <h2 id="title--services" className="slice-title">
              Services
            </h2>
            <select
              value={selectedService}
              onChange={(e) => handleServiceChange(Number(e.target.value))}
            >
              {services.map((service, index) => (
                <option key={index} value={index}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles["services__details__content"]}>
            <div className={styles["services__details__content__text"]}>
              <h3 className="service-stagger">
                {services[selectedService].name}
              </h3>
              <div
                className="service-stagger"
                dangerouslySetInnerHTML={{
                  __html: services[selectedService].description,
                }}
              />
            </div>
            <Button
              action={() => {
                const contactName = document.getElementById("name");
                const serviceSelect = document.getElementById("service-select");
                if (contactName && serviceSelect) {
                  contactName.focus();

                  if (serviceSelect instanceof HTMLSelectElement) {
                    serviceSelect.value = services[selectedService].name;
                  }
                }
              }}
              ariaLabel="Go to contact section"
            >
              {services[selectedService].cta}
            </Button>
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
