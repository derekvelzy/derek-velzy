"use client";

// Package imports
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

// Custom imports
import livingRoom from "@public/img/living-room.jpeg";
import JaggedDivider2 from "~/res/svgs/jaggedDivider2";
import styles from "./Blog.module.scss"; // Assuming you have a CSS module for styles

const Blog = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("container--blog");
      const title = document.getElementById("title--blog");
      const subtitles = document.getElementById("subtitles--blog");
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
        { y: 50 },
        {
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        "<"
      );
      tl.fromTo(
        subtitles,
        { y: 50 },
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
      ctx.revert();
    };
  }, []);

  const blogs = [
    {
      title:
        "From Layouts to Flow: How Web and Interior Design Mirror Each Other",
      description:
        "Many of us have walked into a friends home and felt instantly at ease. The sunlight from their window reflects off a piece of artwork...",
      image: livingRoom,
      href: "https://medium.com/@dmvelzy/from-layouts-to-flow-how-web-and-interior-design-mirror-each-other-0d1db9751fa6",
    },
  ];

  return (
    <>
      <div
        id="jagged-divider"
        className="w-full flex justify-center mb-[160px]"
      >
        <JaggedDivider2 />
      </div>
      <div id="blog" className="w-full h-screen">
        <div
          id="container--blog"
          className="max-w-[980px] mx-auto w-full flex gap-8 flex flex-col"
        >
          <div>
            <div className="overflow-hidden">
              <h2
                id="title--blog"
                className="font-header text-[48px] font-[500]"
              >
                Blog
              </h2>
            </div>
            <p id="subtitles--blog">
              Stories that I’ve been inspired to write.
            </p>
          </div>
          <div className="flex">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['blog-card']}
              >
                <div className={styles['blog-card__image']}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill={true}
                    sizes="(max-width: 479px) 50vw, (max-width: 1279px) 440px"
                  />
                </div>
                <h2 className="font-header font-[500] text-[22px]">
                  {blog.title}
                </h2>
                <p className="font-sans text-gray-600">{blog.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
