"use client";

// Package imports

// Custom imports
import { Header, TextAndImageBlock } from "~/components/Page";
import Skills from "~/components/Page/Skills";
import Page from "~/components/Page/Page";

export default function ZeroWebsiteRebuild() {
  return (
    <Page>
      <Header
        title="Lead Capturing and Accuracy"
        place="Zero Motorcycles"
        href="https://zeromotorcycles.com/"
        src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/Map-page-3.png"
        imgStyles={{ scale: "1.1" }}
      />
      <TextAndImageBlock
        title="Background"
        text={`
            <p>
              Zero Motorcycles needed a more streamlined way to capture leads and connect them to dealerships — all while integrating cleanly with their email marketing efforts. HubSpot was chosen as the central platform for lead management, dealership data, marketing automation, chatbot hosting, and more.
            </p>
            <br>
            <p>
              My role was to build a flexible, reliable system for connecting high-quality leads to the right dealership, no matter where they came from.
            </p>
          `}
        images={["https://aywnqw1wyioophsr.public.blob.vercel-storage.com/hubspot.png"]}
        square
      />
      <TextAndImageBlock
        title="What I Built"
        text={`
            <ul>
              <li><strong>Custom Dealer Locator</strong>: I replaced a costly, limited third-party tool with a custom-built locator powered by HubSpot data. This allowed the Sales and Marketing teams to define their own logic and rules — not just what came out of the box.</li>
              <li><strong>Integrated Lead Forms</strong>: I built site-wide lead forms (including address autofill) to feed clean, structured data into HubSpot for better routing and segmentation.</li>
              <li><strong>Smart Lead Routing</strong>: I developed a custom geolocation-based workflow to automatically assign leads to the nearest dealership. The logic considered distance, regional rules, model availability, and more — including form submissions from Meta, Google, and third-party sources.</li>
            </ul>

          `}
        images={["https://aywnqw1wyioophsr.public.blob.vercel-storage.com/Design-system-2.png"]}
        swap
        square
      />
      <TextAndImageBlock
        title="Results"
        text={`
            <p>These efforts led to a <strong>34% increase</strong> in leads successfully routed to dealerships, helping Sales close the loop faster and making the user experience more intuitive along the way.</p>
          `}
      />
      <p style={{ fontSize: "14px", marginBottom: "1rem", fontWeight: "500" }}>
        Tools used:
      </p>
      <Skills
        skills={["HubSpot CRM", "Mapbox", "Cloudflare Workers"]}
        id="container-tools"
        cn="tool"
      />
    </Page>
  );
}
