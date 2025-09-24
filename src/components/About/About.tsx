"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";

// Custom imports
import styles from "./About.module.scss"; // Assuming you have a CSS module for styles
import Skills from "../Page/Skills";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("container--about");
      const title = document.getElementById("title--about");
      const copy = document.getElementById("copy--about");
      const aboutName = document.getElementById("about-name");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".photo-frame", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.125,
      });
      tl.to(
        title,
        {
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "<"
      );
      tl.to(
        copy,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      );
      tl.fromTo(
        aboutName,
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
      <div className="absolute top-[-100px]" id="about-section" />
      <div id="container--about" className="gap-8 flex">
        <div className={styles["about__left"]}>
          <div
            className={cx(
              "photo-frame opacity-0 translate-y-[50px]",
              styles["about__left__photo-frame"]
            )}
          >
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/PortfolioPhoto.jpg"
              alt="Derek Velzy profile photo"
              fill={true}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 440px"
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <Skills skills={skills} id="desktop-container-skill" cn="skill" />
          </div>
        </div>
        <div className={styles["about__right"]}>
          <div className={styles["about__right__title"]}>
            <h1 id="title--about" className="translate-y-[62px]">About</h1>
          </div>
          <div
            className={cx(
              "photo-frame opacity-0 translate-y-[50px]",
              styles["about__right__mobile-photo-frame"]
            )}
          >
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/PortfolioPhoto.jpg"
              alt="Derek Velzy profile photo"
              fill={true}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 440px"
            />
          </div>
          <p id="copy--about" className="mb-8 lg:mb-0 opacity-0 translate-y-[50px]">
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
            Based in Orange County, California, I partner with businesses
            locally and remotely to deliver websites that are fast, accessible,
            and built to drive measurable results. If you’re looking for a
            developer who understand how your website fits into the bigger
            picture of marketing and growth, let’s talk.
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
      <div id="about-name" className={styles["about-name"]}>
        <div className={styles["about-name__content"]}>
          <div className="overflow-hidden">
            <h3>About the name</h3>
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
        <div className={styles["about-name__img"]}>
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/D1B765F9-8D1B-48F8-B9DB-063E9A9F677C.JPG"
            alt="Velzy surf photo"
            fill={true}
            sizes="(max-width: 479px) 100vw, (max-width: 1279px) 440px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
