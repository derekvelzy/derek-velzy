"use client";

// Package imports

// Custom imports
import Page from "~/components/Page/Page";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";
import Image from "next/image";
import "../Portfolio.css";

export default function ReservationsAndECommerce() {
  return (
    <Page>
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
      <TwoColumns>
        <div className="image-container">
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/TKO_edit-3.jpg"
            alt="X Line bikes in Utah Desert"
            width={500}
            height={500}
          />
        </div>
        <div className="section-text">
          <div>
            <h3 className="project-section-title">Stories</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <div>
              <p><strong>Problem</strong></p>
              <p>As the EV motorcycle market becomes increasingly crowded with brands like Harley-Davidson’s Livewire, Stark Future, LAND Moto, and Surron, Zero’s nearly 20-year history is one of its strongest differentiators, but the website had no structured way to tell that story. We needed a centralized, SEO-friendly content hub to showcase real adventures, behind-the-scenes engineering, employee projects, and powertrain applications.</p>
              <br />
              <p>Without it, the brand’s longevity wasn’t visible to lower-funnel buyers, and the Marketing team had no repeatable system for publishing content without developer involvement.</p>
            </div>
          `,
              }}
            />
          </div>
        </div>
      </TwoColumns>
      <div className="image-container-full-width-height">
        <Image
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/stories-hero-4.png"
          alt="Ekho checkout drawer"
          width={1000}
          height={1000}
        />
      </div>
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
      </div>

      <TwoColumns>
        <div className="section-text">
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
              <br />
              <p>The experience was fully integrated into the existing site’s look, feel, and performance standards.</p>
            </div>
          `,
            }}
          />
        </div>
        <div className="section-text">
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
      </TwoColumns>
      <TwoColumns>
        <div className="section-text">
          <div
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
        <div className="flex flex-col gap-8">
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/lompico-sketches.jpg"
            alt="X Line bikes in Utah Desert"
            width={500}
            height={500}
          />
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/cooper.jpg"
            alt="X Line bikes in Utah Desert"
            width={500}
            height={500}
          />
        </div>
      </TwoColumns>
    </Page>
  );
}
