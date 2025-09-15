"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";

// Custom imports
import styles from "./About.module.scss"; // Assuming you have a CSS module for styles
import Image from "next/image";
import PrimaryLink from "../Link/Link";

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

  return (
    <div id="about" className={styles["about"]}>
      <div className="absolute top-[-100px]" id="about-section" />
      <div id="container--about" className="gap-8 slice">
        <div className={styles["about__left"]}>
          <div
            className={cx(
              "photo-frame opacity-0 translate-y-[50px]",
              styles["about__left__photo-frame"]
            )}
          >
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/PortfolioPhoto.jpg"
              alt="Profile photo"
              fill={true}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 440px"
              className="object-cover"
            />
          </div>
        </div>
        <div className={cx(styles["about__right"], "pb-10")}>
          <div className={styles["about__right__title"]}>
            <h2 id="title--about" className="slice-title">
              About me
            </h2>
          </div>
          <div
            className={cx(
              "photo-frame opacity-0 translate-y-[50px]",
              styles["about__right__mobile-photo-frame"]
            )}
          >
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/PortfolioPhoto.jpg"
              alt="Profile photo"
              fill={true}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 440px"
            />
          </div>
          <p id="copy--about" className="mb-8 lg:mb-0">
            I’m a web developer and digital marketing tech specialist based in
            Orange County, California. With 4+ years of experience leading
            development in a lean marketing team, I build websites that are
            fast, accessible, and integrated with the tools businesses need to
            grow. I focus on clear communication and measurable results, so
            clients can stay focused on running their business.
          </p>
          <div className={styles["about__cta"]}>
            <PrimaryLink href="/about" withArrow>Read my full story</PrimaryLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
