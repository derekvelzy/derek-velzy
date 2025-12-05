// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";
import ThreeColumns from "~/components/Portfolio/Slices/ThreeColumns";
import Image from "next/image";
import SecondaryLink from "~/components/Link/SecondaryLink";
import "../Portfolio.css";

export const metadata: Metadata = {
  title: "Case Study | Unified Lead Routing & Dealer Locator System",
  description:
    "Unified lead routing and dealer locator system for Zero Motorcycles.",
  alternates: { canonical: "/portfolio/unified-lead-and-dealer-locator-system" },
  openGraph: {
    title: "Case Study | Unified Lead Routing & Dealer Locator System",
    description:
      "Unified lead routing and dealer locator system for Zero Motorcycles.",
    url: "/portfolio/unified-lead-and-dealer-locator-system",
    type: "profile",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Case Study | Unified Lead Routing & Dealer Locator System",
      },
    ],
  },
  robots: { index: false, follow: true },
};

export default function UnifiedLeadAndDealerLocatorSystem() {
  return (
    <Page includeMaxWidth={false}>
      <Hero
        title="Unified Lead Routing & Dealer Locator Platform"
        titleHtml="<div><h1>Unified Lead Routing &</h1><h1>Dealer Locator Platform</h1></div>"
        summary="Zero Motorcycles needed a more streamlined way to capture leads and connect them to dealerships — all while integrating cleanly with their email marketing efforts. HubSpot was chosen as the central platform for lead management, dealership data, marketing automation, chatbot hosting, and more."
        metrics={[
          {
            keyMetric: "97.7%",
            description: "Dealer leads routed correctly, up from 63.8%",
          },
          {
            keyMetric: "5 → 1",
            description: "Lead sources unified into single routing flow",
          },
          {
            keyMetric: "350K+/mo",
            description: "API requests served at <200ms with 99.9% uptime",
          },
          {
            keyMetric: "5-7 hrs / month",
            description: "Saved in manual lead routing",
          },
        ]}
        company="Zero Motorcycles"
        link="https://zeromotorcycles.com/"
      />
      <div id="first-section" className="portfolio-sub-hero">
        <Image
          className="h-[300px] lg:h-[800px]"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/lead_routing_hero.jpg"
          alt="Zero Motorcycles at a dealership"
          width={3000}
          height={3000}
        />
        <div className="lg:absolute top-0 w-full h-full">
          <div className="w-full lg:max-w-[964px] lg:mx-auto h-full flex justify-end">
            <div
              className="lg:w-1/2 h-fit py-8 lg:py-0 lg:h-full bg-[rgba(22,28,32,0.8)] bg-blur-lg flex flex-col items-start justify-center px-8"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <h3 className="project-section-title">
                Unified Lead Routing System
              </h3>
              <div className="section-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
            <div>
              <p><strong>Problem</strong></p>
              <p>Lead data was fragmented across several sources with inconsistent fields and data types. Because of this...</p>
              <ul>
                <li>Leads often came in with missing or incomplete data, requiring manual review of leads by Sales team.</li>
                <li>Dealers receive irrelevant or duplicate leads.</li>
                <li>Marketing team struggles to segment audiences and personalize content.</li>
              </ul>
            </div>
          `,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-[64px] lg:mb-[96px]">
        <div className="w-full max-w-[964px] mx-auto">
          <div className="absolute flex flex-col justify-end top-0 left-0 h-[300px] lg:h-[600px] w-[100vw] lg:w-[calc(50vw-2rem)]">
            <Image
              className="h-[300px] lg:h-[600px]"
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/lead-routing-diagram-3.png"
              alt="Section of lead routing system diagram"
              width={500}
              height={500}
              style={{ width: "100%", objectFit: "cover" }}
            />
            <span className="image-caption">
              Section of lead routing system diagram
            </span>
          </div>
          <TwoColumns>
            <div className="h-[300px] lg:h-[600px]" />
            <div className="section-text h-[450px] lg:h-[600px] flex flex-col justify-center items-start px-6 lg:px-0 justify-start mt-8 lg:mt-0 lg:justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <div>
                    <p><strong>Solution</strong></p>
                    <p>I designed a unified lead standardization pipeline that reformats all inbound data into a single schema before entering HubSpot. Each lead then runs through an automated routing workflow that assigns the closest dealership using Mapbox driving-time logic and scores the lead (–10 to 10) based on distance, borders, and routing rules.</p>
                    <br />
                    <p>Regular cross-functional reviews with Sales and Marketing helped refine the system over time. Introducing improvements like address autofill in web forms also further increased routing accuracy.</p>
                  </div>
                </div>
                `,
                }}
              />
              <div>
                <SecondaryLink
                  href="https://www.figma.com/board/888VS4q1gKFYkqaBl8Ztx0/Zero-Marketing-System-Diagram?node-id=0-1&t=q0tteOXVp0UV1Mux-1"
                  label="View Full Diagram on Figma"
                  external
                />
              </div>
            </div>
          </TwoColumns>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="section-text mb-8 lg:mb-0">
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <div>
              <p><strong>Results</strong></p>
              <p>Through ongoing frontend improvements and iterative enhancements to the routing logic, I increased lead routing accuracy to <span class="marine-strong">97.7%</span> (a <span class="marine-strong">34%</span> lift year-over-year). </p>
              <br />
              <p>Regular cross-functional reviews with Sales and Marketing helped refine the system over time. Introducing improvements like address autofill in web forms also further increased routing accuracy.</p>
              <br />
              <p>These gains effectively save the Sales team <span class="marine-strong">5–7 hours per month</span> in manual dealer assignments.</p>
            </div>
          `,
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            <Image
              style={{ objectFit: "contain" }}
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/lead-accuracy-graph.png"
              alt="One year of performance data for the lead routing system"
              width={500}
              height={500}
            />
            <span className="image-caption">
              One year of performance data for the lead routing system
            </span>
          </div>
        </TwoColumns>
      </div>
      <div className="portfolio-sub-hero text-dark-mobile mb-[96px]">
        <Image
          className="hidden lg:block"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/black-locator-3.png"
          alt="Dealer Locator globe showing globl dealer network"
          width={3000}
          height={3000}
          style={{ height: 700 }}
        />
        <Image
          className="block lg:hidden"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/black-locator-3-mobile.png"
          alt="Dealer Locator globe showing global dealer network"
          width={1500}
          height={1500}
          style={{ height: 300 }}
        />
        <div className="relative lg:absolute w-full top-0 px-6 lg:px-0 lg:h-[700px] mt-8 lg:mt-0">
          <div className="max-w-[964px] mx-auto h-full">
            <TwoColumns className="h-full items-center">
              <div>
                <h3 className="project-section-title">
                  Dealer Locator and Dealer Data API
                </h3>
                <div
                  className="section-text"
                  dangerouslySetInnerHTML={{
                    __html: `
                <div>
                <p><strong>Problem</strong></p>
                  <p>Zero’s dealer discovery experience relied on a rigid third-party tool (StoreRocket) that was off-brand, slow to update, and disconnected from our systems. Dealer data lived in Salesforce, but had to be manually copied and pasted into StoreRocket, causing mismatches, stale information, and operational overhead.</p>
                  <br />
                  <p>This system didn’t support:</p>
                  <br />
                  <ul>
                    <li>Real-time dealer updates</li>
                    <li>Dealer-specific CTAs (Demo Ride, Contact, View Inventory)</li>
                    <li>Filtering by dealer type</li>
                    <li>A cohesive brand experience</li>
                  </ul>
                </div>
              `,
                  }}
                />
              </div>

              <div />
            </TwoColumns>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <div
          className="mb-8"
          dangerouslySetInnerHTML={{
            __html: `
            <div>
              <p><strong>Solution</strong></p>
              <p>I designed and built a new Dealer Locator ecosystem centered around a live dealer data API connected directly to HubSpot, our new source of truth.</p>
            </div>
          `,
          }}
        />
        <ThreeColumns>
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <div>
              <p class="semi-bold">1. Real-time Dealer Data API</p>
              <ul>
                <li>Built a secure, token-authenticated Cloudflare Worker API.</li>
                <li>Pulled dealer data from HubSpot in real time.</li>
                <li>Supported dynamic filters for region, dealer type, and product availability.</li>
                <li>Served both the website and our Shopify checkout experience.</li>
              </ul>
            </div>
          `,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <div>
              <p class="semi-bold">2. Custom Dealer Locator (Next.js)</p>
              <ul>
                <li>Mobile-first UI built to match Zero’s branding.</li>
                <li>Auto-detected visitor location to show nearby dealers.</li>
                <li>Map + distance-sorted cards for intuitive browsing.</li>
                <li>Dealer-specific CTAs (Demo Ride request, Contact Dealer, View Inventory)</li>
              </ul>
            </div>
          `,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <div>
              <p class="semi-bold">3. Integrated lead forms</p>
              <ul>
                <li>Dealer Locator forms routed into unified lead pipeline.</li>
                <li>Dealer ID passed automatically, bypassing automated routing and therefore increasing routing accuracy.</li>
                <li>Integrated with rest of CMS for non-technical team to add/remove fields and change labels.</li>
              </ul>
            </div>
          `,
            }}
          />
        </ThreeColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div
            className="mb-8 lg:mb-0"
            dangerouslySetInnerHTML={{
              __html: `
            <div>
              <p><strong>Results</strong></p>
              <p>High-performance API powering <span class="marine-strong">350K+ monthly requests</span>.</p>
              <ul>
                <li>Sub-200ms median response time.</li>
                <li><span class="marine-strong">99.9% uptime</span>, even under heavy load.</li>
                <li>Supports multiple applications without duplication of logic.</li>
              </ul>
              <p>Modern, branded dealer discovery experience</p>
              <ul>
                <li>Aligned with Zero’s new design standards.</li>
                <li>Mobile UX built for the 80% of visitors who browse on phones.</li>
                <li>Clear, high-intent, high-contrast CTAs.</li>
              </ul>
              <p>Measurable improvement in user engagement</p>
              <ul>
                <li>Dealer Locator users view an average of 2.4 pages per user, compared to a 1.5 site-wide.</li>
              </ul>
            </div>
          `,
            }}
          />
          <div className="flex flex-col items-center justify-start">
            <Image
              style={{ boxShadow: "none", objectFit: "contain" }}
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/leads-mock-1.png"
              alt="Dealer Locator on mobile"
              width={500}
              height={500}
            />
            <span className="image-caption">Dealer Locator on mobile</span>
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] px-6 lg:px-0">
        <Image
          style={{ boxShadow: "none", objectFit: "contain" }}
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/leads-mock-2.png"
          alt="Dealer Locator on desktop"
          width={3000}
          height={3000}
        />
        <span className="image-caption">Dealer Locator on desktop</span>
      </div>
    </Page>
  );
}
