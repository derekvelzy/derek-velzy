"use client";

// Package imports
import React, { useEffect, useMemo, useState } from "react";
import Delaunator from "delaunator";
import cx from "classnames";
import gsap from "gsap";

// Custom imports
import styles from "./LowPolyBackground.module.scss";
import getCentroid from "./helpers/getCentroid";
import generateRandomPoint from "./helpers/generateRandomPoint";
import { type Boundary, type PolyData } from "./helpers/types";
import RefreshMountain from "~/res/svgs/refreshMountain";
import { useIsDesktop } from "~/helpers/useIsDesktop";

const getWidth = (bool: boolean) => (bool ? 6.5 : 5.5);

const generatePoints = (
  width: number,
  height: number,
  isDesktop: boolean
): (number[] | null)[] => {
  const windowHeight = height / getWidth(isDesktop);

  const blueBoxBoundaries: Boundary = {
    inside: null,
    outside: [
      [width * 0.625, windowHeight * 0.25],
      [width * 0.875, windowHeight * 0.75],
    ],
  };

  const redBoxBoundaries: Boundary = {
    inside: blueBoxBoundaries.outside,
    outside: [
      [width * 0.5, 0],
      [width, windowHeight],
    ],
  };

  const yellowBoxBoundaries: Boundary = {
    inside: [
      [0, 0],
      [width, windowHeight],
    ],
    outside: [
      [width * -0.25, windowHeight * -0.25],
      [width * 1.25, windowHeight],
    ],
  };
  const greenBoxBoundaries: Boundary = {
    inside: null,
    outside: [
      [width * -0.25, windowHeight],
      [width * 1.25, windowHeight * 2],
    ],
  };
  const purpleBoxBoundaries: Boundary = {
    inside: null,
    outside: [
      [width * -0.25, windowHeight * 2],
      [width * 1.25, windowHeight * 4],
    ],
  };

  const allPoints = [];
  for (let i = 0; i < 10; i++) {
    const xy = generateRandomPoint(blueBoxBoundaries);
    allPoints.push(xy);
  }
  for (let i = 0; i < 5; i++) {
    const xy = generateRandomPoint(redBoxBoundaries);
    allPoints.push(xy);
  }
  for (let i = 0; i < 10; i++) {
    const xy = generateRandomPoint(yellowBoxBoundaries);
    allPoints.push(xy);
  }
  for (let i = 0; i < 20; i++) {
    const xy = generateRandomPoint(greenBoxBoundaries);
    allPoints.push(xy);
  }
  for (let i = 0; i < 30; i++) {
    const xy = generateRandomPoint(purpleBoxBoundaries);
    allPoints.push(xy);
  }

  allPoints.push([width * -0.125, windowHeight * getWidth(isDesktop)]);
  allPoints.push([width * 1.125, windowHeight * getWidth(isDesktop)]);
  allPoints.push([width * 0.28, windowHeight * (isDesktop ? 6.25 : 5.3)]);
  allPoints.push([width * 0.85, windowHeight * (isDesktop ? 6.35 : 5.35)]);

  return allPoints;
};

