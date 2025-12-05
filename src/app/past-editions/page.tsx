"use client";

// Package imports
import Image from "next/image";

// Custom imports
import Page from "~/components/Page/Page";
import BookCallCTA from "~/components/BookCallCTA/BookCallCTA";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";

export default function ZeroWebsiteRebuild() {
  return (
    <Page includeMaxWidth={false} overflowHidden>
      <Hero
        title="Past Editions"
        titleHtml="<div><h1>Past Editions</h1></div>"
        summary="While working as a developer at Zero Motorcycles, I helped solve an urgent sales challenge: older 2024 motorcycle models were sitting unsold across warehouses and dealership floors. These bikes were technically purchasable online, but the buying path was nearly invisible — hidden behind a model-year toggle that very few customers ever used."
        company="Zero Motorcycles"
        link="https://zeromotorcycles.com/"
        portfolio={false}
      />
      <div className="portfolio-sub-hero mb-[96px] relative">
        <Image
          //   src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/ecom_hero_2.jpg"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/past-editions-5-home.jpg"
          alt="Zero Motorcycles SR/F Model in Warehouse"
          width={3000}
          height={3000}
          className="lg:h-[920px] h-[600px] object-cover"
        />
        <div className="lg:h-[600px] h-[750px] bg-linear-to-t from-[rgba(0,0,0,0.8)] lg:from-[rgba(0,0,0,0.8)] to-transparent absolute bottom-0 left-0 z-0 w-full" />
        <div className="absolute w-full bottom-0 px-6 lg:px-0">
          <div className="max-w-[964px] mx-auto mb-[64px] lg:mt-[64px]">
            <h3 className="project-section-title" style={{ color: "white" }}>
              Project Overview
            </h3>
            <br />
            <p style={{ color: "white" }}>
              With no marketing budget and only a few weeks before a major new
              product announcement, we needed a quick and simple solution to
              guide users towards buying previous model year bikes.
            </p>
            <br />
            <p style={{ color: "white" }}>
              We landed on a concept for an eCommerce storefront for previous
              model year bikes called Past Editions. It would be a dedicated
              section of our site for browsing and filtering through our
              selection of models, offering a visually appealing and easy to
              navigate experience that led users directly towards a path to
              purchase.
            </p>
            {/* <TwoColumns>
              <div>
                <h3
                  className="project-section-title"
                  style={{ color: "white" }}
                >
                  Project Overview
                </h3>
              </div>
              <div>
                <p style={{ color: "white" }}>
                  With no marketing budget and only a few weeks before a major
                  new product announcement, we needed a quick and simple
                  solution to guide users towards buying previous model year
                  bikes.
                </p>
                <br />
                <p style={{ color: "white" }}>
                  We landed on a concept for an eCommerce storefront for
                  previous model year bikes called Past Editions. It would be a
                  dedicated section of our site for browsing and filtering
                  through our selection of models, offering a visually appealing
                  and easy to navigate experience that led users directly
                  towards a path to purchase.
                </p>
              </div>
            </TwoColumns> */}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="section-text h-auto flex flex-col justify-center items-start">
            <p>
              <strong>Technical Approach</strong>
            </p>
            <p>
              To keep development efficient, I reused an existing headless
              Shopify setup originally built for a “look-book” style accessories
              experience. This allowed me to create a new shopping flow without
              building new backend systems.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <Image
              style={{
                boxShadow: "none",
                maxHeight: "700px",
                objectFit: "contain",
              }}
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/past-editions-mock-1.png"
              alt="Existing accessories look-book page"
              width={1000}
              height={1000}
            />
            <span className="image-caption">
              Existing accessories look-book page
            </span>
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="flex flex-col items-center justify-center">
            <Image
              style={{
                boxShadow: "none",
                maxHeight: "700px",
                objectFit: "contain",
              }}
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/past-editions-mock-2.png"
              alt="Ekho checkout drawer for Zero Motorcycles"
              width={1000}
              height={1000}
            />
            <span className="image-caption">
              Model page for the SR/S with Past Editions CTA
            </span>
          </div>
          <div className="section-text h-auto flex flex-col justify-center items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <div>
              <p><strong>Key Fearures Included</strong></p>
              <ul>
                <li><span class="marine-strong">A Past Editions landing page:</span>  A clean, grid-style layout where customers could see all older models at a glance.</li>
                <li><span class="marine-strong">Better discoverability:</span> Added Past Editions to the top navigation and placed “Shop Past Editions” CTAs across relevant pages.</li>
                <li><span class="marine-strong">A redesigned sidebar navigation:</span> Allowed users to switch between Accessories and Past Editions seamlessly, giving both sections a more cohesive feel.</li>
                <li><span class="marine-strong">New product detail pages:</span> Each bike received a prominent “Purchase Now” button, key specs, high-quality images and video, and a full specification sheet pulled from the CMS.</li>
              </ul>
              <br />
              <p>All pages were styled to match the brand’s visual system and feel fully native to the rest of the site.</p>
            </div>
          `,
              }}
            />
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="section-text h-auto flex flex-col justify-center items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <div>
              <p><strong>How I built it</strong></p>
              <p>This was delivered as a 4-week MVP, with roughly 2 weeks of hands-on development.</p>
              <br />
              <p>My responsibilities included:</p>
              <ul>
                <li>Scoping a minimal, fast-to-build solution</li>
                <li>Designing the layout and UI patterns</li>
                <li>Developing all new page templates and components</li>
                <li>Integrating Shopify and Ekho checkout flows</li>
                <li>Adding GA4 tracking for views and checkout initiations</li>
                <li>Handling QA and releasing to production</li>
              </ul>
              <br />
              <p>The entire solution was built to be lightweight, flexible, and easy to maintain.</p>
            </div>
          `,
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              className="max-h-[600px]"
              style={{
                boxShadow: "none",
                objectFit: "contain",
              }}
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/past-editions-mock-3.png"
              alt="Homepage for the Past Editions section"
              width={1000}
              height={1000}
            />
            <span className="image-caption">
              Homepage for the Past Editions section
            </span>
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <div>
                <p><strong>Results</strong></p>
                <p>Even without any marketing push, the new storefront quickly gained traction:</p>
                <ul>
                  <li><span class="marine-strong">9 online motorcycle purchase initiations</span> in the first month — well above expectations.</li>
                  <li><span class="marine-strong">6,500+ page views</span> in the first 30 days.</li>
                  <li>Delivered the entire experience in <span class="marine-strong">4 weeks</span>.</li>
                  <li>Became a <span class="marine-strong">Top-10</span> most viewed page type in the U.S.</li>
                  <li>Gave the Sales team a new digital path for moving aging inventory.</li>
                  <li>Demonstrated the power of reusing existing infrastructure for future e-commerce projects</li>
                </ul>
                <br />
                <p>This project showed how impactful a focused design and development effort can be — especially when budgets and timelines are tight.</p>
              </div>
            `,
          }}
        />
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] px-6 lg:px-0">
        <Image
          style={{ boxShadow: "none", objectFit: "contain" }}
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/ecom-mock-3.png"
          alt="Past Editions home page"
          width={3000}
          height={3000}
        />
        <span className="image-caption">Past Editions home page</span>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] px-6 lg:px-0">
        <Image
          style={{ boxShadow: "none", objectFit: "contain" }}
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/ecom-mock-5.png"
          alt="Past Editions product page"
          width={3000}
          height={3000}
        />
        <span className="image-caption">
          Past Editions product page for the 2024 Zero DSR/X
        </span>
      </div>
      <BookCallCTA smallPadding label="Ready to improve online sales?" />
    </Page>
  );
}
