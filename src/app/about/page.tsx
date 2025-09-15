"use client";

// Package imports

// Custom imports
import About from "~/components/About/About";
import Page from "~/components/Page/Page";
import BookCallCTA from "~/components/BookCallCTA/BookCallCTA";

export default function AboutPage() {
  return (
    <Page>
      <About />
      <BookCallCTA label="Let’s Build Something That Works for Your Business." />
    </Page>
  );
}
