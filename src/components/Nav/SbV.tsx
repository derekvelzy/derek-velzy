// Pakcage imports
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { usePathname, useRouter } from "next/navigation";
import cx from "classnames";

// Custom imports
import { useIsDesktop } from "~/helpers/useIsDesktop";
import styles from "./Nav.module.scss";

type Props = {
  animationsCompleted: boolean;
  setAnimationsCompleted: (completed: boolean) => void;
};

const SvB = ({ animationsCompleted, setAnimationsCompleted }: Props) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const router = useRouter();
  const isDesktop = useIsDesktop();
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window?.innerWidth >= 1024;
      const homepage = pathname === "/";

      if (!animationsCompleted) {
        gsap.to(".opening-fade", {
          x: "0",
          opacity: 1,
          duration: homepage ? 1.5 : 0,
          stagger: homepage ? 0.125 : 0,
          ease: "power3.out",
          delay: homepage ? 0.5 : 0,
          onComplete: () => {
            setAnimationsCompleted(true);
          },
        });
        gsap.to(".opening-opacity", {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 1.15,
        });
      } else {
        gsap.set(".opening-fade", {
          x: "0",
          opacity: 1,
        });
        gsap.set(".opening-opacity", {
          opacity: 1,
          scale: 1,
        });
      }

      if (homepage) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: () => "+=200px top",
            scrub: true
          },
        });

        tl.fromTo(
          ".row1-fade-up",
          { y: 0, opacity: 1 },
          {
            y: isDesktop ? -36 : -20,
            opacity: 0,
            ease: "power4.out",
          }
        );
        tl.fromTo(
          ".row2-fade-up",
          { y: "0" },
          {
            y: isDesktop ? -52 : -32,
            ease: "power4.out",
          },
          "<"
        );
        tl.fromTo(
          ".oval",
          { opacity: 1, y: 0 },
          { opacity: 0, y: isDesktop ? -30 : -20, ease: "power3.out" },
          "<"
        );
      } else {
        gsap.set(".row1-fade-up", {
          y: isDesktop ? -36 : -20,
          opacity: 0,
        });
        gsap.set(".row2-fade-up", {
          y: isDesktop ? -52 : -32,
        });
        gsap.set(".oval", {
          opacity: 0,
          y: isDesktop ? -30 : -20,
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, [pathname, animationsCompleted, isDesktop, setAnimationsCompleted]);

  const portfolio = pathname.includes("portfolio");

  return (
    <button
      id="logo"
      className={styles["sbv-logo"]}
      onClick={() => {
        if (portfolio) {
          router.push("/portfolio");
        } else if (pathname === "/") {
          gsap.to(window, {
            scrollTo: { y: "#top", autoKill: false },
            duration: 0.75,
            ease: "power4.out",
          });
        } else {
          router.push("/");
        }
      }}
      aria-label="Go to top of page"
    >
      <div className={styles["sbv-logo__inner"]}>
        <div className={styles["sbv-logo__text"]}>
          <div
            className={cx(
              styles["sbv-logo__text__row1"],
              "opening-fade opacity-0 translate-x-[-20px]"
            )}
          >
            <span className="row1-fade-up translate-y-[-20px] lg:translate-y-[-36px] opacity-0">
              Sites by
            </span>
          </div>
          <div
            className={cx(
              styles["sbv-logo__text__row2"],
              "row2-fade-up translate-y-[-32px] lg:translate-y-[-52px]"
            )}
          >
            <span className="opening-fade opacity-0 translate-x-[-20px]">
              Velzy
            </span>
          </div>
        </div>
        <div
          className={cx(
            styles["sbv-logo__inner__oval"],
            "opening-opacity opacity-0 scale-95"
          )}
        >
          <svg
            className="oval opacity-0 translate-y-[-30px] hidden lg:block"
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="74"
            viewBox="0 0 180 74"
            fill="none"
          >
            <path
              d="M15.3994 20.0273C12.733 21.8688 10.4296 23.8036 8.52148 25.8086C4.21337 30.3355 2 35.1279 2 40C2 44.8721 4.21337 49.6645 8.52148 54.1914C12.8394 58.7285 19.1823 62.9057 27.1729 66.457C31.2161 68.254 35.6592 69.8791 40.4395 71.3066C40.6031 72.0603 40.7695 72.8055 40.9395 73.5371C16.2939 66.4013 0 54.0476 0 40C0 31.9295 5.37812 24.4176 14.6279 18.1328L15.3994 20.0273ZM165.839 18.4521C174.803 24.6713 180 32.066 180 40C180 53.8321 164.203 66.0238 140.189 73.207L140.951 70.8809C145.204 69.5579 149.179 68.0785 152.827 66.457C160.818 62.9057 167.161 58.7285 171.479 54.1914C175.787 49.6645 178 44.8721 178 40C178 35.1279 175.787 30.3355 171.479 25.8086C169.631 23.8673 167.412 21.9928 164.853 20.2041L165.839 18.4521ZM90 0C94.6721 0 99.2611 0.15784 103.741 0.462891L103.392 2.44531C99.0267 2.15296 94.5549 2 90 2C83.7058 2 77.5701 2.29078 71.6562 2.84082C71.3854 2.1742 71.1112 1.5113 70.8555 0.90918C77.0251 0.315152 83.4302 0 90 0Z"
              fill="#2F3E46"
            />
          </svg>

          <svg
            className="oval opacity-0 translate-y-[-20px] lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="48"
            viewBox="0 0 112 48"
            fill="none"
          >
            <path
              d="M98.6338 10.5586C106.968 15.3718 112 21.6122 112 28.4326L111.995 28.7891C111.804 36.2205 105.639 42.9413 95.7568 47.8457L96.3408 45.6074C105.347 40.8088 110.277 34.6872 110.277 28.4326C110.277 22.5237 105.877 16.7329 97.7969 12.0645L98.6338 10.5586ZM13.0225 12.7695C5.69492 17.3094 1.72266 22.8181 1.72266 28.4326C1.72271 34.3841 6.18601 40.2167 14.3779 44.9023C14.5298 45.6546 14.6868 46.3985 14.8467 47.127C5.78357 42.2941 0.187029 35.8639 0.00488281 28.7891L0 28.4326C0 21.8125 4.73989 15.7379 12.6396 10.9854L13.0225 12.7695ZM56 0.863281C58.2584 0.863281 60.4854 0.930651 62.6738 1.05859L61.9004 2.74023C59.9632 2.6388 57.9947 2.58594 56 2.58594C53.3735 2.58594 50.7924 2.67821 48.2686 2.85254C48.1263 2.38955 47.9337 1.77103 47.7285 1.16211C50.4277 0.965376 53.1897 0.863281 56 0.863281Z"
              fill="#2F3E46"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default SvB;
