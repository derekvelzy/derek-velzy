"use client";

// Package imports

// Custom imports
import { Header, TextAndImageBlock } from "~/components/Page";
import src from "@public/img/website-rebuild-2.jpeg";
import img1 from "@public/img/lead-capture-2.jpeg";
import img2 from "@public/img/website-rebuild-2.jpeg";
import img3 from "@public/img/video-cover-1.jpg";
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
          src={src.src}
        />
        <TextAndImageBlock
          title="Background"
          text={`
            <p>
              In late 2022, Zero Motorcycles was ready for a digital refresh. Their existing website was several years old, weighed down by tech debt, deprecated tools, and an overall look that no longer matched the direction of the brand. With new models launching, evolving marketing strategies, and a push to better reflect their position as a premium, forward-thinking electric motorcycle company — it was time for a change.
            </p>
            <br>
            <p>
              The redesign project kicked off in October 2022, just after the launch of their DSR/X model and a new e-commerce site for parts & accessories. I worked closely with the internal Zero team and Canvas Creative — a design and development agency — to bring the new vision to life. Canvas led the design phase, while development was a shared effort between myself (embedded at Zero) and two agency developers.
            </p>
            <br>

            <p>We overhauled core parts of the site including:</p>
            <ul>
              <li>The homepage and model pages</li>
              <li>A brand-new “Ride Electric” section</li>
              <li>A streamlined, more intuitive navigation component</li>
            </ul>

          `}
          images={[img1.src, img2.src, img3.src]}
        />
        <TextAndImageBlock
          title="Role & Outcomes"
          text={`
            <p>
              I focused on frontend development, system architecture, and performance — with a strong emphasis on scalability and long-term maintainability.
            </p>
            <ul>
              <li><strong>Built a component-based design system</strong> to drive brand consistency, improve accessibility, and reduce future dev time.</li>
              <li><strong>Improved page performance</strong> and delivered <strong>80% faster build times</strong>, making the site more efficient for both users and internal teams.</li>
              <li><strong>Collaborated across teams</strong> to ensure the final product reflected the brand’s high standards — while remaining flexible and scalable for ongoing growth.</li>
            </ul>

          `}
          images={[img1.src]}
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
        <p
          style={{ fontSize: "14px", marginBottom: "1rem", fontWeight: "500" }}
        >
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
