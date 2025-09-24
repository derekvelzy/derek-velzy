// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Contact from "~/components/Contact/ContactWithSuspense";

export const metadata: Metadata = {
  title: "Contact — Book a Free Discovery Call",
  description:
    "Get in touch with Derek Velzy. Book a free discovery call or send a message about web design, SEO, Shopify, integrations, maintenance, or accessibility. Based in Orange County, CA; working locally and remotely.",
  keywords: [
    "Contact",
    "Book a discovery call",
    "Web Designer Orange County",
    "Freelance Web Developer",
    "SEO Consultation",
    "Shopify Help",
    "Website Maintenance",
    "Accessibility Audit",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Book a Free Discovery Call",
    description:
      "Book a call or send a message about web design, SEO, e-commerce, and integrations.",
    url: "/contact",
    siteName: "Sites by Velzy",
    type: "website",
    images: [{ url: "/favicon.png", width: 1000, height: 1000, alt: "Sites by Velzy" }],
  },
  robots: { index: true, follow: true },
};


export default function ContactPage() {
  return (
    <Page>
      <Contact standalone />
    </Page>
  );
}
