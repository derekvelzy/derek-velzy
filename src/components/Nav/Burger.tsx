// Package imports
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { usePathname, useRouter } from "next/navigation";

// Custom imports
import styles from "./Nav.module.scss";
import { handleFocusChange } from "~/helpers/handleFocusChange";
import FloatingLinks from "../FloatingLinks/FloatingLinks";

gsap.registerPlugin(ScrollToPlugin);

type Props = {
  animationsCompleted: boolean;
};

const Burger = ({ animationsCompleted }: Props) => {
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth >= 1024
  );

  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLLabelElement>(null);

  const closeNav = () => {
    const checkbox = containerRef.current?.querySelector(
      "input[type='checkbox']"
    );
    if (checkbox) {
      (checkbox as HTMLInputElement).checked = false;
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        closeNav();
      }
    };

    if (window?.innerWidth) {
      const isDesktopWidth = window.innerWidth >= 1024;
      setTabIndex(open || isDesktopWidth ? 0 : -1);
      setIsDesktop(isDesktopWidth);
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  useEffect(() => {
    if (isDesktop && pathname === "/" && !animationsCompleted) {
      gsap.to(".nav-stagger", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power4.out",
        stagger: 0.125,
      });
    } else {
      gsap.set(".nav-stagger", {
        y: 0,
        opacity: 1,
      });
    }
  }, [isDesktop, pathname, animationsCompleted]);

  const navButtons = [
    {
      id: "services",
      label: "Services",
      offset: 160,
    },
    {
      id: "work",
      label: "Work",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "contact",
      label: "Contact",
      onkeydown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Tab" && !e.shiftKey) {
          e.preventDefault();
          handleFocusChange("hero-main-cta");
          closeNav();
        }
      },
    },
  ];

  return (
    <div
      id="burger-container"
      ref={containerRef}
      className={styles["burger-container"]}
    >
      <label id="burger" ref={burgerRef} className={styles["burger"]}>
        <input
          type="checkbox"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          value={open ? "open" : "closed"}
          onChange={(e) => setOpen(e.target.checked)}
          onKeyDown={(e) => {
            const checkbox = e.target as HTMLInputElement;
            if (e.key === "Enter") {
              e.preventDefault();
              checkbox.checked = !checkbox.checked;
              setOpen(checkbox.checked);
            } else if (e.key === "Escape" || (e.key === "Tab" && e.shiftKey)) {
              e.preventDefault();
              checkbox.checked = false;
              setOpen(false);

              if (e.key === "Tab") {
                handleFocusChange("logo");
              }
            }
          }}
        />
      </label>
      <aside className={styles["sidebar"]}>
        <div className={styles["social-links"]}>
          <FloatingLinks mobile={true} />
        </div>
        <div className={styles["sidebar__inner"]}>
          {navButtons.map((button, index) => (
            <BurgerButton
              key={`nav-button-${button.id}`}
              closeNav={closeNav}
              id={button.id}
              label={button.label}
              offset={button.offset}
              index={index}
              tabIndex={tabIndex}
              onKeyDown={button.onkeydown}
              pathname={pathname}
            />
          ))}
          <div id="nav-divider" className={styles["divider"]} />
          <a href="articles" className="nav-stagger opacity-0 translate-y-[10px]">
            <span>Articles</span>
          </a>
        </div>
      </aside>
    </div>
  );
};

type BurgerButtonProps = {
  closeNav: () => void;
  id: string;
  label: string;
  offset?: number;
  index: number;
  tabIndex: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  pathname?: string;
};

const BurgerButton = ({
  closeNav,
  id,
  label,
  offset = 0,
  index,
  tabIndex,
  onKeyDown,
  pathname,
}: BurgerButtonProps) => {
  const router = useRouter();

  return (
    <button
      className="nav-stagger opacity-0 translate-y-[10px]"
      onClick={() => {
        if (pathname === "/") {
          gsap.to(window, {
            scrollTo: {
              y: `#${id}-section`,
              autoKill: false,
              offsetY: offset,
            },
            duration: 0.75,
            ease: "power4.out",
          });
          closeNav();
        } else {
          router.push(`/#${id}-section`);
          closeNav();
        }
      }}
      tabIndex={tabIndex}
      aria-label={`Go to ${label} section`}
      onKeyDown={onKeyDown}
    >
      <span>{label}</span>
      <span>{`0${index + 1}`}</span>
    </button>
  );
};

export default Burger;
