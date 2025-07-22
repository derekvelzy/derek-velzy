// Package imports
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { usePathname } from "next/navigation";

// Custom imports
import styles from "./Nav.module.scss";
import { handleFocusChange } from "~/helpers/handleFocusChange";
import FloatingLinks from "../FloatingLinks/FloatingLinks";

gsap.registerPlugin(ScrollToPlugin);

const Burger = () => {
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
    if (isDesktop && pathname === "/") {
      gsap.fromTo(
        ".nav-stagger",
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power4.out",
          stagger: 0.125,
        }
      );
    }
  }, [isDesktop, pathname]);

  const navButtons = [
    {
      id: "work",
      label: "Work",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "blog",
      label: "Blog",
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
              index={index}
              tabIndex={tabIndex}
              onKeyDown={button.onkeydown}
            />
          ))}
        </div>
      </aside>
    </div>
  );
};

type BurgerButtonProps = {
  closeNav: () => void;
  id: string;
  label: string;
  index: number;
  tabIndex: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const BurgerButton = ({
  closeNav,
  id,
  label,
  index,
  tabIndex,
  onKeyDown,
}: BurgerButtonProps) => (
  <button
    className="nav-stagger"
    onClick={() => {
      gsap.to(window, {
        scrollTo: {
          y: `#${id}`,
          autoKill: false,
          offsetY: id === "work" ? 0 : 140,
        },
        duration: 0.75,
        ease: "power4.out",
      });
      closeNav();
    }}
    tabIndex={tabIndex}
    aria-label={`Go to ${label} section`}
    onKeyDown={onKeyDown}
  >
    <span>{label}</span>
    <span>{`0${index + 1}`}</span>
  </button>
);

export default Burger;
