"use client";

// Package imports
import React, { useEffect, useMemo, useState } from "react";
import Delaunator from "delaunator";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Custom imports
import styles from "./Testimonials.module.scss";
import { type PolyData } from "../LowPolyBackground/helpers/types";
import getCentroid from "../LowPolyBackground/helpers/getCentroid";

gsap.registerPlugin(ScrollTrigger);

const LowPolyBgTestimonials = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight * 1.5;
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = document.getElementById("low-poly-bg-testimonials");
      gsap.to(container, {
        y: "500px",
        ease: "linear",
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "500px bottom",
          end: () => "+=700px top",
          scrub: true,
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  const { polygons } = useMemo(() => {
    if (height > 0 && width > 0) {
      const dots = [
        [0, 0],
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
        [width * 0.75, height * 0.2],
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
        [width * 0.12, height * 0.15],
        [width * 0.18, height * 0.45],
        [width * 0.22, height * 0.65],
        [width * 0.28, height * 0.25],
        [width * 0.32, height * 0.55],
        [width * 0.38, height * 0.35],
        [width * 0.42, height * 0.75],
        [width * 0.48, height * 0.45],
        [width * 0.52, height * 0.25],
        [width * 0.58, height * 0.65],
        [width * 0.62, height * 0.35],
        [width * 0.68, height * 0.75],
        [width * 0.72, height * 0.55],
        [width * 0.78, height * 0.65],
        [width * 0.82, height * 0.35],
        [width * 0.88, height * 0.45],
        [width * 0.92, height * 0.25],
        [width * 0.15, height * 0.65],
        [width * 0.25, height * 0.25],
        [width * 0.35, height * 0.55],
        [width * 0.45, height * 0.35],
        [width * 0.55, height * 0.75],
        [width * 0.65, height * 0.45],
        [width * 0.85, height * 0.55],
        [width * 0.05, height * 0.2],
        [width * 0.95, height * 0.7],
        [width * 0.98, height * 0.4],
        [width * 0.02, height * 0.6],
        [width * 0.08, height * 0.85],
        [width * 0.92, height * 0.85],
        [width * 0.5, height * 0.15],
        [width * 0.3, height * 0.15],
        [width * 0.7, height * 0.15],
        [width * 0.88, height * 0.65],
        [width * 0.12, height * 0.75],
        [width * 0.6, height * 0.25],
      ];
      const delaunay = Delaunator.from(dots as ArrayLike<ArrayLike<number>>);
      const triangles = delaunay.triangles;
      const polys: PolyData[] = [];

      for (let i = 0; i < triangles.length; i += 3) {
        const a = dots[triangles[i]];
        const b = dots[triangles[i + 1]];
        const c = dots[triangles[i + 2]];
        const centroid = getCentroid([a as number[], b as number[], c as number[]]);

        let color = "rgba(47, 62, 70, 0)";
        
        if (centroid[0] < width * 0.1 || centroid[0] > width * 0.9) {
          color = "rgba(47, 62, 70, 0.1)";
        } else if (centroid[0] < width * 0.15 || centroid[0] > width * 0.85) {
          color = "rgba(47, 62, 70, 0.075)";
        } else if (centroid[0] < width * 0.2 || centroid[0] > width * 0.8) {
          color = "rgba(47, 62, 70, 0.05)";
        } else if (centroid[0] < width * 0.25 || centroid[0] > width * 0.75) {
          color = "rgba(47, 62, 70, 0.035)";
        } else if (centroid[0] < width * 0.3 || centroid[0] > width * 0.7) {
          color = "rgba(47, 62, 70, 0.02)";
        } else if (centroid[0] < width * 0.35 || centroid[0] > width * 0.65) {
          color = "rgba(47, 62, 70, 0.01)";
        } else if (centroid[0] < width * 0.4 || centroid[0] > width * 0.6) {
          color = "rgba(47, 62, 70, 0.005)";
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
  }, [width, height]);

  return (
    <div
      id="low-poly-bg-testimonials"
      className={styles["low-poly-bg-testimonials"]}
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
            key={`polykey-testimonials-${poly.points
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

export default LowPolyBgTestimonials;
