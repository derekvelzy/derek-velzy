// Package imports
import { Metadata } from "next";

// Custom imports
import AboutHomepage from "~/components/About/AboutHomepage";
import Contact from "~/components/Contact/ContactWithSuspense";
import FloatingLinks from "~/components/FloatingLinks/FloatingLinks";
import Hero from "~/components/Hero/Hero";
import LowPolyBg from "~/components/LowPolyBackground/LowPolyBackground";
import LPBGFooter from "~/components/LowPolyBackground/LPBGFooter";
import Services from "~/components/Services/ServicesHomepage";
import Work from "~/components/Work/Work";
import JaggedDivider from "~/components/JaggedDivider/JaggedDivider";

export const metadata: Metadata = {
  title: "Sites by Velzy | Web Design & Development in Orange County, CA",
  description:
    "Custom websites, SEO, e-commerce, and integrations by Derek Velzy. Serving Orange County businesses with fast, accessible builds.",
  keywords: [
    "Web Design Orange County",
    "Freelance Web Developer",
    "SEO Services",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sites by Velzy | Web Design & Development in Orange County, CA",
    description:
      "Custom websites, SEO, e-commerce, and integrations by Derek Velzy.",
    url: "/",
  },
  twitter: {
    title: "Sites by Velzy | Web Design & Development in Orange County, CA",
    description: "Freelance web designer & developer in Orange County, CA.",
  },
};

export default function Home() {
  return (
    <div className="bg-[#F8F9FA] relative">
      <Hero />
      <FloatingLinks />
      <LowPolyBg />
      <Services />
      <Work />
      <AboutHomepage />
      <JaggedDivider />
      <Contact />
      <LPBGFooter />
    </div>
  );
}
