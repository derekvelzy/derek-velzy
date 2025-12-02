// Package imports
import type { Metadata } from "next";

// Custom imports
import Services from "~/components/Services/Services";
import Page from "~/components/Page/Page";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <Page>
      <Services />
    </Page>
  );
}
