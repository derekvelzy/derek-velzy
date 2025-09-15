// Package imports
import type { Metadata } from "next";
import Script from "next/script";

// Custom imports
import About from "~/components/About/About";
import Page from "~/components/Page/Page";
import BookCallCTA from "~/components/BookCallCTA/BookCallCTA";

export const metadata: Metadata = {
  title: "About Derek Velzy — Web Developer in Orange County, CA",
  description:
    "Learn about Derek Velzy, a web developer and digital marketing tech specialist based in Orange County, California. I build fast, accessible websites and integrate SEO, Shopify, analytics/tracking, and GDPR/CCPA consent to drive measurable growth.",
  keywords: [
    "About Derek Velzy",
    "Web Developer Orange County",
    "Freelance Web Developer",
    "Digital Marketing Tech Specialist",
    "SEO & Analytics",
    "Shopify Developer",
    "Accessibility Specialist",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Derek Velzy — Web Developer in Orange County, CA",
    description:
      "Web developer in Orange County building fast, accessible sites with SEO, Shopify, and analytics integrations.",
    url: "/about",
    type: "profile",
    images: [
      {
        url: "/og/SbVLogo.png",
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
    image: "https://sitesbyvelzy.com/og/SbVLogo.png", // use absolute URLs
    knowsAbout: [
      "Web design and development",
      "SEO",
      "Shopify",
      "Analytics and tracking",
      "GDPR and CCPA consent management",
      "Web accessibility (WCAG/ADA)",
    ],
    areaServed: ["United States", "California", "Orange County"],
  };

  return (
    <Page>
      <About />
      <BookCallCTA label="Let’s Build Something That Works for Your Business." />
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
