// Package imports
import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import Script from "next/script";

// Custom imports
import "./globals.css";
import Nav from "~/components/Nav/Nav";
import Gtm from "./(analytics)/Gtm";

export const metadata: Metadata = {
  title: "Sites by Velzy | Web Design & Development in Orange County, CA",
  applicationName: "Sites by Velzy",
  description:
    "Sites by Velzy, led by Derek Velzy, provides expert web design, development, SEO, Shopify e-commerce help, digital marketing integrations, hosting, maintenance plans, and accessibility audits in Orange County, California.",
  keywords: [
    "Web Design Orange County",
    "Web Development",
    "Shopify Expert",
    "SEO Services",
    "Digital Marketing Integration",
    "Website Hosting",
    "Website Maintenance",
    "Accessibility Audits",
    "Freelance Web Designer",
    "Sites by Velzy",
    "Derek Velzy",
  ],
  authors: [{ name: "Derek Velzy", url: "https://sitesbyvelzy.com" }],
  openGraph: {
    title: "Sites by Velzy | Web Design & Development in Orange County, CA",
    description:
      "Custom websites, SEO, e-commerce, and digital integrations by Derek Velzy. Serving Orange County businesses with modern design, development, and accessibility expertise.",
    url: "https://sitesbyvelzy.com",
    siteName: "Sites by Velzy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/SbVLogo.png",
        width: 1000,
        height: 1000,
        alt: "Sites by Velzy - Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites by Velzy | Web Design & Development in Orange County, CA",
    description:
      "Freelance web designer & developer in Orange County, CA. SEO, Shopify, digital marketing tools, hosting, maintenance, and accessibility audits.",
    images: [
      "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/SbVLogo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sitesbyvelzy.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust to the weights you use
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust to the weights you use
  variable: "--font-playfair",
  display: "swap",
  style: ["italic", "normal"], // Include italic style
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="20f94bff-e554-48be-b53e-c98c5b3faea4"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        <Gtm />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        {children}
      </body>
    </html>
  );
}
