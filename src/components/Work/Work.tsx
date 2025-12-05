"use client";

// Package imports
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import cx from "classnames";
import { usePathname, useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom imports
import styles from "./Work.module.scss"; // Assuming you have a CSS module for styles
import projects from "./projects.json";
import SecondaryLink from "../Link/SecondaryLink";
import { useIsDesktop } from "~/helpers/useIsDesktop";
import LowPolyBgWork from "./LowPolyBgWork";
import { handleFocusChange } from "~/helpers/handleFocusChange";
import navStyles from "../Nav/Nav.module.scss";

gsap.registerPlugin(ScrollToPlugin);

type ProjectsType = (typeof projects)[0];

const Work = () => {
  const [focusedBlock, setFocusedBlock] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [totalSlides] = useState<number>(projects.length);
  const sliderRef = useRef<Slider>(null);

  const isDesktop = useIsDesktop();
  const pathname = usePathname();

  const settings = {
    id: "work-mobile-carousel",
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

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

      // const progressBarSlider = document.getElementById("progress-bar-slider");
      // if (
      //   progressBarSlider &&
      //   adjustedProgress >= 0 &&
      //   adjustedProgress <= 100
      // ) {
      //   progressBarSlider.style.width = `${adjustedProgress}%`;
      // }

      const verticalProgressBarSlider = document.getElementById(
        `vertical-progress-bar-slider`
      );
      if (
        verticalProgressBarSlider &&
        adjustedProgress >= 0 &&
        adjustedProgress <= 100
      ) {
        verticalProgressBarSlider.style.top = `${adjustedProgress}%`;
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
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop, pathname]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isDesktop) return;

      const container = document.getElementById("work");
      const lowPolyBgWork = document.getElementById("low-poly-bg-work");
      const workBg = document.getElementById("work-bg");

      gsap.fromTo(
        lowPolyBgWork,
        {
          y: 0,
        },
        {
          y: "-75vh",
          ease: "linear",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        workBg,
        {
          display: "none",
        },
        {
          display: "block",
          duration: 0.01,
          scrollTrigger: {
            trigger: container,
            start: "-10% top",
            end: "130% bottom",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ctx.revert(); // Clean up the context to prevent memory leaks
    };
  }, [isDesktop]);

  return (
    <div id="work" className={styles["work__container"]}>
      <div className="absolute lg:top-[64px] top-[-80px]" id="work-section" />
      <div id="work-bg" className={styles["work-bg"]}>
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
          <div
            className={
              "absolute bottom-0 right-[-2rem] w-[1px] h-full flex items-center justify-center"
            }
          >
            <div className={"h-[calc(100vh-160px)] max-h-[680px] w-[2px]"}>
              <div className="h-full flex flex-col items-end justify-end w-[2px]">
                <div className="w-[2px] min-h-[88px] bg-transparent" />
                <div
                  className={
                    "w-[2px] max-h-[312px] h-full bg-[rgba(255,255,255,0.25)] relative"
                  }
                >
                  <div className="absolute w-[2px] h-[8px] bg-[var(--deepMarine)] top-[33%]" />
                  <div className="absolute w-[2px] h-[8px] bg-[var(--deepMarine)] bottom-[33%]" />
                  <div
                    id="vertical-progress-bar-slider"
                    className="rounded-full w-[12px] h-[12px] bg-[var(--deepMarine)] border-[1px] border-[var(--nonWhite)] absolute top-0 right-[-5px]"
                  />
                </div>
                <div
                  className={"w-[1px] min-h-[280px] h-[280px] bg-transparent"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["work__mobile-carousel"]}>
          <div className={styles["carousel-navigation"]}>
            <span className={styles["slide-counter"]}>
              {currentSlide + 1} / {totalSlides}
            </span>
            <button
              className={styles["external-nav-btn"]}
              onClick={() => sliderRef.current?.slickPrev()}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={styles["external-nav-btn"]}
              onClick={() => sliderRef.current?.slickNext()}
              disabled={currentSlide === totalSlides - 1}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <Block index={index} focusedBlock={focusedBlock} {...project} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div
        id="path-change-curtain"
        className="fixed bottom-0 left-0 w-screen h-0 z-10 bg-[var(--nonWhite)] opacity-0"
      />
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
  const router = useRouter();

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

  const routeToProject = () => {
    gsap.to(".title--work", {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(".progress-text", {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(`#progress-bar-${0}`, {
      width: "0",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to("#path-change-curtain", {
      height: "100vh",
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.35,
      onComplete: () => {
        router.push(`/${link}`);
      },
    });
    setTimeout(() => {
      const logo = document.getElementById("logo");
      const burger = document.getElementById("burger-container");
      logo?.classList.remove(navStyles["light-theme"]);
      burger?.classList.remove(navStyles["light-theme"]);
    }, 500);

    if (focused) {
      gsap.to(`.work-title-${index}`, {
        opacity: 0,
        y: 60,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.to(`.work-img-fade-${index}`, {
        opacity: 0,
        y: 60,
        duration: 0,
        stagger: 0,
        ease: "power3.out",
      });
      gsap.to(`.work-fade-${index}`, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

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
              className={cx(
                "progress-text",
                styles["block__title-row__progress__text"],
                {
                  [styles["block__title-row__progress__text_first"]]:
                    index === 0,
                }
              )}
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
            {/* <div
              id={`progress-bar-${index}`}
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
            </div> */}
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
              className={cx("object-cover", `work-img-fade-${index}`)}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 980px"
            />
          </div>
          <div className={styles["block__images__col-2"]}>
            <Image
              src={image2}
              alt={`${titleLine1} ${titleLine2} second image`}
              fill={true}
              className={cx("object-cover", `work-img-fade-${index}`)}
              sizes="(max-width: 479px) 100vw, (max-width: 1279px) 980px"
            />
          </div>
        </div>
        <div className={styles["block__content"]}>
          <div className={styles["block__content__col-1"]}>
            <div>
              <div className="overflow-hidden">
                <h3 className={`work-title-${index}`}>{titleLine1}</h3>
              </div>
              <div className="overflow-hidden">
                <h3 className={`work-title-${index}`}>{titleLine2}</h3>
              </div>
            </div>
            <p className={`work-fade-${index}`}>{location}</p>
          </div>
          <div className={styles["block__content__col-2"]}>
            <div
              className={cx(
                styles["block__content__col-2__description"],
                `work-fade-${index}`
              )}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
            <div
              className={cx(
                styles["block__content__bottom-row"],
                `work-fade-${index}`
              )}
            >
              <ul className="flex gap-2" style={{ paddingLeft: 0 }}>
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
                action={routeToProject}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
