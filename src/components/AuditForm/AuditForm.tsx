"use client";

// Package imports
import { useEffect, useState } from "react";
import gsap from "gsap";
import cx from "classnames";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import "keen-slider/keen-slider.min.css";

// Custom imports
import styles from "./AuditForm.module.scss"; // Assuming you have a styles file for Hero
import Close from "~/res/svgs/close";
import Button from "../Button/Button";

gsap.registerPlugin(ScrollToPlugin);

type Props = {
  show: boolean;
  onClose: () => void;
};

const AuditForm = ({ show, onClose }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stagger-audit-form",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.07,
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [show]);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest("#audit-form-container")
      ) {
        onClose();
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xzzypbnr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (!response.ok) {
        setError(true);
        throw new Error("Network response was not ok");
      } else {
        setSubmitted(true);
        setFormData({ name: "", email: "", website: "" });
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const staggerClass = "stagger-audit-form opacity-0 translate-y-[20px]";

  return (
    <div
      className={cx(styles["audit-form__background"], {
        [styles["audit-form__background_show"]]: show,
      })}
    >
      <div id="audit-form-container" className={styles["audit-form__container"]}>
        <div
          className={cx(styles["audit-form__container__header"], staggerClass)}
        >
          <h2>Website Audit</h2>
          <button
            className={styles["audit-form__container__header__close"]}
            onClick={onClose}
          >
            <Close />
          </button>
        </div>
        {submitted ? (
          <p>Thanks! Your website audit has been submitted.</p>
        ) : (
          <>
            <div className={styles["audit-form__container__details"]}>
              <p className={staggerClass}>
                {
                  "I’ll take a look at your site and send back a quick report showing how it performs on speed, mobile, tracking, and compliance."
                }
              </p>
              {/* <a className={staggerClass} href="/free-audit">
                {"What's included in a website audit?"}
              </a> */}
            </div>
            <form
              className={styles["audit-form__form"]}
              onSubmit={handleSubmit}
            >
              <input
                className={staggerClass}
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={handleChange}
                value={formData.name}
              />
              <input
                className={staggerClass}
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                value={formData.email}
              />
              <input
                className={staggerClass}
                name="website"
                type="url"
                placeholder="Website URL"
                required
                onChange={handleChange}
                value={formData.website}
              />
              {error && (
                <p className={styles["audit-form__form__error"]}>
                  Error submitting form. Please try again.
                </p>
              )}
              <Button
                className={staggerClass}
                variant="primary"
                type="submit"
                disabled={loading}
              >
                Submit
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuditForm;
