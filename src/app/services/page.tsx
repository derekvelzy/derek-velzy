// Package imports
import { Metadata } from "next";

// Custom imports
import Services from "~/components/Services/Services";
import Page from "~/components/Page/Page";

export const metadata: Metadata = {
  title: "Web Design, SEO, E-commerce & Website Services | Sites by Velzy",
  description:
    "Explore all services from Sites by Velzy in Orange County, CA: web design and development, SEO optimization, Shopify e-commerce builds, tool integration, hosting, maintenance, and accessibility audits for small businesses.",
  keywords: [
    "Web Design Services",
    "SEO Services Orange County",
    "Shopify Store Setup",
    "Website Hosting",
    "Website Maintenance",
    "Accessibility Audit",
    "Tool Integration",
    "Digital Marketing Tech",
    "Freelance Web Developer",
    "Sites by Velzy Services",
    "Derek Velzy",
  ],
  openGraph: {
    title: "Web Design, SEO, E-commerce & Website Services | Sites by Velzy",
    description:
      "Custom websites, SEO, e-commerce, integrations, hosting, and accessibility audits. Sites by Velzy helps small businesses grow online with professional web services in Orange County, CA.",
    url: "https://sitesbyvelzy.com/services",
    siteName: "Sites by Velzy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/SbVLogo.png",
        width: 1000,
        height: 1000,
        alt: "Sites by Velzy - Website Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design, SEO, E-commerce & Website Services | Sites by Velzy",
    description:
      "Freelance web developer in Orange County, CA offering web design, SEO, Shopify e-commerce, hosting, maintenance, integrations, and accessibility audits.",
    images: [
      "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/SbVLogo.png",
    ],
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://sitesbyvelzy.com/services",
  },
};


export default function ServicesPage() {
  return (
    <Page>
      <meta name="robots" content="noindex, follow" />
      <Services />
    </Page>
  );
}
