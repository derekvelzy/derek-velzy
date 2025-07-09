"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";

// Custom imports

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
      tl.fromTo(
        ".skill",
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.075,
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
    <div id="about" className="w-full relative z-10 h-screen">
      <div
        id="container--about"
        className="max-w-[980px] mx-auto w-full flex gap-8"
      >
        <div className="flex-1 h-fit">
          <div className="photo-frame aspect-[0.8] h-fit bg-[var(--lightGray)] shadow-xl rounded-md" />
          <div className="flex flex-wrap gap-2 mt-8">
            {skills.map((skill, index) => (
              <span
                key={`${index}-${skill}`}
                className="skill bg-[rgba(255,255,255,0.15)] text-white px-2 py-1 rounded-sm font-sans text-[12px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-2 text-white">
          <div className="overflow-hidden mb-8">
            <h2
              id="title--about"
              className="font-header text-[48px] font-[500] mx-auto"
            >
              About
            </h2>
          </div>
          <p id="copy--about" className="font-sans text-[18px] leading-[1.5]">
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
        </div>
      </div>
    </div>
  );
};

export default About;
