// Package imports
import { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Solutions from "~/components/Solutions/Solution";

export const metadata: Metadata = {
  title: "Website Solutions That Drive Results | Sites by Velzy",
  description:
    "Discover performance-focused website solutions from Sites by Velzy in Orange County, CA. From website refreshes and full rebuilds to ongoing optimization, I help businesses create fast, trackable, and compliant websites built for growth.",
  keywords: [
    "Website Solutions",
    "Web Design Orange County",
    "Business Website Refresh",
    "Website Rebuild",
    "Website Optimization",
    "Analytics Integration",
    "Marketing Technology",
    "Consent Management",
    "Freelance Web Developer Orange County",
    "Digital Performance Partner",
    "Sites by Velzy",
    "Derek Velzy",
  ],
  openGraph: {
    title: "Website Solutions That Drive Results | Sites by Velzy",
    description:
      "Fast, trackable, and compliant websites for growing businesses. Explore website refreshes, full rebuilds, and ongoing optimization with Sites by Velzy in Orange County, CA.",
    url: "https://sitesbyvelzy.com/solutions",
    siteName: "Sites by Velzy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/SbVLogo.png",
        width: 1000,
        height: 1000,
        alt: "Sites by Velzy - Website Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Solutions That Drive Results | Sites by Velzy",
    description:
      "Freelance web developer in Orange County, CA creating fast, trackable, and compliant websites for small businesses.",
    images: [
      "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/SbVLogo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sitesbyvelzy.com/solutions",
  },
};


export default function SolutionsPage() {
  return (
    <Page relative={false}>
      <Solutions />
    </Page>
  );
}
