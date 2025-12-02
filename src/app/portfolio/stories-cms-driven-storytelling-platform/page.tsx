// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";
import Image from "next/image";
import "../Portfolio.css";

export const metadata: Metadata = {
  title: "Case Study | Stories: CMS-Driven Storytelling Platform",
  description:
    "Stories: CMS-driven storytelling platform for Zero Motorcycles.",
  alternates: {
    canonical: "/portfolio/stories-cms-driven-storytelling-platform",
  },
  openGraph: {
    title: "Case Study | Stories: CMS-Driven Storytelling Platform",
    description:
      "Stories: CMS-driven storytelling platform for Zero Motorcycles.",
    url: "/portfolio/stories-cms-driven-storytelling-platform",
    type: "profile",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Case Study | Stories: CMS-Driven Storytelling Platform",
      },
    ],
  },
  robots: { index: false, follow: true },
};

export default function StoriesCmsDrivenStorytellingPlatform() {
  return (
    <Page includeMaxWidth={false}>
      <Hero
        title="Stories: CMS-Driven Storytelling Platform "
        titleHtml="<div><h1>Stories: CMS-Driven</h1><h1>Storytelling Platform</h1></div>"
        summary="To reinforce Zero’s credibility as the longest-standing electric motorcycle brand, I built a scalable, CMS-driven Stories platform that showcases customer adventures, employee projects, brand innovations, and more. I led the end-to-end design, architecture, and CMS implementation, enabling non-technical teammates to publish independently. The result is a high-engagement, SEO-supporting content hub that strengthens brand authority and internal culture."
        metrics={[
          {
            keyMetric: "+45%",
            description:
              "Increase in avg. session duration compared to non-Story pages",
          },
          {
            keyMetric: "108%",
            description: "Increase in users reaching 90% scroll-depth",
          },
          {
            keyMetric: "20",
            description:
              "Content-rich Stories published within the first 12 months",
          },
          {
            keyMetric: "4",
            description:
              "Non-technical team members publishing content independently",
          },
        ]}
        company="Zero Motorcycles"
        link="https://zeromotorcycles.com/"
      />
      <div id="first-section" className="portfolio-sub-hero">
        <Image
          className="h-[700px] lg:h-[1000px]"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/stories-srx-hero-2.jpg"
          alt="Zero SR/X Concept motorcycle"
          width={5000}
          height={5000}
        />
        <div className="absolute w-full top-0 py-[1rem] lg:py-[4rem] h-full">
          <div className="w-full p-6 lg:p-0 lg:max-w-[964px] lg:mx-auto h-full">
            <TwoColumns className="h-full">
              <h3 className="project-section-title">Stories</h3>
              <div className="h-full flex flex-col items-start justify-between">
                <div
                  className="section-text"
                  dangerouslySetInnerHTML={{
                    __html: `
                <div>
                  <p><strong>Problem</strong></p>
                  <p>As the EV motorcycle market becomes increasingly crowded with brands like Harley-Davidson’s Livewire, Stark Future, LAND Moto, and Surron, Zero’s nearly 20-year history is one of its strongest differentiators, but the website had no structured way to tell that story. We needed a centralized, SEO-friendly content hub to showcase real adventures, behind-the-scenes engineering, employee projects, and powertrain applications.</p>
                </div>
              `,
                  }}
                />
                <p>
                  Without it, the brand’s longevity wasn’t visible to
                  lower-funnel buyers, and the Marketing team had no repeatable
                  system for publishing content without developer involvement.
                </p>
              </div>
            </TwoColumns>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns className="items-center">
          <div className="section-text mb-8">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <div>
                  <p><strong>Solution</strong></p>
                  <p>I designed, developed, and launched Stories: a dynamic storytelling platform integrated into Zero’s top-level navigation and fully powered by Prismic CMS.</p>
                </div>
          `,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: `
              <div>
                <p class="semi-bold">Platform Architecture & UX:</p>
                <ul>
                  <li>Designed the full UX/UI system in Figma and implemented it in Next.js + Prismic.</li>
                  <li>Created a flexible CMS architecture using over 20 reusable Prismic slices (Hero, Author, Carousel, CTA, etc.).</li>
                  <li>Added category filtering (Adventures, Customs, Events, Staff Spotlights) for user discovery.</li>
                  <li>Integrated Firebase for story “likes” and GA4 for engagement tracking.</li>
                  <li>Enabled Prismic Preview in Next.js for real-time staging views.</li>
                </ul>
              </div>
          `,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: `
              <div>
                <p class="semi-bold">Internal Workflow Enablement:</p>
                <ul>
                  <li>Built internal documentation and trained four Marketing team members.</li>
                  <li>Established a scalable workflow: draft → upload → preview → publish.</li>
                  <li>Added AI-supported internationalization for future localization needs.</li>
                  <li>Reduced developer involvement to a single approval step.</li>
                </ul>
              </div>
          `,
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/stories_2.png"
              alt="Stories home hero on mobile"
              width={1000}
              height={1000}
            />
            <span className="image-caption">Stories home hero on mobile</span>
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="flex flex-col gap-8 items-center justify-center">
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/lompico-sketches.jpg"
              alt="Sketches of future motorcycles designs"
              width={500}
              height={500}
            />
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/cooper.jpg"
              alt="Mini Cooper with a Zero Powertrain, Created by a Zero Employee"
              width={500}
              height={500}
            />
          </div>
          <div className="section-text">
            <div
              className="mt-8 lg:mt-0"
              dangerouslySetInnerHTML={{
                __html: `
            <div>
              <p><strong>Results</strong></p>
              <p>Engagement & Performance</p>
              <ul>
                <li><span class="marine-strong">+45%</span> improvement in session duration vs. non-Story pages.</li>
                <li>Users reach <span class="marine-strong">90% scroll depth</span> 108% more often, indicating deeper content engagement.</li>
                <li>Stories average <span class="marine-strong">15–30 likes</span>, validating the social-proof interaction.</li>
              </ul>
              <p>Content Output & SEO</p>
              <ul>
                <li><span class="marine-strong">20 stories</span> published in the first 12 months, building a consistent content cadence.</li>
                <li>Improved organic visibility for long-tail informational queries such as: “Can I charge an electric motorcycle with a Tesla charger?” or "Best electric motorcycle for hard enduro”</li>
                <li>Stories now act as evergreen assets referenced by customers, media, and dealers.</li>
              </ul>
              <p>Internal Adoption & Cultural Impact</p>
              <ul>
                <li><span class="marine-strong">4 Marketing team members</span> fully enabled to publish independently.</li>
                <li>Increased internal pride and cross-department engagement, with 4 Staff Spotlight stories created.</li>
                <li>Eliminated developer bottlenecks for content publishing.</li>
              </ul>
            </div>
          `,
              }}
            />
          </div>
        </TwoColumns>
      </div>
    </Page>
  );
}
