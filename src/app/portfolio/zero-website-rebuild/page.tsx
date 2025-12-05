// Package imports
import type { Metadata } from "next";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

// Custom imports
import Page from "~/components/Page/Page";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";
import Image from "next/image";
import AutoPlayVideo from "~/components/AutoPlayVideo/AutoPlayVideo";
import "../Portfolio.css";

export const metadata: Metadata = {
  title: "Case Study | Zero Website Rebuild",
  description: "Next.js website rebuild for Zero Motorcycles.",
  alternates: {
    canonical: "/portfolio/zero-website-rebuild",
  },
  openGraph: {
    title: "Case Study | Zero Website Rebuild",
    description: "Next.js website rebuild for Zero Motorcycles.",
    url: "/portfolio/zero-website-rebuild",
    type: "profile",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Case Study | Zero Website Rebuild",
      },
    ],
  },
  robots: { index: false, follow: true },
};

export default function ZeroWebsiteRebuild() {
  return (
    <Page includeMaxWidth={false}>
      <Hero
        title="Full Website Rebuild"
        titleHtml="<div><h1>Full Website</h1><h1>Rebuild</h1></div>"
        summary="In late 2022, Zero Motorcycles was ready for a digital refresh. The old website was several years old, riddled with tech debt, and had an overall look that no longer matched the direction of the growing brand. With the launch of brand new models, evolving marketing strategies, and a push to better reflect their position as a premium, industry-leading electric motorcycle company, it was time for a change."
        company="Zero Motorcycles"
        link="https://zeromotorcycles.com/"
      />
      <div id="first-section" className="portfolio-sub-hero">
        <div className="flex flex-col items-center justify-center bg-[#454f5e]">
          <AutoPlayVideo
            vimeoId="1143704287"
            triggerOnView={true}
            className="h-full w-[964px] min-h-[520px]"
          />
        </div>
      </div>

      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="section-text h-auto flex flex-col justify-center items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <div>
                  <p><strong>Background</strong></p>
                  <p>The old website was built on Gatsby and connected to a headless CMS (Prismic) for page content, configurations, and images. The site relied on deprecated tools requiring frequent band-aid fixes. It was slow to build as the content on the site grew; it reached <span class="marine-strong">20 minutes</span> in the worst case scenarios. It failed builds often for various reasons, leading to uncertainty on big launch days when timing was of the essence.</p>
                </div>
              `,
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            <Image
              style={{
                boxShadow: "none",
                maxHeight: "500px",
                objectFit: "contain",
              }}
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/rebuild-mock-1.png"
              alt="Ekho checkout drawer for Zero Motorcycles"
              width={1000}
              height={1000}
            />
            <span className="image-caption">Old website homepage</span>
          </div>
        </TwoColumns>
      </div>

      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <p>
          The plan was to{" "}
          <span className="marine-strong">update our stack to Next.js</span>.
          Gatsby was a Static Site Generator, meaning the entire site was
          prebuilt at build time. This was the reason for higher build times.
          Given the high build times, we wanted control over which pages could
          be server-side rendered and which to use incremental static
          regeneration (ISR) - providing the speed of static sites with the
          freshness of server-rendered sites.{" "}
        </p>
      </div>

      <div className="w-full max-w-[964px] mx-auto mb-[32px] lg:mb-[32px] px-6 lg:px-0">
        <div className="relative flex flex-col items-center justify-center">
          <AutoPlayVideo
            vimeoId="1143710182"
            triggerOnView={true}
            className="h-full w-[964px] min-h-[520px]"
          />
          <span className="image-caption">
            Homepage {'"Bike Slider"'} component before
          </span>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <div className="relative flex flex-col items-center justify-center">
          <AutoPlayVideo
            vimeoId="1143710209"
            triggerOnView={true}
            className="h-full w-[964px] min-h-[520px]"
          />
          <span className="image-caption">
            Homepage Bike Slider component after
          </span>
        </div>
      </div>

      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="section-text h-auto flex flex-col justify-center items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <div>
                  <p>The redesign project kicked off in October 2022, just after the launch of the new Zero DSR/X and a new e-commerce site for parts & accessories. I worked with Zero’s digital marketing team and Canvas Creative, a design and development agency, to bring the new vision to life. Canvas led the design phase, while development was a shared effort between myself and two agency developers.</p>
                </div>
              `,
              }}
            />
          </div>
          <div className="section-text h-auto flex flex-col justify-center items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                <div>
                  <p>We overhauled core parts of the site including:</p>
                  <ul>
                    <li>The <span class="marine-strong">homepage</span> and <span class="marine-strong">model pages</span>.</li>
                    <li>A brand-new <span class="marine-strong">Ride Electric</span> section, meant to boost SEO by providing evergreen content.</li>
                    <li>A streamlined, more intuitive <span class="marine-strong">navigation</span> component.</li>
                    <li>A <span class="marine-strong">model comparison</span> page for mid-funnel users interested in comparing features.</li>
                  </ul>
                </div>
              `,
              }}
            />
          </div>
        </TwoColumns>
      </div>

      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <div className="flex flex-col items-center justify-center">
          <Image
            style={{
              boxShadow: "none",
              maxHeight: "500px",
              objectFit: "contain",
            }}
            src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/rebuild-mock-3.png"
            alt="Zero DSR/X model page"
            width={1000}
            height={1000}
          />
          <span className="image-caption">Zero DSR/X model page</span>
        </div>
      </div>

      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="flex flex-col items-center justify-start">
            <Image
              style={{
                boxShadow: "none",
                maxHeight: "500px",
                objectFit: "contain",
              }}
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/rebuild-mock-4.png"
              alt="Ekho checkout drawer for Zero Motorcycles"
              width={1000}
              height={1000}
            />
            <span className="image-caption">Model comparison page</span>
          </div>
          <div className="section-text h-auto flex flex-col justify-center items-center">
            <p>
              Before development, I was responsible for{" "}
              <span className="marine-strong">scoping</span> what needed to be
              included in the new site, developing a{" "}
              <span className="marine-strong">progressive roadmap</span>, and
              creating a <span className="marine-strong">project timeline</span>{" "}
              from kick-off until deployment. During the development phase, I
              held bi-weekly standup calls with the Canvas Creative team to
              track progress and discuss risks and blockers. From each stand-up
              call, we would delegate tasks in the{" "}
              <span className="marine-strong">development backlog</span> between
              each other.
            </p>
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <TwoColumns>
          <div className="section-text h-auto flex flex-col justify-center items-center">
            <p>
              Many parts of the website were preserved, such as the e-commerce
              site, footer, dealer locator, standard/default marketing page
              types, and several useful components. Other parts were redeveloped
              for higher re-usability throughout the site.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <Image
              style={{
                boxShadow: "none",
                maxHeight: "500px",
                objectFit: "contain",
              }}
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/rebuild-mock-5.png"
              alt="Ekho checkout drawer for Zero Motorcycles"
              width={1000}
              height={1000}
            />
            <span className="image-caption">Accessories e-commerce site</span>
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <div
          dangerouslySetInnerHTML={{
            __html: `
                <div>
                  <p><strong>Results</strong></p>
                  <ul>
                    <li><span class="marine-strong">80% faster build times</span> on average compared to the Gatsby site.</li>
                    <li>The final site earned an <span class="marine-strong">Honorable Mention from Awwwards</span> and a <span class="marine-strong">7.74 judge’s score</span> on CSS Design Awards.</li>
                    <li>New content on the site for SEO value.</li>
                    <li>More reusable components in the codebase, leading to a higher level of brand consistency.</li>
                    <li>Still in use today - 3 years later - with new features, sections, and pages being created frequently.</li>
                  </ul>
                </div>
              `,
          }}
        />
      </div>
      <div className="w-full max-w-[964px] mx-auto mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <div className="flex flex-col items-center justify-center">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/nav-before.png"
                srcSet="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/nav-before.png"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/nav-after.png"
                srcSet="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/nav-after.png"
                alt="Image two"
              />
            }
          />
        </div>
        <span className="image-caption">Navigation before and after</span>
      </div>
    </Page>
  );
}
