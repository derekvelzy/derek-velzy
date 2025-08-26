// Package imports
import { useEffect } from "react";

type Props = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const useCollapse = ({ collapsed, setCollapsed }: Props) => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Fires less often than handleScroll. Blocked by ticking.
    const updateScroll = () => {
      let currentScrollY = window.scrollY;
      const scrollUp = currentScrollY <= lastScrollY;

      if (currentScrollY <= 0) currentScrollY = 0;

      if ((scrollUp && collapsed) || currentScrollY < 300) {
        setCollapsed(false);
      } else if (!scrollUp && !collapsed) {
        setCollapsed(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        // Runs the function before the next repaint, ideally synced with the display refresh rate
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [collapsed, setCollapsed]);

  useEffect(() => {
    const nav = document.querySelector("nav");

    if (!nav) return;

    const handleFocus = () => {
      setCollapsed(false);
    };

    nav.addEventListener("focusin", handleFocus);

    return () => {
      nav.removeEventListener("focusin", handleFocus);
    };
  }, [collapsed, setCollapsed]);

  return null;
};

export default useCollapse;
