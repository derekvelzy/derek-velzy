"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";

// Custom imports
import styles from "./Contact.module.scss";
import SecondaryLink from "../Link/SecondaryLink";
import Linkedin from "~/res/svgs/linkedin";
import Mail from "~/res/svgs/mail";
import Phone from "~/res/svgs/phone";

const ContactPortfolio = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = document.getElementById("title--contact-portfolio");
      gsap.to(title, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
      });
      gsap.to("#copy--contact-portfolio", {
        y: 0,
        opacity: 1,
        delay: 0.1,
        duration: 0.75,
        ease: "power3.out",
      });
    });
    gsap.to(".stagger-contact-portfolio", {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.1,
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className={styles["contact-portfolio"]}>
      <div className="overflow-hidden">
        <h2
          id="title--contact-portfolio"
          className="slice-title translate-y-[50px]"
        >
          Contact
        </h2>
      </div>
      <p
        id="copy--contact-portfolio"
        className="opacity-0 translate-y-[20px] mb-12"
      >
        {
          "I'm always looking for new opportunities to work on interesting projects. If you have a project you'd like to discuss, please contact me."
        }
      </p>
      <div className={styles["contact-portfolio__container"]}>
        <div
          className={cx(
            styles["contact-portfolio__container__item"],
            "stagger-contact-portfolio opacity-0 translate-y-[20px]"
          )}
        >
          <Phone
            className={cx(
              styles["contact-portfolio__container__item__icon"],
              styles["contact-portfolio__container__item__icon_phone"]
            )}
          />
          <p>(925) 200-7710</p>
        </div>
        <div
          className={cx(
            styles["contact-portfolio__container__item"],
            "stagger-contact-portfolio opacity-0 translate-y-[20px]"
          )}
        >
          <Mail
            className={styles["contact-portfolio__container__item__icon"]}
          />
          <SecondaryLink
            href="mailto:dmvelzy@gmail.com"
            label="dmvelzy@gmail.com"
          />
        </div>
        <div
          className={cx(
            styles["contact-portfolio__container__item"],
            "stagger-contact-portfolio opacity-0 translate-y-[20px]"
          )}
        >
          <Linkedin
            className={styles["contact-portfolio__container__item__icon"]}
          />
          <SecondaryLink
            href="https://www.linkedin.com/in/dvelzy/"
            label="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPortfolio;
