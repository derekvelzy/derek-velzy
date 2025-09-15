// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";
import Image from "next/image";

// Custom imports
import services from "./services.json";
import styles from "./Services.module.scss";
import Link from "../Link/Link";
import SecondaryLink from "../Link/SecondaryLink";
import BookCallCTA from "../BookCallCTA/BookCallCTA";

const Services = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".services-stagger", {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.1,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const staggerClass = "services-stagger opacity-0 translate-y-[64px]";

  return (
    <div id="container--services" className={styles["services__container"]}>
      <div className="overflow-hidden mb-4">
        <h1 className={staggerClass}>Services</h1>
      </div>
      <div className="overflow-hidden">
        <p className={cx(styles["services__intro"], staggerClass)}>
          I help small businesses and lean teams grow online through
          professional web development and digital marketing technology. From
          web design and accessibility to tool integrations and analytics, my
          services are designed to make your website a reliable driver of
          business growth.
        </p>
      </div>
      <div className={styles["services"]}>
        <div className={styles["services__list"]}>
          {services.map((service, index) => (
            <div key={`service-${index}`} className={styles["services__item"]}>
              <div id={service["service-id"]} className="mt-[-120px]" />
              <div className={styles["services__image-container"]}>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill={true}
                  sizes="(max-width: 479px) 100vw, (max-width: 1279px) 440px"
                  className="object-cover"
                />
              </div>
              <div className={styles["services__content"]}>
                <h2>{service.name}</h2>
                <div
                  className={styles["services__description"]}
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                <div className={styles["services__ctas"]}>
                  {service["secondary-cta"] &&
                    service["secondary-cta-link"] && (
                      <SecondaryLink
                        href={service["secondary-cta-link"]}
                        label={service["secondary-cta"]}
                      />
                    )}
                  <Link
                    href={`/contact?service=${service["service-id"]}`}
                    withArrow
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
              <div
                className={cx(styles["services__divider"], {
                  hidden: index === services.length - 1,
                })}
              />
            </div>
          ))}
        </div>
      </div>
      <BookCallCTA label="Not sure which service is right for you? No problem, we can figure it out together." />
    </div>
  );
};

export default Services;
