"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";

// Custom imports
import styles from "./About.module.scss"; // Assuming you have a CSS module for styles
import Skills from "../Page/Skills";

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("container--about");
      const title = document.getElementById("title--about");
      const copy = document.getElementById("copy--about");
      // const aboutName = document.getElementById("about-name");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".photo-frame",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.125,
        }
      );
      tl.fromTo(
        title,
        { y: 60 },
        {
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "<"
      );
      tl.fromTo(
        copy,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      );

      // gsap.fromTo(
      //   aboutName,
      //   {
      //     y: 20,
      //     opacity: 0,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 0.75,
      //     ease: "power3.out",
      //     scrollTrigger: {
      //       trigger: aboutName,
      //       start: "top 85%",
      //       end: "bottom top",
      //       toggleActions: "play none none reverse",
      //     },
      //   }
      // );
    });

    return () => {
      ctx.revert(); // Clean up the context to prevent memory leaks
    };
  }, []);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HubSpot",
    "Figma",
    "Asana",
    "Netlify",
    "Shopify",
    "Google Tag Manager",
    "Prismic CMS",
    "Python",
  ];

  return (
    <div id="about" className={styles["about"]}>
      <div className="absolute top-[-100px]" id="about-section" />
      <div id="container--about" className="slice gap-8">
        <div className={styles["about__left"]}>
          <div
            className={cx("photo-frame", styles["about__left__photo-frame"])}
          />
          <Skills skills={skills} id="desktop-container-skill" cn="skill" />
        </div>
        <div className={styles["about__right"]}>
          <div className={styles["about__right__title"]}>
            <h2 id="title--about" className="slice-title">
              About
            </h2>
          </div>
          <div
            className={cx(
              "photo-frame",
              styles["about__right__mobile-photo-frame"]
            )}
          />
          <p id="copy--about" className="mb-8 lg:mb-0">
            I’m a web developer and digital marketing tech specialist who works
            best in lean, fast-moving environments - where quanitifiable
            results, clear decision-making, and staying on schedule matter most.
            <br />
            <br />
            Currently, I lead development on a busy marketing team, owning the
            company’s main website and supporting systems from design through
            deployment. I build campaign landing pages, optimize site
            performance and accessibility, integrate marketing tools like Google
            Analytics, Meta Pixel, and HubSpot, and implement GDPR and
            CCPA-compliant consent management - all with minimal oversight and a
            focus on driving business-critical goals.
            <br />
            <br />
            I don’t just write clean, scalable code - I make sure your web
            traffic and conversions work toward real business growth. Whether
            you’re launching your first site, troubleshooting tracking issues,
            or need everyhing to “talk to each other”, I can help -
            communicating in plain English, without all the tech jargon.
            <br />
            <br />
            If you’re looking for a developer who understand how your website
            fits into the bigger picture of marketing and growth, let’s talk.
          </p>
          <div className={styles["about__right__mobile-skills"]}>
            <Skills
              skills={skills}
              id="mobile-container-skill"
              cn="skill-mobile"
            />
          </div>
        </div>
      </div>
      <div className={cx(styles["about-name"], "slice")}>
        <div className={styles["about-name__content"]}>
          <div className="overflow-hidden">
            <h3 id="about-name">About the name</h3>
          </div>
          <p>
            “Sites by Velzy” reflects a family connection to California surf
            history. Dale Velzy, a distant relative of mine, was a pioneering
            surfboard shaper and ran his shop under the name “Surf Boards by
            Velzy.” My work is in a very different medium, but I admire that
            same spirit of craftsmanship and clarity. Where he shaped
            surfboards, I shape websites - both built to serve people reliably
            and stand the test of time.
          </p>
        </div>
        <div className={styles["about-name__img"]} />
      </div>
    </div>
  );
};

export default About;
