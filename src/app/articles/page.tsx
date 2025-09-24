// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Blog from "~/components/Blog/Blog";

export const metadata: Metadata = {
  title: "Articles — Web Design, SEO, Shopify & Analytics Guides",
  description:
    "Articles and how-tos by Derek Velzy in Orange County, CA. Practical guidance on web design & development, SEO, Shopify e-commerce, analytics/tracking, accessibility, and consent management.",
  keywords: [
    "Web Design Blog",
    "SEO Tips",
    "Shopify Guides",
    "Analytics Tracking",
    "Accessibility (WCAG/ADA)",
    "Consent Management GDPR CCPA",
    "Freelance Web Developer Articles",
  ],
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles — Web Design, SEO, Shopify & Analytics",
    description:
      "Practical articles on building fast, accessible, conversion-focused websites.",
    url: "/articles",
    siteName: "Sites by Velzy",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Sites by Velzy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles — Web Design, SEO, Shopify & Analytics",
    description:
      "Guides and tutorials by Derek Velzy on web dev, SEO, Shopify, analytics, and accessibility.",
    images: ["/favicon.png"],
  },
  robots: { index: true, follow: true },
};

export default function ZeroWebsiteRebuild() {
  return (
    <Page>
      <Blog />
    </Page>
  );
}
