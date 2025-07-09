"use client";

// Package imports
import React, { useEffect, useMemo, useState } from "react";
import Delaunator from "delaunator";
import gsap from "gsap";

// custom imports
import getCentroid from "./helpers/getCentroid";
import generateRandomPoint from "./helpers/generateRandomPoint";
import { type Boundary, type PolyData } from "./helpers/types";

const generatePoints = (width: number, height: number): (number[] | null)[] => {
  const blueBox1Boundaries: Boundary = {
    inside: null,
    outside: [
      [width * -0.25, 0],
      [0, height],
    ],
  };

  const blueBox2Boundaries: Boundary = {
    inside: null,
    outside: [
      [width, 0],
      [width * 1.25, height],
    ],
  };

  const redBoxBoundaries: Boundary = {
    inside: null,
    outside: [
      [width * -0.25, height],
      [width * 1.25, height * 1.25],
    ],
  };

  const orangeBoxBoundaries: Boundary = {
    inside: null,
    outside: [
      [0, height * 0.5],
      [width, height],
    ],
  };

  const allPoints = [];
  for (let i = 0; i < 5; i++) {
    const xy = generateRandomPoint(blueBox1Boundaries);
    allPoints.push(xy);
  }
  for (let i = 0; i < 5; i++) {
    const xy = generateRandomPoint(blueBox2Boundaries);
    allPoints.push(xy);
  }
  for (let i = 0; i < 20; i++) {
    const xy = generateRandomPoint(redBoxBoundaries);
    allPoints.push(xy);
  }
  for (let i = 0; i < 20; i++) {
    const xy = generateRandomPoint(orangeBoxBoundaries);
    allPoints.push(xy);
  }

  return allPoints;
};

const LPGFooter = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dots, setDots] = useState<(number[] | null)[]>([[0, 0]]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight * 0.5;
    const points = generatePoints(width, height);
    setDots(points);
    setWidth(width);
    setHeight(height);
  }, []);

  const { polygons } = useMemo(() => {
    if (dots.length > 0) {
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

        let color = "rgba(0, 0, 0, 0)";
        if (yFactor >= 1.15) {
          color = "rgba(0, 0, 0, 0)";
        } else if (yFactor >= 1.1) {
          color = "rgba(47, 62, 70, 1)";
        } else if (yFactor >= 1.0) {
          color = "rgba(47, 62, 70, 0.9)";
        } else if (yFactor >= 0.9) {
          color = "rgba(47, 62, 70, 0.85)";
        } else if (yFactor >= 0.8) {
          color = "rgba(47, 62, 70, 0.8)";
        } else if (yFactor >= 0.7) {
          color = "rgba(53, 79, 82, 0.75)";
        } else if (yFactor >= 0.55) {
          color = "rgba(53, 79, 82, 0.65)";
        } else if (yFactor >= 0.5) {
          color = "rgba(82, 121, 111, 0.6)";
        }
        polys.push({
          points: [a as number[], b as number[], c as number[]],
          color,
        });
      }

      return { polygons: polys };
    }
    return { polygons: [] };
  }, [dots, height]);

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
  }, []);

  return (
    <div
      id="low-poly-bg-footer"
      className="absolute bottom-0 left-0 z-[0]"
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
        role="button"
      >
        {polygons.map((poly, i) => (
          <polygon
            key={`polykeyfooter-${i}`}
            points={poly.points.map((p) => p?.join(",")).join(" ")}
            fill={poly.color}
            data-theme={poly.theme}
          />
        ))}
      </svg>
    </div>
  );
};

export default LPGFooter;
