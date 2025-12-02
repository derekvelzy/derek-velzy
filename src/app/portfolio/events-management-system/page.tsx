// Package imports
import { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";
import Image from "next/image";
import "../Portfolio.css";

export const metadata: Metadata = {
  title: "Case Study | Events Management System",
  description:
    "Events management system for Zero Motorcycles.",
  alternates: {
    canonical: "/portfolio/events-management-system",
  },
  openGraph: {
    title: "Case Study | Events Management System",
    description:
      "Events management system for Zero Motorcycles.",
    url: "/portfolio/events-management-system",
    type: "profile",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Case Study | Events Management System",
      },
    ],
  },
  robots: { index: false, follow: true },
};

export default function EventsManagementSystem() {
  return (
    <Page includeMaxWidth={false}>
      <Hero
        title="Events Management System"
        titleHtml="<div><h1>Events Management</h1><h1>System</h1></div>"
        summary="I created a centralized events platform that streamlined how Zero managed dealer demo events and customer registrations. What began as a fix for a brittle Google Sheets setup evolved into an internal admin console, a self-serve dealer request form, and a redesigned events discovery page with an integrated map. The system established the foundation for a cleaner, more reliable events pipeline that has powered global demo tours for several years."
        metrics={[
          {
            keyMetric: "5 → 2",
            description: "Steps reduced in the event-publishing workflow",
          },
          {
            keyMetric: "3,400+",
            description:
              "Total event registrations processed through the system",
          },
          {
            keyMetric: "40",
            description: "Events hosted globally at peak usage",
          },
          {
            keyMetric: "Same-day",
            description: "Updates instead of multi-day delays",
          },
        ]}
        company="Zero Motorcycles"
        link="https://zeromotorcycles.com/"
      />
      <div id="first-section" className="portfolio-sub-hero text-dark-desktop">
        <Image
          className="h-[700px] lg:h-[1100px] brightness-[1.1]"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/events-hero-2.jpg"
          alt="Zero Motorcycles Event with Demo Rides"
          width={5000}
          height={5000}
        />
        <div className="lg:hidden absolute top-0 left-0 w-full h-[75%] bg-gradient-to-t from-transparent to-[rgba(22,28,32,0.8)]" />
        <div className="absolute w-full top-0 py-[1rem] lg:py-[4rem] h-full">
          <div className="w-full p-6 lg:p-0 lg:max-w-[964px] lg:mx-auto h-full">
            <TwoColumns className="h-full">
              <h3 className="project-section-title">
                Events at Zero Motorcycles
              </h3>
              <div
                className="section-text"
                dangerouslySetInnerHTML={{
                  __html: `
                <div>
                  <p><strong>Problem</strong></p>
                  <p>Events were managed through a shared Google Sheet that powered the events page via the Google Sheets API. This setup was brittle: missing rows, mis-typed cells, or accidental deletions broke the site entirely. Dealerships had to email customer service or the Events Manager directly to request new events, leading to long email threads, manual entry, and no visibility into attendee turnout. The UX on the public page was also minimal — a list of expanding buttons — and provided no easy way for dealers or customers to browse events or register.</p>
                </div>
              `,
                }}
              />
            </TwoColumns>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0">
        <p>
          <strong>Solution</strong>
        </p>
      </div>
      <div className="relative w-full lg:max-w-[95%] mx-auto flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-center mb-[64px] lg:mb-[96px]">
        <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 lg:h-[400px]">
          <TwoColumns style={{ marginBottom: 0, height: "100%" }}>
            <div
              className="flex items-center h-full"
              dangerouslySetInnerHTML={{
                __html: `
              <div>
                <p class="semi-bold">1. Internal Admin Tool (Event Creation & Management)</p>
                <p>I built an authenticated internal web app (Next.js + Firebase Auth) where the Events Manager could add, edit, or delete events through a clean, type-safe interface. This replaced the fragile Google Sheet with a structured Firebase collection and eliminated accidental data corruption.</p>
              </div>
          `,
              }}
            />
            <div />
          </TwoColumns>
        </div>
        <div className="relative w-full lg:w-[50%] lg:absolute lg:left-[calc(50%+16px)] px-6 lg:px-0">
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/events-solution-1.png"
            alt="Events admin tool"
            width={1000}
            height={1000}
            className="max-h-[400px] object-contain"
            style={{ boxShadow: "none", objectPosition: "left" }}
          />
          <span className="image-caption">Events admin internal tool</span>
        </div>
      </div>
      <div className="relative w-full lg:max-w-[95%] mx-auto flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-center mb-[64px] lg:mb-[96px]">
        <div className="relative w-full lg:w-[50%] lg:absolute lg:right-[calc(50%+16px)] px-6 lg:px-0">
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/events-solution-2.png"
            alt="Section of dealer event request form"
            width={1000}
            height={1000}
            className="max-h-[400px] object-contain"
            style={{ boxShadow: "none", objectPosition: "right" }}
          />
          <span className="image-caption">
            Section of dealer event request form
          </span>
        </div>
        <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 lg:h-[400px]">
          <TwoColumns style={{ marginBottom: 0, height: "100%" }}>
            <div />
            <div
              className="flex items-center h-full"
              dangerouslySetInnerHTML={{
                __html: `
              <div>
                <p class="semi-bold">2. Dealer Event Request Form</p>
                <p>Dealers could now submit event requests directly through a non-indexed form on the website. Submissions mapped 1:1 to internal event fields and included a Mapbox address picker for consistent, normalized location data. Internal users could approve or reject requests before they appeared publicly.</p>
              </div>
          `,
              }}
            />
          </TwoColumns>
        </div>
      </div>
      <div className="relative w-full lg:max-w-[95%] mx-auto flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-center mb-[64px] lg:mb-[96px]">
        <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 lg:h-[400px]">
          <TwoColumns style={{ marginBottom: 0, height: "100%" }}>
            <div
              className="flex items-center h-full"
              dangerouslySetInnerHTML={{
                __html: `
              <div>
                <p class="semi-bold">3. Re-designed public Events page</p>
                <p>I replaced the old list-and-dropdown UI with a modern Events hub:</p>
                <ul>
                  <li>Event cards showing date, title, and location.</li>
                  <li>An interactive Mapbox map synced to the list.</li>
                  <li>Filters for region, country, date, or distance.</li>
                  <li>Clickable detail views with full event info and registration.</li>
                </ul>
                <p>This turned the events page from a static list into a browsable discovery experience.</p>
              </div>
          `,
              }}
            />
            <div />
          </TwoColumns>
        </div>
        <div className="relative w-full lg:w-[50%] lg:absolute lg:left-[calc(50%+16px)] px-6 lg:px-0">
          <Image
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/events-solution-3.png"
            alt="Re-designed public Events page"
            width={1000}
            height={1000}
            className="max-h-[400px] object-contain"
            style={{ boxShadow: "none", objectPosition: "left" }}
          />
          <span className="image-caption">Re-designed public Events page</span>
        </div>
      </div>

      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 lg:gap-0">
          <div className="flex flex-col items-center justify-end">
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/events-solution-5.png"
              alt="Event registration form"
              width={1000}
              height={1000}
              className="max-w-[350px] object-contain"
              style={{ boxShadow: "none", objectPosition: "left" }}
            />
            <span className="image-caption">Event registration form</span>
          </div>
          <div
            className="flex items-center h-full"
            dangerouslySetInnerHTML={{
              __html: `
              <div>
                <p class="semi-bold">4. Event Registration System</p>
                <p>Each event had its own registration form, stored in a separate Firebase collection. Internal users could download a CSV of registrants to share with hosts, giving them visibility into expected turnout for the first time.</p>
              </div>
          `,
            }}
          />
        </TwoColumns>
      </div>
      <div className="portfolio-sub-hero text-dark-desktop">
        <Image
          className="h-[900px] lg:h-[1100px]"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/events-final-img.jpg"
          alt="Zero Motorcycles Touratech Event in Seattle, Washington"
          width={5000}
          height={5000}
        />
        <div className="lg:hidden absolute top-0 left-0 w-full h-[75%] bg-gradient-to-t from-transparent to-[rgba(22,28,32,0.8)]" />
        <div className="absolute w-full top-0 py-[1rem] lg:py-[4rem] h-full">
          <div className="w-full p-6 lg:p-0 lg:max-w-[964px] lg:mx-auto h-full">
            <div
              className="section-text"
              dangerouslySetInnerHTML={{
                __html: `
                <div>
                  <p><strong>Impact</strong></p>
                  <ul>
                    <li>Cut total workflow steps from <span class="marine-strong">5 → 2</span>, removing email and manual data entry</li>
                    <li>Reduced publishing time from days to <span class="marine-strong">same-day updates</span></li>
                    <li>Improved data integrity thanks to <span class="marine-strong">type-safe fields</span> and <span class="marine-strong">structured storage</span>.</li>
                    <li>Enabled dealers to self-serve event requests, reducing back-and-forth.</li>
                    <li>Provided visibility into attendee turnout with <span class="marine-strong">3,400+ registrations</span> captured.</li>
                    <li>Still in use <span class="marine-strong">2+ years</span> later, requiring minimal maintenance.</li>
                  </ul>
                </div>
              `,
              }}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
