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
      const copy = document.getElementById("copy--about");
      const workExperienceTitle = document.getElementById(
        "work-experience-title"
      );
      const workExperienceContainer = document.getElementById(
        "work-experience-container"
      );

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
        ".title--about",
        {
          opacity: 1,
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
        workExperienceTitle,
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
        workExperienceContainer,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        "<0.25"
      );
    });

    return () => {
      ctx.revert(); // Clean up the context to prevent memory leaks
    };
  }, []);

  const skills = [
    "Product Strategy",
    "Roadmapping",
    "MarTech Architecture",
    "Web Analytics",
    "HubSpot CRM Integration",
    "Cross-Functional Collaboration",
    "User Centered Design",
    "CMS Integration",
    "Prototyping",
    "Google Analytics",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Figma",
    "Asana",
    "Jira",
    "Shopify",
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
          <div className={styles["about__right__title__desktop"]}>
            <h1
              id="title--about"
              className="translate-y-[62px] opacity-0 title--about"
            >
              About
            </h1>
          </div>
          <div className={styles["about__right__mobile-photo-container"]}>
            <div
              className={cx(
                "photo-frame opacity-0 translate-y-[30px]",
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
            <div className={styles["about__right__title__mobile"]}>
              <h1 className="title--about translate-y-[50px] opacity-0">
                About
              </h1>
            </div>
          </div>
          <div>
            <p id="copy--about" className="opacity-0 translate-y-[50px] mb-16">
              I’m a Product Manager specializing in MarTech and digital
              experience, with five years of experience building scalable web
              systems, marketing technology pipelines, and customer-facing
              products. I started my career as a software engineer and grew into
              product by owning Zero Motorcycles’ entire marketing technology
              stack — from analytics and CRM integrations to front-end
              experience and e-commerce functionality.
              <br />
              <br />I work at the intersection of engineering, marketing, and
              UX, translating ambiguous needs into clear systems and measurable
              outcomes. I thrive in environments where I can partner with
              cross-functional teams, uncover insights, and ship solutions that
              are both technically sound and business-impactful.
            </p>
            <div className="overflow-hidden mb-8">
              <h2
                id="work-experience-title"
                className="translate-y-[40px] opacity-0 title--about"
              >
                Work Experience
              </h2>
            </div>
            <div
              id="work-experience-container"
              className="opacity-0 translate-y-[20px]"
            >
              <div className="mb-6 flex justify-between">
                <h4>Zero Motorcycles</h4>
                <p>2022 - Current</p>
              </div>
              <div
                className={cx(
                  "flex flex-col gap-2 mb-8",
                  styles["work-experience-container"]
                )}
              >
                <div className="flex flex-col gap-2 mb-2">
                  <h5>Product Manager, Digital</h5>
                  <h5>Sr. Software Developer, Marketing</h5>
                  <h5>Frontend Developer</h5>
                </div>
                <p>
                  Led the evolution of Zero’s marketing website as a digital
                  product, owning the intersection of marketing, technology, and
                  UX. Defined and optimized the MarTech stack to prioritize
                  scalability, reduce development overhead, and accelerate
                  go-to-market execution across campaigns and regions.
                </p>
                <br />
                <p>
                  Independently designed and developed Zero Motorcycles’ entire
                  web ecosystem — architecting the frontend, integrating backend
                  services, managing infrastructure, and implementing all
                  automation and tracking tools. I rebuilt the site on modern
                  frameworks, improved speed and reliability, and shipped every
                  major digital feature from concept to production. I also
                  partnered with the motorcycle UX dash team during early
                  discovery, contributing market research, concept development,
                  and a functional prototype.
                </p>
              </div>

              <div className="mb-4 flex justify-between">
                <h4>Visa</h4>
                <p>2021 - 2022</p>
              </div>
              <div
                className={cx(
                  "flex flex-col gap-2 mb-8",
                  styles["work-experience-container"]
                )}
              >
                <div className="flex flex-col gap-2 mb-2">
                  <h5>Associate Design Engineer</h5>
                </div>
                <p>
                  {`Created Visa's React and AngularJS UI components &
                  frameworks. Led project to update the React and Angular UI /
                  UX Design System from WCAG 2.0 to 2.1 Accessibility Standards.
                  Provided developer support to Visa engineers using the Design
                  System.`}
                </p>
              </div>
            </div>
          </div>
          <div className={styles["about__right__mobile-skills"]}>
            <Skills
              skills={skills}
              id="mobile-container-skill"
              cn="skill-mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
