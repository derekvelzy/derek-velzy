// Package imports
// Custom imports
import Page from "~/components/Page/Page";
import Portfolio from "~/components/Portfolio/Portfolio";

// Do not index this page
export const robots: { index: false, follow: false } = { index: false, follow: false };

export default function PortfolioPage() {
  return (
    <Page>
      <Portfolio />
    </Page>
  );
}
