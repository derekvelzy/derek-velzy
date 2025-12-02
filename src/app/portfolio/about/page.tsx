// Package imports
import type { Metadata } from "next";

// Custom imports
import AboutPortfolio from "~/components/About/AboutPortfolio";
import Page from "~/components/Page/Page";
// import Testimonials from "~/components/Testimonials/Testimonials";

export const metadata: Metadata = {
  title: "About Derek Velzy | Product Manager, MarTech & Digital Experience",
  description:
    "Product Manager specializing in MarTech and digital experience with five years of experience building scalable web systems, marketing technology pipelines, and customer-facing products. Experience at Zero Motorcycles and Visa, working at the intersection of engineering, marketing, and UX.",
  alternates: { canonical: "/portfolio/about" },
  openGraph: {
    title: "About Derek Velzy | Product Manager, MarTech & Digital Experience",
    description:
      "Product Manager with experience building scalable web systems and MarTech solutions. Led digital product evolution at Zero Motorcycles and created UI components at Visa.",
    url: "/portfolio/about",
    type: "profile",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Derek Velzy | Product Manager",
      },
    ],
  },
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return (
    <Page includeMaxWidth={false}>
      <div className="max-w-[964px] px-5 md:px-8 lg:px-0 mx-auto">
        <AboutPortfolio />
      </div>
      {/* <div className="mt-[8rem]">
        <Testimonials />
      </div> */}
    </Page>
  );
}
