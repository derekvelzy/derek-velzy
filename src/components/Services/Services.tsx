"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";

// Custom imports
import WebDesign from "~/res/svgs/webDesign";
import ToolIntegration from "~/res/svgs/toolIntegration";
import Performance from "~/res/svgs/performance";

const Services = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("container");

      gsap.fromTo(
        ".box-stagger",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.125,
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ctx.revert(); // Clean up the context to prevent memory leaks
    };
  }, []);

  return (
    <div className="w-full relative z-10 flex flex-col items-center h-screen justify-center">
      <h2 className="font-header text-[48px] font-[500] text-white mx-auto mb-8">
        Services
      </h2>
      <div
        id="container"
        className="max-w-[980px] mx-auto gap-8 flex w-full justify-between items-center items-stretch"
      >
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

const Block = ({ icon, header, description }: BlockProps) => (
  <div className="box-stagger bg-[var(--lightGray)] flex-1 p-4 rounded-lg shadow-xl flex flex-col justify-center items-center">
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

    <h3 className="font-header text-[22px] font-[500]">{header}</h3>
    <p className="font-sans text-[18px]">{description}</p>
  </div>
);

export default Services;
