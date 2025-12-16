"use client";

// Package imports
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import cx from "classnames";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

// Custom imports
import styles from "./Hero.module.scss"; // Assuming you have a styles file for Hero
import Wheel from "./Wheel";
import Arrow from "~/res/svgs/arrow";
import Button from "../Button/Button";
import SecondaryLink from "../Link/SecondaryLink";
import AuditForm from "../AuditForm/AuditForm";

gsap.registerPlugin(ScrollToPlugin);

const Hero = ({}) => {
  const [clickDirection, setClickDirection] = useState<
    "prev" | "next" | "none" | null
  >(null);
  const [loaded, setLoaded] = useState(false);
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    vertical: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
    defaultAnimation: {
      duration: 700,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    },
    dragEnded: () => {
      stopAutoScroll();
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const isSyncingFromQueryRef = useRef(false);

  // Sync state from query params (query params -> state)
  useEffect(() => {
    if (!searchParams) return;

    const auditForm = searchParams.get("auditForm");
    const shouldShow = auditForm === "true";

    // Only update state if it's different from current state
    if (showAuditForm !== shouldShow) {
      isSyncingFromQueryRef.current = true;
      setShowAuditForm(shouldShow);
    }
  }, [searchParams]); // Only depend on searchParams, not showAuditForm

  // Sync query params from state (state -> query params)
  useEffect(() => {
    // Skip if we're syncing from query params to avoid circular updates
    if (isSyncingFromQueryRef.current) {
      isSyncingFromQueryRef.current = false;
      return;
    }

    if (!searchParams) return;

    const currentAuditForm = searchParams.get("auditForm");
    const shouldShow = showAuditForm;

    // Only update query params if they're out of sync
    if (shouldShow && currentAuditForm !== "true") {
      router.push("/?auditForm=true", { scroll: false });
    } else if (!shouldShow && currentAuditForm === "true") {
      router.push("/", { scroll: false });
    }
  }, [showAuditForm, router, searchParams]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;
    intervalRef.current = setInterval(() => {
      slider.next();
    }, 1800);

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [instanceRef, loaded]);

  const arrowButtonRef = useRef<HTMLButtonElement>(null);
  const prevTargetRef = useRef<HTMLDivElement>(null);
  const nextTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const arrowButton = arrowButtonRef.current;
    const prev = prevTargetRef.current;
    const next = nextTargetRef.current;

    if (!arrowButton || !prev || !next) return;

    let currentZone: "none" | "prev" | "next" = "none";

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(arrowButton, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });

      const prevRect = prev.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();

      const leftBoundary = mouseX - prevRect.left + 20;
      const rightBoundary = prevRect.right - mouseX + 20;
      const prevTopBoundary = mouseY - prevRect.top + 50;
      const prevBottom = prevRect.bottom - mouseY;

      const nextLeftBoundary = mouseX - nextRect.left + 20;
      const nextRightBoundary = nextRect.right - mouseX + 20;
      const nextTopBoundary = mouseY - nextRect.top;
      const nextBottom = nextRect.bottom - mouseY + 50;

      const prevInside =
        leftBoundary > 0 &&
        rightBoundary > 0 &&
        prevTopBoundary > 0 &&
        prevBottom > 0;

      const nextInside =
        nextLeftBoundary > 0 &&
        nextRightBoundary > 0 &&
        nextTopBoundary > 0 &&
        nextBottom > 0;

      const hoveringZone = prevInside ? "prev" : nextInside ? "next" : "none";

      if (hoveringZone !== currentZone) {
        currentZone = hoveringZone;

        // if (hoveringZone === "none") {
        setClickDirection(hoveringZone);
        // } else {
        if (hoveringZone === "prev") {
          // setClickDirection(hoveringZone);
          gsap.to(arrowButton, {
            rotate: -45,
            duration: 0.2,
            ease: "power2.out",
          });
        } else if (hoveringZone === "next") {
          // setClickDirection(hoveringZone);

          gsap.to(arrowButton, {
            rotate: 135,
            duration: 0.2,
            ease: "power2.out",
          });
        }
        // }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [loaded]);

  useEffect(() => {
    gsap.fromTo(
      ".stagger",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.125,
      }
    );
  }, []);

  useEffect(() => {
    if (showAuditForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAuditForm]);

  const staggerClass = "stagger opacity-0 translate-y-[50px]";

  return (
    <div id="top" className={styles["hero__container"]}>
      <AuditForm
        show={showAuditForm}
        onClose={() => {
          setShowAuditForm(false);
        }}
      />
      <div className={cx("slice", styles["hero"])}>
        <div className={styles["hero__content"]}>
          <div className={styles["hero__content__title"]}>
            <div className="overflow-hidden">
              <h1 className={staggerClass}>
                You have a{" "}
                {!loaded ? (
                  <span className="font-[700] font-alt italic  pl-[2px] sm:pl-1 h-[80px]">
                    Business
                  </span>
                ) : (
                  <Wheel
                    prevTargetRef={prevTargetRef}
                    nextTargetRef={nextTargetRef}
                    sliderRef={sliderRef}
                  />
                )}
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className={staggerClass}>to run. Let me handle</h1>
            </div>
            <div className="overflow-hidden pb-[4px]">
              <h1 className={staggerClass}>the website.</h1>
            </div>
          </div>
          <p className={staggerClass}>
            I create fast, mobile-ready sites that convert visitors into
            customers. Tracked for insight, compliant by design, and built to
            perform.
          </p>
          <div className={cx(staggerClass, styles["hero__content__ctas"])}>
            <Button
              action={() => {
                setShowAuditForm(true);
              }}
            >
              Get your free website audit
            </Button>
            <SecondaryLink
              href="https://calendly.com/dmvelzy/30min"
              external
              label="Book a quick call"
            />
          </div>
        </div>
      </div>
      <button
        tabIndex={-1}
        aria-hidden
        ref={arrowButtonRef}
        className={cx(
          styles["hero__arrow"],
          clickDirection === null
            ? styles["hero__arrow_initial"]
            : clickDirection === "none"
            ? styles["hero__arrow_hidden"]
            : styles["hero__arrow_visible"]
        )}
        onClick={() => {
          stopAutoScroll();
          if (clickDirection === "next") {
            instanceRef.current?.next();
          } else if (clickDirection === "prev") {
            instanceRef.current?.prev();
          }
        }}
      >
        <div ref={arrowRef}>
          <Arrow />
        </div>
      </button>
    </div>
  );
};

export default Hero;