const LowPolySvgBackground = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dots, setDots] = useState<(number[] | null)[]>([[0, 0]]);
  const [hovered, setHovered] = useState(false);

  const isDesktop = useIsDesktop();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight * getWidth(isDesktop);
    const points = generatePoints(width, height, isDesktop);
    setDots(points);
    setWidth(width);
    setHeight(height);
  }, [isDesktop]);

  const { polygons } = useMemo(() => {
    if (dots.length > 0) {
      const delaunay = Delaunator.from(dots as ArrayLike<ArrayLike<number>>);
      const triangles = delaunay.triangles;
      const polys: PolyData[] = [];

      for (let i = 0; i < triangles.length; i += 3) {
        const a = dots[triangles[i]];
        const b = dots[triangles[i + 1]];
        const c = dots[triangles[i + 2]];

        // The center of the triangle
        const centroid = getCentroid([
          a as number[],
          b as number[],
          c as number[],
        ]);

        const yFactor = centroid[1] / (height / getWidth(isDesktop));

        let color = "rgba(0, 0, 0, 0)"; // Default color
        let stroke = "rgba(0, 0, 0, 0)";
        let hoverEffect = false;
        let theme: "dark" | "light" = "light";
        if (yFactor >= (isDesktop ? 6.35 : 5.35)) {
          color = "rgba(0, 0, 0, 0)"; // Default color
          theme = "dark";
        } else if (yFactor >= 2.05) {
          color = "rgba(47, 62, 70, 1)";
          theme = "dark";
        } else if (yFactor >= 2.0) {
          color = "rgba(47, 62, 70, 0.97)";
          theme = "dark";
        } else if (yFactor >= 1.95) {
          color = "rgba(47, 62, 70, 0.93)";
        } else if (yFactor >= 1.85) {
          color = "rgba(47, 62, 70, 0.9)";
        } else if (yFactor >= 1.75) {
          color = "rgba(47, 62, 70, 0.87)";
        } else if (yFactor >= 1.65) {
          color = "rgba(47, 62, 70, 0.83)";
        } else if (yFactor >= 1.55) {
          color = "rgba(47, 62, 70, 0.8)";
        } else if (yFactor >= 1.45) {
          color = "rgba(53, 79, 82, 0.7)";
        } else if (yFactor >= 1.35) {
          color = "rgba(53, 79, 82, 0.6)";
        } else if (yFactor >= 1.25) {
          color = "rgba(53, 79, 82, 0.55)";
        } else if (yFactor >= 1.15) {
          color = "rgba(53, 79, 82, 0.5)";
        } else if (yFactor >= 1.1) {
          color = "rgba(82, 121, 111, 0.5)";
        } else if (yFactor >= 1.05) {
          color = "rgba(82, 121, 111, 0.4)";
        } else if (yFactor >= 1.02) {
          color = "rgba(82, 121, 111, 0.3)";
        } else if (yFactor >= 0.95) {
          color = "rgba(82, 121, 111, 0.2)";
        } else {
          color = "rgba(82, 121, 111, 0)";
          stroke = "rgba(47, 62, 70, 0.1)";
          hoverEffect = true;
        }

        polys.push({
          points: [a as number[], b as number[], c as number[]],
          color,
          stroke,
          hoverEffect,
          theme,
        });
      }

      return { polygons: polys };
    }
    return { polygons: [] };
  }, [dots, height, isDesktop]);

  useEffect(() => {
    const lowPolyBg = document.getElementById("low-poly-bg");
    gsap.fromTo(
      lowPolyBg,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        stagger: 0.125,
      }
    );
  }, [dots]);

  useEffect(() => {
    const refreshMountain = document.getElementById("refresh-mountain");
    gsap.fromTo(
      refreshMountain,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.85,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      <div
        id="low-poly-bg"
        className="absolute top-0 left-0 z-[1]"
        style={{ height, width }}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 100,
            pointerEvents: "auto",
          }}
        >
          {polygons.map((poly, i) => (
            <Poly
              poly={poly}
              key={`polykey-${poly.points
                .map((p) => p?.join(","))
                .join("-")}-${i}`}
            />
          ))}
        </svg>
      </div>
      <div className={styles["refresh-mountain"]}>
        <div
          className={cx(styles["refresh-mountain__tooltip"], {
            [styles["refresh-mountain__tooltip_hover"]]: hovered,
          })}
          role="tooltip"
          id="tooltip-refresh-mountain"
        >
          New mountain range?
        </div>
        <button
          aria-labelledby="tooltip-refresh-mountain"
          id="refresh-mountain"
          onClick={() => {
            const points = generatePoints(width, height, isDesktop);
            setDots(points);
          }}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <RefreshMountain hovered={hovered} />
        </button>
      </div>
    </>
  );
};

const Poly = ({ poly }: { poly: PolyData }) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) {
      setTimeout(() => {
        setHover(false);
      }, 500);
    }
  }, [hover]);

  return (
    <polygon
      points={poly.points.map((p) => p?.join(",")).join(" ")}
      fill={poly.color}
      stroke={poly.stroke}
      data-theme={poly.theme}
      strokeWidth={0.5}
      className={cx(
        "bg-section",
        poly.hoverEffect ? styles.polygonAnimation : null,
        {
          [styles.hover]: hover,
        }
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
};

export default LowPolySvgBackground;
