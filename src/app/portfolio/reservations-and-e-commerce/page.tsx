"use client";

// Package imports

// Custom imports
import Page from "~/components/Page/Page";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";
import ThreeColumns from "~/components/Portfolio/Slices/ThreeColumns";
import Image from "next/image";
import "../Portfolio.css";
import AutoPlayVideo from "~/components/AutoPlayVideo/AutoPlayVideo";

export default function ReservationsAndECommerce() {
  return (
    <Page>
      <Hero
        title="Reservations & E-Commerce"
        titleHtml="<div><h1>Reservations &</h1><h1>E-Commerce</h1></div>"
        summary="I designed and built the digital purchase flows that enabled customers to reserve or purchase motorcycles on Zero’s website, including the X Line reservation experience, a mobile-first checkout drawer powered by Ekho Dealer, and a Past Editions storefront for older model years. These systems turned the site into a reliable driver of online orders without adding new backend complexity."
        metrics={[
          {
            keyMetric: "8%",
            description:
              "Share of annual U.S. motorcycle revenue fulfilled through online orders",
          },
          {
            keyMetric: "9",
            description:
              "Online motorcycle orders in first month of Past Editions with $0 marketing spend",
          },
          {
            keyMetric: "400+",
            description:
              "Paid X Line reservations, leading to 25% conversion rate - above the ~10-20% industry average",
          },
          {
            keyMetric: "Top-10",
            description:
              "Most viewed page type, launched in 4 weeks using existing infrastructure",
          },
        ]}
        company="Zero Motorcycles"
        link="https://zeromotorcycles.com/"
      />
      <TwoColumns>
        <div className="section-text">
          <div>
            <h3 className="light-header">Part 1</h3>
            <h3 className="project-section-title">
              X Line Reservations & Full Online Sales
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <div>
              <p><strong>Overview & Objectives</strong></p>
              <p>Zero’s 2024 X Line launch introduced the company’s first sub-$5k electric motorcycles: a new, higher-volume category designed to attract first-time EV riders; an initiative called “All Access”. For the first time, riders could place a paid reservation directly on the website, which required a new digital funnel, a clear conversion path, and consumer confidence in online purchasing.</p>
              <br />
              <p>After strong early signals, the goal for January 2025 was to expand from reservations to full online motorcycle sales across the lineup, using our partnership with Ekho to handle payments and order processing.</p>
            </div>
          `,
              }}
            />
          </div>
        </div>
        <div className="image-container">
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/brimhall.jpg"
            alt="X Line bikes in Utah Desert"
            width={500}
            height={500}
          />
        </div>
      </TwoColumns>
      <TwoColumns>
        <div className="video-container">
          <AutoPlayVideo vimeoId="1138183200" triggerOnView={true} />
        </div>
        <div className="section-text">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <div>
              <p><strong>Teaser Campaign & Reservation Funnel</strong></p>
              <p>To build momentum leading up to launch day, I designed and developed a two-week teaser experience featuring a progressive image reveal and a live countdown. On launch, the homepage transitioned into a hero video leading riders into a new X Line category page and two dedicated model pages.</p>
              <br />
              <p>The funnel was intentionally simple: Homepage → X Line page → Model page → Reserve Now, with a persistent floating CTA and lightweight page designs to reduce friction, especially on mobile.</p>
            </div>
          `,
            }}
          />
        </div>
      </TwoColumns>
      <ThreeColumns>
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div>
              <p><strong>Expanding to Full Online Sales</strong></p>
              <p><strong>January 2025</strong></p>
              <p>Following the success of reservations, we moved to enable full online purchases for all models.</p>
              <br />
              <p>To make the Ekho checkout experience feel native, I designed a mobile-first slide-in configurator drawer that loaded instantly on click. Each drawer pre-fetched the correct Ekho checkout URLs via API so the handoff felt seamless, without adding backend dependencies or slowing down the model pages.</p>
            </div>
          `,
          }}
        />
        <div className="image-container">
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/checkout-window.png"
            alt="Ekho checkout drawer"
            width={500}
            height={500}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div>
              <p><strong>Technical Approach</strong></p>
              <ul>
                <li>Pre-fetched Ekho checkout URLs on page load for instant redirect.</li>
                <li>Lightweight slide-in UI replacing the heavier legacy model builder.</li>
                <li>Mobile-first design prioritizing thumb reach and minimal steps.</li>
                <li>Webhook → Zapier → HubSpot pipeline for lead and order tracking.</li>
              </ul>
              <p>The goal was speed, reliability, and trust — not a full commerce rebuild.</p>
            </div>
          `,
          }}
        />
      </ThreeColumns>
      <div className="section-text">
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div>
              <p><strong>Results</strong></p>
              <ul>
                <li><span class="marine-strong">8% of annual U.S. motorcycle revenue</span> processed through online orders in the first year</li>
                <li><span class="marine-strong">400+ paid reservations</span> placed for X Line.</li>
                <li><span class="marine-strong">25% conversion rate</span> from reservation to purchase, compared to the 10-20% industry average for automotive & power sports.</li>
                <li><span class="marine-strong">New sales channel unlocked</span>: customers could purchase motorcycles online for the first time in the U.S. market.</li>
                <li>Established the foundation for all future digital sales initiatives.</li>
              </ul>
            </div>
          `,
          }}
        />
      </div>
      <div className="h-[64px]" />
      <div className="w-full h-[1px] bg-[rgba(0,0,0,0.15)]" />
      <div className="h-[64px]" />
      <h3 className="light-header">Part 2</h3>
      <h3 className="project-section-title">
        Past Editions: Moving Previous Model Years with an MVP
      </h3>
      <div className="section-text mb-8">
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <div>
              <p><strong>Problem</strong></p>
              <p>By mid-2025, sales of 2024 models had slowed significantly. Up to 150 units were sitting idle across U.S. warehouses and dealer floors, and there was no budget for marketing, tooling, or new development. Previous-year bikes were technically purchasable online but nearly undiscoverable, buried behind a toggle on each model page.</p>
              <br />
              <p>Leadership asked whether the website could help move aging inventory, and quickly.</p>
            </div>
          `,
          }}
        />
      </div>
      <div className="image-container-full-width-height">
        <Image
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/past-editions-home.png"
          alt="Ekho checkout drawer"
          width={1000}
          height={1000}
        />
      </div>
      <TwoColumns>
        <div className="section-text">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <div>
              <p><strong>Solution: A Fast, Lean MVP Built on Existing Infrastructure</strong></p>
              <p>With four weeks to deliver, I designed and built a Past Editions storefront using the headless Shopify infrastructure from our 2022 accessories “look-book” site. This avoided net-new backend work and reduced the build scope to UX and frontend engineering.</p>
              <br />
              <p>Key elements included:</p>
              <ul>
                <li>A new Past Editions page listing all previous model-year bikes in one place.</li>
                <li>Top-nav placement and “Shop Past Editions” CTAs on model pages.</li>
                <li>A redesigned left-column navigation allowing riders to switch between Accessories and Past Editions.</li>
                <li>Streamlined product detail pages with purchase CTAs linked to pre-fetched Ekho checkout URLs.</li>
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
              <p><strong>Results</strong></p>
              <ul>
                <li><span class="marine-strong">Top-10 most viewed page type</span> in the U.S. within the first month.</li>
                <li><span class="marine-strong">6.5K+ views</span> in the first 30 days.</li>
                <li><span class="marine-strong">9 online motorcycle orders</span> in the first month, exceeding expectation with <span class="marine-strong">$0 marketing spend</span>.</li>
                <li>Delivered the MVP in <span class="marine-strong">4 weeks</span> (2 weeks active development).</li>
                <li>Provided Sales with a new digital tool for moving aging inventory.</li>
                <li>Demonstrated the viability of reusing existing systems for future commerce initiatives.</li>
              </ul>
              <br />
              <p>This project showed that Zero could create revenue-generating experiences quickly and sustainably by leveraging what we already had. It strengthened cross-functional trust during a challenging sales period and validated the website as a flexible, resilient commerce platform capable of driving real value — even with limited resources.</p>
            </div>
          `,
            }}
          />
        </div>
      </TwoColumns>
      <div className="image-container-full-width-height">
        <Image
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/past-editions-page.png"
          alt="Ekho checkout drawer"
          width={1000}
          height={1000}
        />
      </div>
    </Page>
  );
}
