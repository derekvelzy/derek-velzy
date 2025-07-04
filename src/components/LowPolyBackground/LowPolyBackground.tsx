"use client";

// Package imports
import React, { useEffect, useMemo, useState } from "react";
import Delaunator from "delaunator";
import cx from "classnames";
import s from "./LowPolyBackground.module.scss";
import gsap from "gsap";

type Boundary = {
  inside: number[][] | null;
  outside: number[][];
};

type PolyData = {
  points: number[][];
  color: string;
  stroke: string;
  hoverEffect: boolean;
};

// Need a more sophisticated point generation algorithm
// less frequent points at the top
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateRandomPoint = (boundary: Boundary) => {
  let point = null;
  let limit = 0;
  while (!point && limit < 100) {
    limit++;
    const x = randomInRange(boundary.outside[0][0], boundary.outside[1][0]);
    const y = randomInRange(boundary.outside[0][1], boundary.outside[1][1]);

    if (boundary.inside) {
      const [x1, y1] = boundary.inside[0];
      const [x2, y2] = boundary.inside[1];
      if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
        continue;
      }
    }
    point = [x, y];
  }
  return point;
};

const generatePoints = (width: number, height: number): (number[] | null)[] => {
  const windowHeight = height / 3;

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
      [width * 1.25, windowHeight * 3],
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
  for (let i = 0; i < 10; i++) {
    const xy = generateRandomPoint(purpleBoxBoundaries);
    allPoints.push(xy);
  }

  allPoints.push([width * -0.125, windowHeight * 3]);
  allPoints.push([width * 1.125, windowHeight * 3]);

  return allPoints;
};

const getCentroid = ([a, b, c]: [number[], number[], number[]]) => {
  const cx = (a[0] + b[0] + c[0]) / 3;
  const cy = (a[1] + b[1] + c[1]) / 3;
  return [cx, cy];
};

const LowPolySvgBackground = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [dots, setDots] = useState<(number[] | null)[]>([[0, 0]]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight * 3;
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

        // The center of the triangle
        const centroid = getCentroid([
          a as number[],
          b as number[],
          c as number[],
        ]);

        const yFactor = centroid[1] / (height / 3);

        let color = "rgba(0, 0, 0, 0)"; // Default color
        let stroke = "rgba(0, 0, 0, 0)";
        let hoverEffect = false;
        if (yFactor >= 2.85) {
          color = "rgba(0, 0, 0, 0)"; // Default color
        } else if (yFactor >= 2.15) {
          color = "rgba(47, 62, 70, 1)";
        } else if (yFactor >= 2.05) {
          color = "rgba(47, 62, 70, 0.97)";
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
        onClick={() => {
          console.log("bip svg clicked");
        }}
        role="button"
      >
        {polygons.map((poly, i) => (
          <Poly poly={poly} key={`polykey-${i}`} />
        ))}
      </svg>
    </div>
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
      strokeWidth={0.5}
      className={cx(poly.hoverEffect ? s.polygonAnimation : null, {
        [s.hover]: hover,
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
};

export default LowPolySvgBackground;
