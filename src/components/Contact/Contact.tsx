"use client";

// Package imports
import { useState, useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";

// Custom imports
import Button from "../Button/Button";
import Link from "../Link/Link";
import styles from "./Contact.module.scss"; // Assuming you have a CSS module for styles

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        { y: 56 },
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
  }, []);

  return (
    <div id="contact" className={styles["contact"]}>
      <div
        id="container--contact"
        className={cx("slice", styles["contact__container"])}
      >
        <div className={styles["contact__upper-row__container"]}>
          <div id="upper-row--contact" className={styles["contact__upper-row"]}>
            <h2 id="title--contact" className="slice-title">
              Contact
            </h2>
            <div className={styles["contact__upper-row__info"]}>
              <p>{"(925) 200-7710"}</p>
              <div className={styles["contact__upper-row__info__divider"]} />
              <a href="mailto:dmvelzy@gmail.com">
                <p>dmvelzy@gmail.com</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M14 0V9.5H13V1.72656L1 13.7266L0.292969 13.0195L12.3125 1H4V0H14Z"
                    fill="#52796F"
                  />
                </svg>
              </a>
            </div>
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
                <Button className="float-right" disabled>
                  Sending...
                </Button>
              ) : (
                <Button
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
      <div className={styles["contact__footer"]}>
        <p>Designed and Developed by Derek Velzy</p>
        <p>2025</p>
      </div>
    </div>
  );
};

export default Contact;
