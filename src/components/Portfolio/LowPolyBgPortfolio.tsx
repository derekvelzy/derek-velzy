"use client";

// Package imports
import React, { useEffect, useMemo, useState } from "react";
import Delaunator from "delaunator";
import cx from "classnames";
import gsap from "gsap";
import { useWindowSize } from "react-use";

// Custom imports
import generateRandomPoint from "~/components/LowPolyBackground/helpers/generateRandomPoint";
import {
  type Boundary,
  type PolyData,
} from "~/components/LowPolyBackground/helpers/types";
import { useIsDesktop } from "~/helpers/useIsDesktop";

// const getWidth = (bool: boolean) => (bool ? 6.5 : 5.4);

const generatePoints = (
  width: number,
  height: number
  // isDesktop: boolean
): (number[] | null)[] => {
  const windowHeight = height;

  const greenBoxBoundaries: Boundary = {
    inside: null,
    outside: [
      [width * -0.25, -0.25],
      [width * 1.25, windowHeight * 2],
    ],
  };

  const allPoints = [];
  for (let i = 0; i < 160; i++) {
    const xy = generateRandomPoint(greenBoxBoundaries);
    allPoints.push(xy);
  }

  return allPoints;
};

const LowPolyBgPortfolio = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dots, setDots] = useState<(number[] | null)[]>([[0, 0]]);

  const isDesktop = useIsDesktop();
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  useEffect(
    () => {
      const calculateDimensions = () => {
        const width = windowWidth || window.innerWidth;
        const height = isDesktop ? 4650 : 6100;
        const points = generatePoints(width, height);
        setDots(points);
        setWidth(width);
        setHeight(height);
      };

      // Only calculate if we have valid dimensions
      if (windowWidth && windowHeight) {
        calculateDimensions();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    isDesktop
      ? [isDesktop, windowHeight, windowWidth]
      : [isDesktop, windowWidth]
  );

  const { polygons } = useMemo(() => {
    if (dots.length > 0) {
      const delaunay = Delaunator.from(dots as ArrayLike<ArrayLike<number>>);
      const triangles = delaunay.triangles;
      const polys: PolyData[] = [];

      for (let i = 0; i < triangles.length; i += 3) {
        const a = dots[triangles[i]];
        const b = dots[triangles[i + 1]];
        const c = dots[triangles[i + 2]];

        const color = "rgba(0, 0, 0, 0)";

        polys.push({
          points: [a as number[], b as number[], c as number[]],
          color,
          stroke: "rgba(0, 0, 0, 0.08)",
          hoverEffect: false,
          theme: "light",
        });
      }

      return { polygons: polys };
    }
    return { polygons: [] };
  }, [dots]);

  useEffect(() => {
    const lowPolyBg = document.getElementById("low-poly-bg-portfolio");
    gsap.fromTo(
      lowPolyBg,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
  }, [dots]);

  return (
    <div
      id="low-poly-bg-portfolio"
      className="absolute top-[-20rem] left-0 z-[0]"
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
  );
};

const Poly = ({ poly }: { poly: PolyData }) => {
  return (
    <polygon
      points={poly.points.map((p) => p?.join(",")).join(" ")}
      fill={poly.color}
      stroke={poly.stroke}
      data-theme={poly.theme}
      strokeWidth={0.5}
      className={cx("bg-section")}
    />
  );
};

export default LowPolyBgPortfolio;
