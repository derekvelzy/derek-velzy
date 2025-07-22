"use client";

// Package imports
import { useEffect } from "react";
import gsap from "gsap";

// Custom imports
import styles from "./Page.module.scss";

type Props = {
    skills: string[];
    id: string;
    cn: string;
}

const Skills = ({ skills, id, cn }: Props) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById(id);

      gsap.fromTo(
        `.${cn}`,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.125,
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [id, cn]);

  return (
    <div id={id} className={styles["skills"]}>
      {skills.map((skill, index) => (
        <span key={`${index}-${skill}-${id}`} className={`${cn}`}>
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
