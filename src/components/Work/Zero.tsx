"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";

// Custom imports

const Zero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("container--work");
      const title = document.getElementById("title--work");
      const subtitles = document.getElementById("subtitles--work");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
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
        subtitles,
        { y: 60 },
        {
          y: 0,
          duration: 0.75,
          delay: 0.15,
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
    <div
      id="work"
      data-theme="light"
      className="bg-section w-full relative z-10 mb-[160px]"
    >
      <div
        id="container--work"
        className="max-w-[980px] mx-auto w-full flex gap-8 flex flex-col"
      >
        <div className="overflow-hidden">
          <h2 id="title--work" className="font-header text-[48px] font-[500]">
            Work
          </h2>
        </div>
        <div
          id="subtitles--work"
          className="overflow-hidden flex justify-between items-end text-[var(--deepMarine)]"
        >
          <h3 className="font-header text-[22px] font-[500]">
            Zero Motorcycles
          </h3>
          <span className=" text-[18px]">2022 - Current</span>
        </div>
        <div className="w-full bg-black aspect-[1.66] z-1" />
        <div>
          <h3 className="font-header font-[500] text-[var(--deepMarine)] text-[24px] mb-4">
            Sr. Software Developer, Marketing
          </h3>
          <p className="text-[18px] leading-[1.5]">
            At Zero Motorcycles, I lead web and digital marketing initiatives
            that improve user experience and drive measurable growth. I manage
            cross-functional projects from strategy through implementation,
            optimizing tools like Tag Manager, Meta Pixel, and HubSpot. Known
            for my calm, reliable approach, I bring design thinking and
            technical execution together to deliver results.
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          <Bulletpoint />
          <Bulletpoint />
          <Bulletpoint />
        </div>
      </div>
    </div>
  );
};

const Bulletpoint = () => (
  <div className="flex gap-8">
    <div className="h-10 w-10 min-w-10 rounded-full border-[2px] border-black">
      X
    </div>
    <div className="text-[18px] leading-[1.5]">
      <h4 className="mb-2 font-header font-[500] text-[var(--deepMarine)]">
        Executed order 66
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
);

export default Zero;
