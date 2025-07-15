"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import cx from "classnames";

// Custom imports
import WebDesign from "~/res/svgs/webDesign";
import ToolIntegration from "~/res/svgs/toolIntegration";
import Performance from "~/res/svgs/performance";
import styles from "./Services.module.scss";

const Services = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("container--services");
      const title = document.getElementById("title--services");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".box-stagger",
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
        "<" // Start this animation at the same time as the previous one
      );
    });

    return () => {
      ctx.revert(); // Clean up the context to prevent memory leaks
    };
  }, []);

  return (
    <div className={styles["services__container"]}>
      <div className="overflow-hidden mb-8">
        <h2 id="title--services" className="slice-title">
          Services
        </h2>
      </div>
      <div id="container--services" className={cx("slice", styles["services"])}>
        <Block
          header="Website Design"
          description="Clean, responsive builds optimized for business goals."
          icon="webDesign"
        />
        <Block
          header="Tool Integration"
          description="Tag Manager, Meta Pixel, HubSpot, and consent managers."
          icon="toolIntegration"
        />
        <Block
          header="Performance Optimization"
          description="Speed, tracking, and GDPR-friendly setups."
          icon="performance"
        />
      </div>
    </div>
  );
};

type BlockProps = {
  icon?: string;
  header: string;
  description: string;
};

// bg-[rgba(255,255,255,0.7)] backdrop-blur-[8px]

const Block = ({ icon, header, description }: BlockProps) => (
  <div className="box-stagger bg-[var(--nonWhite)] flex-1 p-4 rounded-[12px] lg:rounded-[6px] shadow-xl flex lg:flex-col gap-6 lg:gap-4 justify-start lg:justify-center items-center">
    {icon === "webDesign" ? (
      <div className="border-[2px] border-[var(--marine)] bg-[rgba(53,79,82,0.2)] rounded-full p-4">
        <WebDesign />
      </div>
    ) : icon === "toolIntegration" ? (
      <div className="border-[2px] border-[var(--teal)] bg-[rgba(82,121,111,0.2)] rounded-full p-4">
        <ToolIntegration />
      </div>
    ) : (
      <div className="border-[2px] border-[var(--green)] bg-[rgba(132,169,140,0.2)] rounded-full p-4">
        <Performance />
      </div>
    )}
    <div className="flex flex-col gap-2 items-start lg:items-center">
      <h3 className="font-header text-[18px] lg:text-[22px] font-[500] lg:text-center">
        {header}
      </h3>
      <p className="font-sans text-[18px] lg:text-center">{description}</p>
    </div>
  </div>
);

export default Services;
