"use client";

// Package imports
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Player from "@vimeo/player";

// Custom imports
import cx from "classnames";
import videoCover from "@public/img/video-cover-1.jpg";

const Zero = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const playerRef = useRef<Player>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    playerRef?.current?.on("end", () => {
      setVideoPlaying(false);
      playerRef.current?.setCurrentTime(0); // Reset video to start
    });

    if (videoRef.current) {
      const iframe = videoRef.current.querySelector("iframe");
      if (iframe) {
        playerRef.current = new Player(iframe); // Initialize the Vimeo Player
      }
    }
  }, []);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (videoRef.current && e.target instanceof Element) {
        console.log("bip!");
        if (playerRef.current) {
          if (videoPlaying) {
            playerRef.current.pause();
          } else {
            playerRef.current.play();
          }
          setVideoPlaying(!videoPlaying);
        }
      }
    };
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [videoPlaying, playerRef]);

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
      className="bg-section w-full relative z-10 mb-[112px]"
    >
      <div id="container--work" className="slice gap-8 flex-col">
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
        <div
          ref={videoRef}
          className="w-full bg-black aspect-[1.66] z-1 relative"
        >
          <iframe
            src={`https://player.vimeo.com/video/1085347461?h=d1b0762162&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&controls=0`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            title="Untitled"
            className="h-full w-full object-cover pointer-events-none"
          ></iframe>
          <div
            className={cx(
              "absolute w-full top-0 left-0 z-[1] h-full transition-all duration-500",
              videoPlaying ? "backdrop-blur-[none]" : "backdrop-blur-lg"
            )}
          />
          <div
            className={cx(
              "z-[10] absolute top-0 left-0 w-full h-full",
              videoPlaying ? "hidden" : "block"
            )}
          >
            <Image
              src={videoCover}
              alt={"video cover"}
              fill={true}
              sizes="(max-width: 479px) 50vw, (max-width: 1279px) 440px"
            />
          </div>
        </div>
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
