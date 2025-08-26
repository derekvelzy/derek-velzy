"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

// Custom imports
import JaggedDivider2 from "~/res/svgs/jaggedDivider2";
import styles from "./JaggedDivider.module.scss";

gsap.registerPlugin(ScrollToPlugin);

const JaggedDivider = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const jaggedDivider = document.getElementById("jagged-divider");

      gsap.fromTo(
        ".jagged",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.125,
          scrollTrigger: {
            trigger: jaggedDivider,
            start: "top 75%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div id="jagged-divider" className={styles["jagged-divider"]}>
      <JaggedDivider2 />
    </div>
  );
};

export default JaggedDivider;
