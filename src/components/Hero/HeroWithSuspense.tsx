"use client";

import { Suspense } from "react";
import Hero from "./Hero";

const HeroFallback = () => (
  <div className="animate-pulse">
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="space-y-4 w-full max-w-4xl px-4">
        <div className="h-12 bg-gray-200 rounded w-3/4"></div>
        <div className="h-12 bg-gray-200 rounded w-2/3"></div>
        <div className="h-12 bg-gray-200 rounded w-1/2"></div>
        <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mt-8"></div>
        <div className="h-6 bg-gray-200 rounded w-full max-w-xl"></div>
        <div className="flex gap-4 mt-8">
          <div className="h-12 bg-gray-200 rounded w-48"></div>
          <div className="h-12 bg-gray-200 rounded w-40"></div>
        </div>
      </div>
    </div>
  </div>
);

const HeroWithSuspense = () => {
  return (
    <Suspense fallback={<HeroFallback />}>
      <Hero />
    </Suspense>
  );
};

export default HeroWithSuspense;
