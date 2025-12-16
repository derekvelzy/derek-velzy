// Package imports
import { Metadata } from "next";

// Custom imports
import AboutHomepage from "~/components/About/AboutHomepage";
import Contact from "~/components/Contact/ContactWithSuspense";
import FloatingLinks from "~/components/FloatingLinks/FloatingLinks";
import Hero from "~/components/Hero/HeroWithSuspense";
import LowPolyBg from "~/components/LowPolyBackground/LowPolyBackground";
import LPBGFooter from "~/components/LowPolyBackground/LPBGFooter";
import Work from "~/components/Work/Work";
import JaggedDivider from "~/components/JaggedDivider/JaggedDivider";
import ThreeBlocks from "~/components/ThreeBlocks/ThreeBlocks";

export const metadata: Metadata = {
  title: "Sites by Velzy",
  description:
    "Fast, mobile-ready websites that convert visitors into customers. Tracked for insight, compliant by design, and built to perform. Serving Orange County businesses with high-performance sites, smart tracking integrations, and ongoing optimization.",
  keywords: [
    "Web Design Orange County",
    "Freelance Web Developer",
    "Website Development",
    "High-Performance Websites",
    "Analytics Integration",
    "Marketing Technology",
    "Consent Management",
    "Website Optimization",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sites by Velzy",
    description:
      "Fast, mobile-ready websites that convert. Tracked for insight, compliant by design, and built to perform.",
    url: "/",
  },
  twitter: {
    title: "Sites by Velzy",
    description: "Fast, trackable, and compliant websites for growing businesses in Orange County, CA.",
  },
};

export default function Home() {
  return (
    <div className="bg-[#F8F9FA] relative">
      <Hero />
      <FloatingLinks />
      <LowPolyBg />
      <ThreeBlocks />
      <Work />
      <AboutHomepage />
      <JaggedDivider />
      <Contact />
      <LPBGFooter />
    </div>
  );
}
