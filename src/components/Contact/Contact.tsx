"use client";

// Package imports
import { useState, useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";

// Custom imports
import Button from "../Button/Button";
import Link from "../Link/Link";
import styles from "./Contact.module.scss"; // Assuming you have a CSS module for styles
import SecondaryLink from "../Link/SecondaryLink";
import { useIsDesktop } from "~/helpers/useIsDesktop";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isDesktop = useIsDesktop();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xyzjqqde", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        // body: JSON.stringify(formData),
        body: new FormData(e.target as HTMLFormElement),
      });

      if (!response.ok) {
        setError(true);
        throw new Error("Network response was not ok");
      } else {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("container--contact");
      const upperRow = document.getElementById("upper-row--contact");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        upperRow,
        { y: isDesktop ? 56 : 84 },
        {
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "<"
      );
    });

    return () => {
      ctx.revert();
    };
  }, [isDesktop]);

  return (
    <div id="contact" className={styles["contact"]}>
      <div className="absolute top-[-140px]" id="contact-section" />
      <div
        id="container--contact"
        className={cx("slice", styles["contact__container"])}
      >
        <div className={styles["contact__upper-row__container"]}>
          <div id="upper-row--contact" className={styles["contact__upper-row"]}>
            <h2 id="title--contact" className="slice-title mb-2 lg:mb-0">
              Contact
            </h2>
            <div className={styles["contact__upper-row__info"]}>
              <p>{"(925) 200-7710"}</p>
              <div className={styles["contact__upper-row__info__divider"]} />
              <SecondaryLink
                href="mailto:dmvelzy@gmail.com"
                label="dmvelzy@gmail.com"
              />
            </div>
            <div className={styles["contact__upper-row__mobile-divider"]} />
          </div>
        </div>

        <div className={styles["contact__book-call"]}>
          <p>
            Book a free discovery call. I currently have availability during
            evenings or select daytime slots. Choose what works best for you in
            the link below.
          </p>
          <Link
            className="stagger z-[1]"
            href="https://calendly.com/dmvelzy/30min"
          >
            Book a free discovery call
          </Link>
        </div>

        {submitted ? (
          <p>Thanks! Your message has been sent.</p>
        ) : (
          <div className={styles["contact__form__container"]}>
            <p>Or, message me with some details about your project.</p>
            <form onSubmit={handleSubmit}>
              <div className={styles["top-row"]}>
                <div className={styles["top-row__item"]}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>

                <div className={styles["top-row__item"]}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
              </div>
              <div className={styles["message-row"]}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
              </div>
              {loading ? (
                <Button ariaLabel="Sending..." className="float-right" disabled>
                  Sending...
                </Button>
              ) : (
                <Button
                  ariaLabel="Send message"
                  className="float-right"
                  disabled={
                    !formData.email || !formData.name || !formData.message
                  }
                >
                  Send
                </Button>
              )}
              {error && <p className="text-red-500">Error submitting form.</p>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
