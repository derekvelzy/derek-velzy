"use client";

// Package imports

// Custom imports
import About from "~/components/About/About";
import Contact from "~/components/Contact/Contact";
import FloatingLinks from "~/components/FloatingLinks/FloatingLinks";
import Hero from "~/components/Hero/Hero";
import LowPolyBg from "~/components/LowPolyBackground/LowPolyBackground";
import LPBGFooter from "~/components/LowPolyBackground/LPBGFooter";
import Services from "~/components/Services2/Services";
import Work from "~/components/Work/Work";
import JaggedDivider from "~/components/JaggedDivider/JaggedDivider";

export default function Home() {
  return (
    <div className="bg-[#F8F9FA] relative">
      <Hero />
      <FloatingLinks />
      <LowPolyBg />
      <LPBGFooter />
      <Services />
      <Work />
      <About />
      <JaggedDivider />
      <Contact />
    </div>
  );
}
