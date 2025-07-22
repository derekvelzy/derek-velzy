"use client";

// Package imports
import React, { useEffect, useMemo, useState } from "react";
import Delaunator from "delaunator";

// Custom imports
import styles from "./Work.module.scss";
import { type PolyData } from "../LowPolyBackground/helpers/types";

const LowPolyBgWork = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight * 2;
    setWidth(width);
    setHeight(height);
  }, []);

  const { polygons } = useMemo(() => {
    if (height > 0 && width > 0) {
      const dots = [
        [0, 0],
        [width * 0.5, height * 0.2],
        [width * 0.75, height * 0.4],
        [width * 0.5, height * 0.6],
        [width * 0.25, height * 0.8],
        [width, height * 0.9],
        [width * 0.75, height],
        [width * 0.5, height * 0.8],
        [width * 0.25, height * 0.6],
        [0, height * 0.5],
        [width * 0.1, height * 0.3],
        [width * 0.2, height * 0.1],
        [width * 0.3, height * 0.4],
        [width * 0.4, height * 0.7],
        [width * 0.6, height * 0.9],
        [width * 0.8, height * 0.5],
        [width * 0.9, height * 0.3],
        [width * 0.95, height * 0.15],
        [width * 0.85, height * 0.2],
        [width * 0.65, height * 0.4],
        [width * 0.55, height * 0.6],
        [width * 0.45, height * 0.8],
        [width * 0.35, height * 0.9],
        [width * 0.15, height],
        [width * 0.05, height * 0.7],
        [width * 0.1, height * 0.5],
        [width * -0.2, height * 0.3],
        [width * -0.1, height * -0.1],
        [width * 1.2, height * -0.2],
        [width * 1.1, height * 0.4],
        [width * 1.05, height * 0.6],
        [width * -0.1, height * 0.8],
        [width * -0.2, height * 1.5],
        [width * 0.1, height * 1.2],
        [width * 0.3, height * 1.1],
        [width * 0.5, height * 1.3],
        [width * 0.7, height * 1.4],
        [width * 0.9, height * 1.6],
        [width * 1.1, height * 1.8],
        [width * 1.3, height * 1.9],
      ];
      const delaunay = Delaunator.from(dots as ArrayLike<ArrayLike<number>>);
      const triangles = delaunay.triangles;
      const polys: PolyData[] = [];

      for (let i = 0; i < triangles.length; i += 3) {
        const a = dots[triangles[i]];
        const b = dots[triangles[i + 1]];
        const c = dots[triangles[i + 2]];

        polys.push({
          points: [a as number[], b as number[], c as number[]],
          color: "transparent",
          stroke: "rgba(255, 255, 255, 0)",
        });
      }

      return { polygons: polys };
    }
    return { polygons: [] };
  }, [width, height]);

  return (
    <div
      id="low-poly-bg-work"
      className={styles["low-poly-bg-work"]}
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
            index={i}
            key={`polykey-work-${poly.points
              .map((p) => p?.join(","))
              .join("-")}-${i}`}
          />
        ))}
      </svg>
    </div>
  );
};

const Poly = ({ poly, index }: { poly: PolyData, index: number }) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) {
      setTimeout(() => {
        setHover(false);
      }, 500);
    }
  }, [hover]);

  const randomShades = [
    "rgba(255, 255, 255, 0.02)",
    "rgba(255, 255, 255, 0.01)",
    "rgba(0, 0, 0, 0.02)",
    "rgba(0, 0, 0, 0.01)",
    "rgba(0, 0, 0, 0)",
    "rgba(255, 255, 255, 0.015)",
    "rgba(0, 0, 0, 0.015)",
    "rgba(0, 0, 0, 0)",
  ];

  return (
    <polygon
      points={poly.points.map((p) => p?.join(",")).join(" ")}
      fill={randomShades[index % randomShades.length]}
      stroke={poly.stroke}
      data-theme={poly.theme}
      strokeWidth={0.5}
      //   {cx(
      //     // "bg-section-work",
      //     poly.hoverEffect ? styles.polygonAnimation : null,
      //     {
      //       [styles.hover]: hover,
      //     }
      //   )}
    />
  );
};

export default LowPolyBgWork;
