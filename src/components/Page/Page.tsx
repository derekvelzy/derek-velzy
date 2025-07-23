"use client";

// Package imports
import gsap from "gsap";

// Custom imports
import LPBGFooter from "../LowPolyBackground/LPBGFooter";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => {
  useEffect(() => {
    gsap.to(".title--flip", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.075,
      ease: "power2.out",
    });

    gsap.to(".header-img--flip", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.to(".text-and-img--flip", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.075,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="bg-[#F8F9FA] relative w-full">
      <div className="px-5 md:px-8 lg:px-0 max-w-[964px] mx-auto">{children}</div>
      <div className="h-[45vh]" />
      <LPBGFooter />
    </div>
  );
};

export default Page;
