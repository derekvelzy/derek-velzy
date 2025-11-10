"use client";

// Package imports
import React, { useEffect, useMemo, useState } from "react";
import Delaunator from "delaunator";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";

// Custom imports
import styles from "./Solutions.module.scss";
import { type PolyData } from "../LowPolyBackground/helpers/types";
import getCentroid from "../LowPolyBackground/helpers/getCentroid";

gsap.registerPlugin(ScrollTrigger);

const DOT_FACTORS: Array<[number, number]> = [
  [0, 0],
  [1, 0],
  [0, 0.8],
  [1, 1],
  [0.5, 0],
  [0.5, 1],
  [0, 0.5],
  [1, 0.5],
  [0.15, 0.08],
  [0.32, 0.12],
  [0.48, 0.05],
  [0.68, 0.1],
  [0.85, 0.06],
  [0.05, 0.28],
  [0.22, 0.32],
  [0.4, 0.25],
  [0.58, 0.28],
  [0.76, 0.22],
  [0.92, 0.27],
  [0.18, 0.58],
  [0.34, 0.55],
  [0.52, 0.52],
  [0.7, 0.57],
  [0.88, 0.54],
  [0.27, 0.68],
  [0.62, 0.72],
  [0.8, 0.68],
  [0.97, 0.74],
  [0.3, 0.92],
  [0.5, 0.85],
  [0.68, 0.9],
  [0.86, 0.88],
  [-0.18, 0.14],
  [1.18, 0.18],
  [-0.12, 0.48],
  [1.22, 0.82],
  //   [-0.18, 0.85],
  [1.25, 1.05],
  //   [0.4, 1.05],
  [0.25, 1],
  //   [0.45, 1.02],
  [0.35, -0.08],
  [0.35, -0.15],
  [0.6, -0.04],
  [0.8, 0.05],
  [0.9, -0.05],
  [0.85, 0.02],
  [0.82, -0.35],
  [0.95, -0.25],
  [0.5, 1.02],
  [0.7, 1.02],
  [0.9, 1.08],
  [0.99, 1.2],
  [0.83, 1.18],
  //   [-0.1, 1.2],
  //   [-0.14, 1.2],
  [-0.18, 1.18],
];

const LowPolyBgSolutions = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    const width = window.innerWidth;
    // const height = window.innerHeight * 1.5;
    let height = 637;
    if (windowWidth < 768) {
      height = 660;
    } else if (windowWidth < 1024) {
      height = 500;
    }

    setWidth(width);
    setHeight(height);
  }, [windowWidth]);

  //   useEffect(() => {
  //     const ctx = gsap.context(() => {
  //       const container = document.getElementById("low-poly-bg-testimonials");
  //       gsap.to(container, {
  //         y: "500px",
  //         ease: "linear",
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: container,
  //           start: "500px bottom",
  //           end: () => "+=700px top",
  //           scrub: true,
  //         },
  //       });
  //     });
  //     return () => {
  //       ctx.revert();
  //     };
  //   }, []);

  const { polygons } = useMemo(() => {
    if (height > 0 && width > 0) {
      const dots = DOT_FACTORS.map(([xFactor, yFactor]) => [
        width * xFactor,
        height * yFactor,
      ]);
      const delaunay = Delaunator.from(dots as ArrayLike<ArrayLike<number>>);
      const triangles = delaunay.triangles;
      const polys: PolyData[] = [];

      for (let i = 0; i < triangles.length; i += 3) {
        const a = dots[triangles[i]];
        const b = dots[triangles[i + 1]];
        const c = dots[triangles[i + 2]];
        const centroid = getCentroid([
          a as number[],
          b as number[],
          c as number[],
        ]);

        const yFactor = centroid[1] / height;

        let color = "rgba(0, 0, 0, 0)"; // Default color
        if (yFactor > 0.45 && yFactor < 0.55) {
          color = "rgba(47, 62, 70, 0.87)";
        } else if (yFactor > 0.4 && yFactor < 0.6) {
          color = "rgba(47, 62, 70, 0.86)";
        } else if (yFactor > 0.35 && yFactor < 0.65) {
          color = "rgba(47, 62, 70, 0.85)";
        } else if (yFactor > 0.3 && yFactor < 0.7) {
          color = "rgba(47, 62, 70, 0.84)";
        } else if (yFactor > 0.25 && yFactor < 0.75) {
          color = "rgba(47, 62, 70, 0.83)";
        } else if (yFactor > 0.2 && yFactor < 0.8) {
          color = "rgba(47, 62, 70, 0.82)";
        } else if (yFactor > 0.15 && yFactor < 0.85) {
          color = "rgba(47, 62, 70, 0.81)";
        } else if (yFactor > 0.1 && yFactor < 0.9) {
          color = "rgba(47, 62, 70, 0.78)";
        } else if (yFactor > 0.05 && yFactor < 0.95) {
          color = "rgba(47, 62, 70, 0.72)";
        } else if (yFactor > 0.0 && yFactor < 1.0) {
          color = windowWidth < 768 ? "rgba(47, 62, 70, 0.65)" : "rgba(47, 62, 70, 0.55)";
        } else if (yFactor > -0.05 && yFactor < 1.05) {
          color = windowWidth < 768 ? "rgba(47, 62, 70, 0.6)" : "rgba(47, 62, 70, 0.4)";
        } else if (yFactor > -0.1 && yFactor < 1.1) {
          color = "rgba(47, 62, 70, 0.25)";
        } else if (yFactor > -0.15 && yFactor < 1.11) {
          color = "rgba(47, 62, 70, 0.15)";
        } else if (yFactor > -0.2 && yFactor < 1.2) {
          color = "rgba(47, 62, 70, 0)";
        } else {
          color = "rgba(82, 121, 111, 0)";
        }
        polys.push({
          points: [a as number[], b as number[], c as number[]],
          color: color,
          stroke: "transparent",
        });
      }

      return { polygons: polys };
    }
    return { polygons: [] };
  }, [width, height, windowWidth]);

  return (
    <div
      id="low-poly-bg-solutions"
      className={styles["low-poly-bg-solutions"]}
      style={{ height, width }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "auto",
        }}
      >
        {polygons.map((poly, i) => (
          <Poly
            poly={poly}
            color={poly.color}
            key={`polykey-solutions-${poly.points
              .map((p) => p?.join(","))
              .join("-")}-${i}`}
          />
        ))}
      </svg>
    </div>
  );
};

const Poly = ({ poly, color }: { poly: PolyData; color: string }) => {
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
      fill={color}
      stroke={poly.stroke}
      data-theme={poly.theme}
      strokeWidth={0.5}
    />
  );
};

export default LowPolyBgSolutions;
