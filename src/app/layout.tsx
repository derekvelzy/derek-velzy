// Package imports
import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "~/components/Nav/Nav";

export const metadata: Metadata = {
  title: "Sites by Velzy | Web Design & Development in Orange County, CA",
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
    icon: "/favicon.ico?v=3",
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
      <body
        className={`${poppins.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
