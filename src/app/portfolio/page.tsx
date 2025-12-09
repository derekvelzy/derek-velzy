// Package imports
import type { Metadata } from "next";
import FloatingLinksPortfolio from "~/components/FloatingLinks/FloatingLinksPortfolio";

// Custom imports
import Page from "~/components/Page/Page";
import Portfolio from "~/components/Portfolio/Portfolio";
import Testimonials from "~/components/Testimonials/Testimonials";
import Video from "~/components/Video/Video";

export const metadata: Metadata = {
  title: "Derek Velzy | Portfolio",
  description:
    "Portfolio showcasing product design, engineering, and UX work. Selected projects demonstrating expertise in building digital products that combine design, development, and product thinking to drive measurable results. Experience includes e-commerce platforms, MarTech systems, UX prototyping, CMS development, and cross-functional collaboration.",
  keywords: [
    "Product Manager Portfolio",
    "Product Engineer",
    "Developer Portfolio",
    "Frontend Engineer Portfolio",
    "Digital Product Design",
    "E-commerce Development",
    "MarTech Systems",
    "UX Prototyping",
    "User Testing",
    "System Design",
    "CMS Development",
    "Cross-functional Collaboration",
    "Product Strategy",
    "Derek Velzy Portfolio",
  ],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Derek Velzy | Portfolio",
    description:
      "Portfolio of digital product work combining design, development, and product thinking. Projects include e-commerce platforms, MarTech systems, UX prototyping, and CMS development.",
    url: "/portfolio",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Derek Velzy Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Derek Velzy | Portfolio",
    description:
      "Portfolio showcasing product design, engineering, and UX work that drives measurable results.",
    images: ["/favicon.png"],
  },
  robots: { index: true, follow: true },
};

export default function PortfolioPage() {
  return (
    <Page relative={false} includeMaxWidth={false}>
      <div />
      <div className="max-w-[964px] mx-auto px-6 md:px-8 lg:px-0 mb-[120px]">
        <Portfolio />
      </div>
      <Testimonials portfolio={true} />
      <div className=" mt-[96px] lg:my-[120px] max-w-[964px] mx-auto px-6 md:px-8 lg:px-0">
        <div className="overflow-hidden">
          <h5 className="font-header text-[var(--darkGray)] text-[18px] mb-[1rem]" style={{ fontWeight: 400 }}>
            Design Highlights
          </h5>
        </div>
        <Video />
      </div>  
      <FloatingLinksPortfolio />
    </Page>
  );
}
