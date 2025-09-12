"use client";

// Package imports

// Custom imports
import { Header } from "~/components/Page";
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
    </Page>
  );
}
