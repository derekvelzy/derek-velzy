// Package imports
import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "~/components/Nav/Nav";

export const metadata: Metadata = {
  title: "Sites by Velzy",
  description: "Designed and Developed by Derek Velzy",
  icons: {
    icon: "/favicon.ico?v=3"
  }
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
