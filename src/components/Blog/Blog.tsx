"use client";

// Package imports
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import cx from "classnames";

// Custom imports
import styles from "./Blog.module.scss";
import blogs from "./blogs.json";

gsap.registerPlugin(ScrollToPlugin);

const Blog = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("container--blog");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(
        ".blog-stagger",
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1,
        },
        "<"
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const blogStagger = "blog-stagger opacity-0 translate-y-[12px]";

  return (
    <div id="blog" className={styles["blogs__container"]}>
      <div className="absolute top-[-140px]" id="blog-section" />
      <div id="container--blog" className={cx("", styles["blogs"])}>
        <div className="mb-8">
          <div className={styles["blogs__title"]}>
            <h2 id="title--blog" className={cx("slice-title", blogStagger)}>
              Articles
            </h2>
          </div>
          <p id="subtitles--blog" className={blogStagger}>
            Practical notes on web design, accessibility, and site flow. Short reads you can apply the same day.
          </p>
        </div>
        <div className={styles["blogs__list"]}>
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cx(styles["blog-card"], blogStagger)}
            >
              <div className={styles["blog-card__image"]}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill={true}
                  sizes="(max-width: 479px) 100vw, (max-width: 1279px) 440px"
                />
              </div>
              <h2 className={styles["blog-card__title"]}>{blog.title}</h2>
              <span>{blog.date}</span>
              <p className="font-sans text-gray-600">{blog.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
