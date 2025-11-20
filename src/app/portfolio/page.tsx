// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Portfolio from "~/components/Portfolio/Portfolio";

// Do not index this page
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortfolioPage() {
  return (
    <Page relative={false}>
      <Portfolio />
    </Page>
  );
}
