// Package imports
import type { Metadata } from "next";
import Script from "next/script";

// Custom imports
import About from "~/components/About/About";
import Page from "~/components/Page/Page";
import BookCallCTA from "~/components/BookCallCTA/BookCallCTA";
import Testimonials from "~/components/Testimonials/Testimonials";

export const metadata: Metadata = {
  title: "About Derek Velzy — Web Developer in Orange County, CA",
  description:
    "Learn about Derek Velzy, a web developer and digital marketing tech specialist based in Orange County, California. I build fast, accessible websites and integrate analytics/tracking, marketing tools, and GDPR/CCPA consent management to drive measurable growth.",
  keywords: [
    "About Derek Velzy",
    "Web Developer Orange County",
    "Freelance Web Developer",
    "Digital Marketing Tech Specialist",
    "Analytics Integration",
    "Marketing Technology",
    "Consent Management",
    "Accessibility Specialist",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Derek Velzy — Web Developer in Orange County, CA",
    description:
      "Web developer in Orange County building fast, accessible sites with analytics integrations, marketing tools, and consent management.",
    url: "/about",
    type: "profile",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Sites by Velzy — About Derek Velzy",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Derek Velzy",
    url: "https://sitesbyvelzy.com/about",
    jobTitle: "Web Developer & Digital Marketing Tech Specialist",
    worksFor: { "@type": "Organization", name: "Sites by Velzy" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orange County",
      addressRegion: "CA",
      addressCountry: "US",
    },
    image: "https://sitesbyvelzy.com/favicon.png", // use absolute URLs
    knowsAbout: [
      "Web design and development",
      "Analytics and tracking",
      "Marketing technology",
      "GDPR and CCPA consent management",
      "Web accessibility (WCAG/ADA)",
      "Performance optimization",
    ],
    areaServed: ["United States", "California", "Orange County"],
  };

  return (
    <Page includeMaxWidth={false}>
      <div className="max-w-[964px] px-5 md:px-8 lg:px-0 mx-auto">
        <About />
      </div>
      <div className="mt-[8rem]">
        <Testimonials />
      </div>
      <div className="max-w-[964px] px-5 md:px-8 lg:px-0 mx-auto">
        <BookCallCTA label="Let’s Build Something That Works for Your Business." />
      </div>
      <Script
        id="about-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </Page>
  );
}
