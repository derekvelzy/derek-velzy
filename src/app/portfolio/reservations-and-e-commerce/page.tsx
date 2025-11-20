"use client";

// Package imports

// Custom imports
import Page from "~/components/Page/Page";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";
import Image from "next/image";
import "../Portfolio.css";
import AutoPlayVideo from "~/components/AutoPlayVideo/AutoPlayVideo";

export default function ReservationsAndECommerce() {

  return (
    <Page includeMaxWidth={false}>
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

      <div className="portfolio-sub-hero">
        <Image
          className="hidden lg:block"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/ecom_hero_copy_1.jpg"
          alt="X Line bikes in Utah Desert"
          width={3000}
          height={3000}
          style={{ height: 800 }}
        />
        <Image
          className="block lg:hidden"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/ecom_hero_mobile.jpg"
          alt="X Line bikes in Utah Desert"
          width={1500}
          height={1500}
          style={{ height: 800 }}
        />
        <div className="h-[550px] bg-linear-to-t from-[rgba(0,0,0,0.6)] to-transparent absolute bottom-0 left-0 z-0 w-full" />
        <div className="absolute w-full top-0 lg:top-[unset] lg:bottom-0 h-full lg:h-auto">
          <div className="w-full p-6 lg:p-0 lg:max-w-[964px] lg:mx-auto h-full lg:h-auto">
            <h3
              className="light-header"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              Part 1
            </h3>
            <h3 className="project-section-title" style={{ color: "white" }}>
              X Line Reservations & Full Online Sales
            </h3>
            <p>
              <strong>Overview & Objectives</strong>
            </p>
            <TwoColumns className="gap-[240px] md:gap-[400px]">
              <div
                className="section-text"
                dangerouslySetInnerHTML={{
                  __html: `
                <div>
                  <p>Zero’s 2024 X Line launch introduced the company’s first sub-$5k electric motorcycles: a new, higher-volume category designed to attract first-time EV riders; an initiative called “All Access”. For the first time, riders could place a paid reservation directly on the website, which required a new digital funnel, a clear conversion path, and consumer confidence in online purchasing.</p>
                </div>
              `,
                }}
              />
              <p style={{ color: "white" }}>
                After strong early signals, the goal for January 2025 was to
                expand from reservations to full online motorcycle sales across
                the lineup, using our partnership with Ekho to handle payments
                and order processing.
              </p>
            </TwoColumns>
          </div>
        </div>
      </div>
      <div className="relative mb-[64px] lg:mb-[96px]">
        <div className="w-full max-w-[964px] mx-auto">
          <div className="absolute flex justify-end top-0 left-0 bg-[#500201] h-[300px] lg:h-[500px] w-[100vw] lg:w-[calc(50vw-2rem)]">
            <AutoPlayVideo vimeoId="1138183200" triggerOnView={true} />
          </div>
          <TwoColumns>
            <div className="h-[300px] lg:h-[500px]" />
            <div className="section-text h-[350px] lg:h-[500px] flex flex-col justify-center items-center px-6 lg:px-0 justify-start mt-8 lg:mt-0 lg:justify-center">
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
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="section-text h-auto flex flex-col justify-center items-center">
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
            <div
              className="mb-8 lg:mb-0"
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
          </div>
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/checkout-window.png"
            alt="Ekho checkout drawer"
            width={500}
            height={500}
          />
        </TwoColumns>
      </div>
      <div className="section-text max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
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
      <div className="portfolio-sub-hero mb-[96px]">
        <Image
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/ecom_hero_2.jpg"
          alt="X Line bikes in Utah Desert"
          width={3000}
          height={3000}
          style={{ height: 750 }}
        />
        <div className="lg:h-[600px] h-[750px] bg-linear-to-b from-[rgba(0,0,0,0.8)] lg:from-[rgba(0,0,0,0.5)] to-transparent absolute top-0 left-0 z-0 w-full" />
        <div className="absolute w-full top-0 px-6 lg:px-0">
          <div className="max-w-[964px] mx-auto mt-6 lg:mt-[64px]">
            <TwoColumns>
              <div>
                <h3
                  className="light-header"
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  Part 2
                </h3>
                <h3
                  className="project-section-title"
                  style={{ color: "white" }}
                >
                  Past Editions: Moving Previous Model Years with an MVP
                </h3>
              </div>
              <div
                className="section-text"
                dangerouslySetInnerHTML={{
                  __html: `
                <div>
                <p><strong>Problem</strong></p>
                  <p>By mid-2025, sales of 2024 models had slowed significantly. Up to 150 units were sitting idle across U.S. warehouses and dealer floors and there was no budget for marketing, tooling, or new development. Previous-year bikes were technically purchasable online but nearly undiscoverable, buried behind a toggle on each model page.</p>
                  <br />
                  <p>Leadership asked whether the website could help move aging inventory, and quickly.</p>
                </div>
              `,
                }}
              />
            </TwoColumns>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="section-text h-auto flex flex-col justify-center items-center mb-8 lg:mb-0">
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <div>
              <p><strong>Solution: A Fast, Lean MVP Built on Existing Infrastructure</strong></p>
              <p>With four weeks to deliver, I designed and built a Past Editions storefront using the headless Shopify infrastructure from our 2022 accessories “look-book” site. This avoided net-new backend work and reduced the build scope to UX and frontend engineering.</p>
            </div>
          `,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <div>
              <p><strong>Key elements included:</strong></p>
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
            <Image
              className="object-contain"
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/ecom_3.png"
              alt="Past Editions home page"
              width={1000}
              height={1000}
            />
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] px-6 lg:px-0">
        <div>
          <div
            className="mb-[32px]"
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
            </div>
          `,
            }}
          />
          <p>
            This project showed that Zero could create revenue-generating
            experiences quickly and sustainably by leveraging what we already
            had. It strengthened cross-functional trust during a challenging
            sales period and validated the website as a flexible, resilient
            commerce platform capable of driving real value — even with limited
            resources.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] px-6 lg:px-0">
        <Image
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/past-editions-home.png"
          alt="Past Editions page"
          width={3000}
          height={3000}
        />
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] px-6 lg:px-0">
        <Image
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/past-editions-page.png"
          alt="Past Editions page"
          width={3000}
          height={3000}
        />
      </div>
    </Page>
  );
}
