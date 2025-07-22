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
            I’m a web developer who thrives in lean environments—where
            initiative, clarity, and results matter most.
            <br />
            <br />
            For the past 4 years, I’ve worked as the solo web developer on a
            fast-paced marketing team, building and maintaining
            business-critical websites from the ground up. From UX-driven design
            to advanced integrations like Google Tag Manager, Meta Pixel,
            HubSpot, and consent management solutions, I’ve handled it all—with
            minimal oversight and a deep understanding of how development
            supports marketing goals.
            <br />
            <br />I don’tjust write clean, scalable code—I help businesses
            track, convert, and grow online. Whether it’s launching a new
            landing page, troubleshooting analytics, or optimizing for
            performance, I bring a calm, thoughtful approach to every project.
            <br />
            <br />
            If you’re looking for someone who can design and build with
            purpose—and who understands the tools that drive modern
            marketing—let’s talk.
          </p>
          <div className={styles["about__right__mobile-skills"]}>
            <Skills
              skills={skills}
              id="mobile-container-skill"
              cn="skill-mobile"
            />
          </div>
          {/* <div
            className={cx(
              styles["about__right__mobile-skills"],
              styles["mobile-skills"]
            )}
          >
            {skills.map((skill, index) => (
              <span key={`${index}-${skill}`} className="skill">
                {skill}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
