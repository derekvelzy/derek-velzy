"use client";

import BookCallCTA from "~/components/BookCallCTA/BookCallCTA";
// Package imports

// Custom imports
import { Header } from "~/components/Page";
import Involved from "~/components/Page/Involved";
// import Skills from "~/components/Page/Skills";
import Page from "~/components/Page/Page";

export default function AdventureKitty() {
  return (
    <Page>
      <Header
        title="Placeholder for Adventure Kitty"
        href="https://adventurekittyshop.com/"
        src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/AK_Hero-w-logo.png"
        imgStyles={{ scale: "1.1" }}
      />
      <Involved
        service="E-commerce Development"
        link="/services#e-commerce"
      />
      <BookCallCTA smallPadding label="Want to launch or improve your online store?" />
    </Page>
  );
}
