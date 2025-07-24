"use client";

// Package imports

// Custom imports
import { Header, TextAndImageBlock } from "~/components/Page";
import Video from "~/components/Video/Video";
import Skills from "~/components/Page/Skills";
import Page from "~/components/Page/Page";

export default function ZeroWebsiteRebuild() {
  return (
    <Page>
      <Header
        title="Website Rebuild"
        place="Zero Motorcycles"
        href="https://zeromotorcycles.com/"
        src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/modelbuilder.png"
      />
      <TextAndImageBlock
        title="Background"
        text={`
            <p>
              In late 2022, Zero Motorcycles was ready for a digital refresh. Their existing website was several years old, weighed down by tech debt, deprecated tools, and an overall look that no longer matched the direction of the brand. With the launch of brand new models, evolving marketing strategies, and a push to better reflect their position as a premium, industry-leading electric motorcycle company, it was time for a change.
            </p>
            <br>
            <p>
              The redesign project kicked off in October 2022, just after the launch of the new Zero DSR/X and a new e-commerce site for parts & accessories. I worked with Zero’s digital marketing team and Canvas Creative, a design and development agency, to bring the new vision to life. Canvas led the design phase, while development was a shared effort between myself and two agency developers.
            </p>
            <br>

            <p>We overhauled core parts of the site including:</p>
            <ul>
              <li>The homepage and model pages</li>
              <li>A brand-new “Ride Electric” section</li>
              <li>A streamlined, more intuitive navigation component</li>
            </ul>

          `}
        images={[
          "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/Future-page-hugo.png",
          "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/homepage-shortest.png",
          "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/Owner-resources-page.png",
        ]}
      />
      <TextAndImageBlock
        title="Role & Outcomes"
        text={`
            <p>
              I focused on frontend development, system architecture, and performance - with a strong emphasis on scalability and long-term maintainability.
            </p>
            <ul>
              <li><strong>Built a component-based design system</strong> to drive brand consistency, improve accessibility, and reduce future dev time.</li>
              <li><strong>Improved page performance</strong> and delivered <strong>80% faster build times</strong>, making the site more efficient for both users and internal teams.</li>
              <li><strong>Collaborated across teams</strong> to ensure the final product reflected brand standards while remaining flexible and scalable for ongoing growth.</li>
            </ul>

          `}
        images={["https://aywnqw1wyioophsr.public.blob.vercel-storage.com/Navigation-element.png"]}
        square
        swap
      />
      <Video />
      <p className="[&>strong]:text-[var(--deepMarine)] mb-[6rem]">
        The final site earned an{" "}
        <strong>Honorable Mention from Awwwards</strong> and a{" "}
        <strong>7.74 judge’s score on CSS Design Awards</strong> — solid
        recognition of the quality, speed, and attention to detail behind the
        project.
      </p>
      <p style={{ fontSize: "14px", marginBottom: "1rem", fontWeight: "500" }}>
        Tools used:
      </p>
      <Skills
        skills={[
          "Next.js",
          "TypeScript",
          "Prismic CMS",
          "Shopify",
          "Figma",
          "Notion",
          "Netlify",
          "GSAP animation library",
        ]}
        id="container-tools"
        cn="tool"
      />
    </Page>
  );
}
