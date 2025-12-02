// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import ContactPortfolio from "~/components/Contact/ContactPortfolio";

export const metadata: Metadata = {
  title: "Contact Derek Velzy | Product Manager, MarTech & Digital Experience",
  description: "Get in touch with Derek Velzy",
  alternates: { canonical: "/portfolio/contact" },
  openGraph: {
    title:
      "Contact Derek Velzy | Product Manager, MarTech & Digital Experience",
    description: "Get in touch with Derek Velzy",
    url: "/portfolio/contact",
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
        <ContactPortfolio />
      </div>
    </Page>
  );
}
