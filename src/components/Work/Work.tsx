"use client";

// Package imports
import Image from "next/image";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import cx from "classnames";

// Custom imports
import styles from "./Work.module.scss"; // Assuming you have a CSS module for styles
import projects from "./projects.json";
import SecondaryLink from "../Link/SecondaryLink";
import { useIsDesktop } from "~/helpers/useIsDesktop";
import LowPolyBgWork from "./LowPolyBgWork";
import { handleFocusChange } from "~/helpers/handleFocusChange";

gsap.registerPlugin(ScrollToPlugin);

type ProjectsType = (typeof projects)[0];

const Work = () => {
  const [focusedBlock, setFocusedBlock] = useState<number>(0);

  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!isDesktop) {
      const workContainer = document.getElementById("work");
      workContainer?.classList.remove(
        styles["work__container_unmounted-top"],
        styles["work__container_unmounted-bottom"]
      );
      return;
    }

    const handleScroll = () => {
      const workContainer = document.getElementById("work");
      if (!workContainer) return;

      // Scroll position - top of workContainee
      const actualizedScrollPosition = window.scrollY - workContainer.offsetTop;
      // Scrollable height of workContainer - viewport height
      const totalScrollableHeight =
        workContainer.scrollHeight - window.innerHeight;

      const progress = (actualizedScrollPosition / totalScrollableHeight) * 100;
      let adjustedProgress = progress;
      if (progress < 2) {
        adjustedProgress = 0; // Ensure progress doesn't go below 0%
      } else if (progress >= 98) {
        adjustedProgress = 100; // Ensure progress doesn't exceed 100%
      }

      const progressBarSlider = document.getElementById("progress-bar-slider");
      if (
        progressBarSlider &&
        adjustedProgress >= 0 &&
        adjustedProgress <= 100
      ) {
        progressBarSlider.style.width = `${adjustedProgress}%`;
      }

      if (progress < 0) {
        workContainer.classList.add(styles["work__container_unmounted-top"]);
        workContainer.classList.remove(
          styles["work__container_unmounted-bottom"],
          styles["work__container_mounted"]
        );
      } else if (progress > 100) {
        workContainer.classList.add(styles["work__container_unmounted-bottom"]);
        workContainer.classList.remove(
          styles["work__container_unmounted-top"],
          styles["work__container_mounted"]
        );
      } else {
        workContainer.classList.add(styles["work__container_mounted"]);
        workContainer.classList.remove(
          styles["work__container_unmounted-top"],
          styles["work__container_unmounted-bottom"]
        );
      }

      const currentBlockIndex = Math.floor(
        (actualizedScrollPosition / totalScrollableHeight) * 3
      );
      if (currentBlockIndex >= 0 && currentBlockIndex < 3) {
        setFocusedBlock(currentBlockIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("work");
      const lowPolyBgWork = document.getElementById("low-poly-bg-work");

      gsap.fromTo(
        lowPolyBgWork,
        {
          y: 0,
        },
        {
          y: "-50vh",
          ease: "linear",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ctx.revert(); // Clean up the context to prevent memory leaks
    };
  }, []);

  return (
    <div id="work" className={styles["work__container"]}>
      <div id="work-bg" className="fixed h-screen w-screen top-0 left-0 z-0">
        <LowPolyBgWork />
      </div>
      <div className={cx("slice", styles["work"])}>
        <div className="overflow-hidden">
          <h2
            className={cx(
              "slice-title title--work",
              styles["work__mobile-title"]
            )}
          >
            Work
          </h2>
        </div>
        <div id="work-blocks" className={styles["work__blocks"]}>
          <Block index={0} focusedBlock={focusedBlock} {...projects[0]} />
          <Block index={1} focusedBlock={focusedBlock} {...projects[1]} />
          <Block index={2} focusedBlock={focusedBlock} {...projects[2]} />
        </div>
      </div>
    </div>
  );
};

const Block = ({
  index,
  focusedBlock,
  titleLine1,
  titleLine2,
  location,
  description,
  image1,
  image2,
  skills,
  link,
}: { index: number; focusedBlock: number } & ProjectsType) => {
  const focused = focusedBlock === index;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("work");

      gsap.fromTo(
        ".title--work",
        { y: 60 },
        {
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 65%",
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
    <div
      id={`work-block-${index}`}
      className={cx(styles["block__container"], {
        [styles["block__container_focused"]]: focused,
      })}
    >
      <div className={styles["block"]}>
        <div
          className={cx(styles["block__title-row"], {
            [styles["block__title-row_first"]]: focused,
          })}
        >
          <h2 className="slice-title title--work">Work</h2>
          <div className={styles["block__title-row__mobile"]}>
            <div>
              <div className="overflow-hidden">
                <h3>{titleLine1}</h3>
              </div>
              <div className="overflow-hidden">
                <h3>{titleLine2}</h3>
              </div>
            </div>
            <p>{location}</p>
          </div>
          <div className={styles["block__title-row__progress"]}>
            <div
              className={cx(styles["block__title-row__progress__text"], {
                [styles["block__title-row__progress__text_first"]]: index === 0,
              })}
            >
              <span
                className={styles["block__title-row__progress__text__span1"]}
              >
                {index + 1}
              </span>
              <span
                className={cx(
                  styles["block__title-row__progress__text__span2"],
                  {
                    [styles["block__title-row__progress__text__span2_first"]]:
                      index === 0,
                  }
                )}
              >
                {" "}
                / 3
              </span>
            </div>
            <div
              className={cx(styles["progress-bar"], {
                [styles["progress-bar_first"]]: index === 0,
              })}
            >
              <div
                id="progress-bar-slider"
                className={styles["progress-bar__slider"]}
              />
              <div className={styles["progress-bar__block"]}>
                <div className={styles["progress-bar__block__divider"]} />
                <div className={styles["progress-bar__block__divider"]} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={cx(styles["block__images"], {
            [styles["block__images_focus-passed"]]:
              (index === 0 && focusedBlock > 0) ||
              (index === 1 && focusedBlock > 1),
          })}
        >
          <div className={styles["block__images__col-1"]}>
            <Image
              src={image1}
              alt={`${titleLine1} ${titleLine2} first image`}
              fill={true}
              className="object-cover"
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 980px"
            />
          </div>
          <div className={styles["block__images__col-2"]}>
            <Image
              src={image2}
              alt={`${titleLine1} ${titleLine2} second image`}
              fill={true}
              className="object-cover"
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 980px"
            />
          </div>
        </div>
        <div className={styles["block__content"]}>
          <div className={styles["block__content__col-1"]}>
            <div>
              <div className="overflow-hidden">
                <h3>{titleLine1}</h3>
              </div>
              <div className="overflow-hidden">
                <h3>{titleLine2}</h3>
              </div>
            </div>
            <p>{location}</p>
          </div>
          <div className={styles["block__content__col-2"]}>
            <div
              className={styles["block__content__col-2__description"]}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
            <div className={styles["block__content__bottom-row"]}>
              <ul className="flex gap-2">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <SecondaryLink
                id={`view-project-${index}`}
                href={`/${link}`}
                label="View project"
                light
                onKeyDown={(e) => {
                  if (e.key === "Tab") {
                    if (!e.shiftKey && index < 2) {
                      e.preventDefault();
                      gsap.to(window, {
                        scrollTo: {
                          y: window.scrollY + window.innerHeight,
                        },
                        duration: 0.5,
                        ease: "power4.out",
                      });
                      setTimeout(() => {
                        handleFocusChange(`view-project-${index + 1}`);
                      }, 550);
                    } else if (e.shiftKey && index > 0) {
                      e.preventDefault();
                      gsap.to(window, {
                        scrollTo: {
                          y: window.scrollY - window.innerHeight,
                        },
                        duration: 0.5,
                        ease: "power4.out",
                      });
                      setTimeout(() => {
                        handleFocusChange(`view-project-${index - 1}`);
                      }, 550);
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
