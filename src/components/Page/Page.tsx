"use client";

// Package imports
import gsap from "gsap";
import cx from "classnames";

// Custom imports
import LPBGFooter from "../LowPolyBackground/LPBGFooter";
import { useEffect } from "react";
import FloatingLinks from "../FloatingLinks/FloatingLinks";

type Props = {
  overflowHidden?: boolean;
  children: React.ReactNode;
  includeMaxWidth?: boolean;
  relative?: boolean;
};

const Page = ({
  overflowHidden = false,
  includeMaxWidth = true,
  relative = true,
  children,
}: Props) => {
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
      <div
        className={cx("mx-auto z-[1]", {
          "overflow-hidden": overflowHidden,
          "max-w-[964px] px-5 md:px-8 lg:px-0": includeMaxWidth,
          relative: relative,
        })}
      >
        {children}
      </div>
      <div className="h-[5vh]" />
      <LPBGFooter />
      <FloatingLinks />
    </div>
  );
};

export default Page;
