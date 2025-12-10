// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Hero from "~/components/Portfolio/Slices/Hero";
import TwoColumns from "~/components/Portfolio/Slices/TwoColumns";
import Image from "next/image";
import "../Portfolio.css";

export const metadata: Metadata = {
  title: "Case Study | Dash Prototype: Future Interaction Model",
  description: "Dash prototype: future interaction model for Zero Motorcycles.",
  alternates: {
    canonical: "/portfolio/dash-prototype-future-interaction-model",
  },
  openGraph: {
    title: "Case Study | Dash Prototype: Future Interaction Model",
    description:
      "Dash prototype: future interaction model for Zero Motorcycles.",
    url: "/portfolio/dash-prototype-future-interaction-model",
    type: "profile",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Case Study | Dash Prototype: Future Interaction Model",
      },
    ],
  },
  robots: { index: false, follow: true },
};

export default function DashPrototypeFutureInteractionModel() {
  return (
    <Page includeMaxWidth={false}>
      <div />
      <Hero
        title="Dash Prototype: Future Interaction Model"
        titleHtml="<div><h1>Dash Prototype:</h1><h1>Future Interaction Model</h1></div>"
        summary="Led early discovery and definition of Zero’s next-generation
                  motorcycle dash, conducting market research, synthesizing
                  rider needs, and identifying key opportunity areas to inform
                  the product direction. Created user flows, interaction models,
                  and multiple UX concepts aligned to updated hardware
                  constraints and brand guidelines. Built a functional
                  interactive prototype and executed structured usability tests
                  that captured task-completion time and input effort, enabling
                  data-driven comparison of navigation models and informing
                  engineering’s final direction."
        metrics={[
          {
            keyMetric: "19%",
            description:
              "Faster task completion with recommended navigation model",
          },
          {
            keyMetric: "20%",
            description: "Fewer key presses with recommended navigation model",
          },
          {
            keyMetric: "20",
            description: "Participants in controlled usability testing",
          },
          {
            keyMetric: "8",
            description: "Tasks evaluated across both concepts",
          },
        ]}
        company="Zero Motorcycles"
        link="https://zeromotorcycles.com/"
      />

      <div id="first-section" className="portfolio-sub-hero">
        <Image
          className="h-[1100px] lg:h-[1000px]"
          src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/dash-photo-hero.jpg"
          alt="X Line bikes in Utah Desert"
          width={3000}
          height={3000}
        />
        <div className="absolute w-full top-0 h-full">
          <div className="w-full lg:max-w-[964px] lg:mx-auto h-full">
            <TwoColumns className="h-full">
              <div className="items-end justify-start hidden lg:flex">
                <span className="italic text-white block py-8 text-[14px]">
                  Image of 2025 Zero DSR/X Dash
                </span>
              </div>
              <div className="dash-backdrop">
                <h3>Future Dash</h3>
                <br />
                <p>
                  <strong>Problem</strong>
                </p>
                <p>
                  As Zero prepared its next generation of motorcycles, the team
                  saw an opportunity to define a modern, intuitive riding
                  experience. This experience should evolve with new features,
                  updated hardware, and shifting rider expectations.
                </p>
                <br />
                <p>
                  Riders were increasingly expecting more intuitive, modern
                  interaction patterns similar to those found in today’s
                  automotive interfaces. However, no existing motorcycle UX
                  paradigm offered a strong reference point, and the upcoming
                  hardware and switchgear updates introduced new constraints and
                  unknowns.
                </p>
                <br />
                <p>
                  The UX team needed an interaction model that felt intuitive,
                  supported new capabilities, and aligned with real-world riding
                  conditions.
                </p>
              </div>
              <div className="flex items-end h-full justify-start ml-6 block lg:hidden">
                <span className="italic text-white block py-8 text-[14px]">
                  Image of 2025 Zero DSR/X Dash
                </span>
              </div>
            </TwoColumns>
          </div>
        </div>
      </div>
      <div className="relative mb-[24px] lg:mb-[32px] px-6 lg:px-0">
        <div className="w-full max-w-[964px] mx-auto">
          <TwoColumns className="items-center" style={{ marginBottom: "0px" }}>
            <div className="section-text">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <div>
                    <p><strong>Research & Discovery</strong></p>
                    <p>I started the discovery effort with a cross-functional team of UX, Engineering, and Industrial Design to understand the opportunity space and identify similar products on the market.</p>
                    <br />
                    <p>My analysis included modern automotive dashboards, TV and video game menus, mental models, and usability patterns, identifying which concepts translated well and which failed due to posture, motion, or safety considerations.</p>
                  </div>
                `,
                }}
              />
            </div>
            <div className="flex flex-col items-center justify-start">
              <Image
                className="border-[1px] border-[rgba(0,0,0,0.1)]"
                src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/dash-research.png"
                alt="Early Research on automotive dash systems"
                width={500}
                height={500}
              />
            </div>
          </TwoColumns>
        </div>
      </div>
      <div className="relative mb-[64px] lg:mb-[96px] px-6 lg:px-0">
        <div className="w-full max-w-[964px] mx-auto">
          <TwoColumns className="items-center swap-mobile-order">
            <div className="flex flex-col items-center justify-start">
              <Image
                className="border-[1px] border-[rgba(0,0,0,0.1)]"
                src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/dash-wireframe.png"
                alt="Dash wireframe concepts"
                width={500}
                height={500}
              />
              <span className="image-caption">
                Early Dash Wireframes and Flows
              </span>
            </div>
            <div className="section-text">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <div>
                    <p>Based on these insights, I created multiple <span class="marine-strong">wireframe concepts and flows</span> that explored different mental models while incorporating Zero’s brand guidelines and the functional constraints of updated hardware and switchgear.</p>
                  </div>
                `,
                }}
              />
            </div>
          </TwoColumns>
        </div>
      </div>
      <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 mb-[24px] lg:mb-[32px]">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <div>
                <p class="mb-4">These concepts narrowed into three potential approaches, with two selected for usability testing:</p>
                <ul>
                  <li><span class="font-bold text-[#2dd267]">Design A</span>: a non-traditional automotive app navigation model optimized for speed and a helpful high-level home view.</li>
                  <li><span class="font-bold text-[#a972e4]">Design B</span>: a familiar, legacy vehicle interface model with category tabs on the left.</li>
                  <li><span class="marine-strong">Design C</span>: a more experimental pattern later ruled out due to usability concerns.</li>
                </ul>
              </div>
            `,
          }}
        />
      </div>
      <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 mb-[24px] lg:mb-[32px]">
        <TwoColumns className="items-center">
          <div>
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/dash-design-a.png"
              alt="Design A"
              width={500}
              height={500}
            />
            <span className="image-caption">Design A</span>
          </div>
          <div>
            <Image
              className="border-[1px] border-[rgba(0,0,0,0.1)]"
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/dash-design-a-hierarchy.png"
              alt="Design B"
              width={500}
              height={500}
            />
            <span className="image-caption">Design A Hierarchy Map</span>
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 mb-[64px] lg:mb-[96px]">
        <TwoColumns className="items-center">
          <div>
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/dash-design-b.png"
              alt="Design B"
              width={500}
              height={500}
            />
            <span className="image-caption">Design B</span>
          </div>
          <div>
            <Image
              className="border-[1px] border-[rgba(0,0,0,0.1)]"
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/dash-design-b-hierarchy.png"
              alt="Design B"
              width={500}
              height={500}
            />
            <span className="image-caption">Design B Hierarchy Map</span>
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 mb-[64px] lg:mb-[96px]">
        <p>
          <strong>Prototyping</strong>
        </p>
        <p>
          To validate the two strongest concepts, I developed a browser-based
          interactive prototype controlled via a physical handheld controller,
          simulating real-world physical input without revealing future hardware
          layouts.
        </p>
        <br />
        <p>
          The prototype included{" "}
          <span className="marine-strong">8 structured tasks</span> of
          increasing complexity, logged timestamps and key-press counts, and
          randomized task order to reduce bias. All times and button presses
          were tracked per task in the app.
        </p>
        <br />
        <p>
          I ran a controlled study with{" "}
          <span className="marine-strong">20 participants</span>: a mix of
          riders, non-riders, internal employees, contractors, and both left-
          and right-handed users.
        </p>
      </div>
      <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 mb-[64px] lg:mb-[96px]">
        <TwoColumns className="items-center">
          <div className="flex flex-col gap-[64px]">
            <div>
              <p>
                <strong>Results</strong>
              </p>
              <ul>
                <li>
                  Design A completed tasks{" "}
                  <span className="marine-strong">19% faster</span> than Design
                  B.
                </li>
                <li>
                  Design A required{" "}
                  <span className="marine-strong">20% fewer key presses</span>{" "}
                  on average.
                </li>
                <li>
                  Participants preferred Design A after a brief adjustment
                  period.
                </li>
                <li>
                  Design B’s home view provided convenience but did not offset
                  slower navigation.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[32px]">
              <p>
                Design A received much more positive feedback after the
                experiment was completed:
              </p>
              <div className="flex flex-col gap-[32px]">
                <div className="quote-block">
                  <p>
                    “I kept getting frustrated with the one [Design B].
                    [Interactivity Detail] makes a HUGE difference.”
                  </p>
                </div>
                <div className="quote-block">
                  <p>
                    “The second one I did was more appealing to me because of
                    the ability to use the [feature] function to go back from
                    anywhere. This seemed more intuitive to me, and I didn’t
                    like the fact that I had to go up to the back button on the
                    first one.”
                  </p>
                </div>
                <div className="quote-block">
                  <p>
                    “The main thing I noticed was not knowing how to go back in
                    ver B. Ver A had an icon telling you which button was back.
                    For that reason I liked B more.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-8">
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/time-per-task.png"
              alt="Graph of Time Per Task"
              width={500}
              height={500}
            />
            <Image
              src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/button-presses-per-task.png"
              alt="Graph of Time Per Task"
              width={500}
              height={500}
            />
          </div>
        </TwoColumns>
      </div>
      <div className="w-full max-w-[964px] mx-auto px-6 lg:px-0 mb-[64px] lg:mb-[96px]">
        <p>
          <strong>Impact</strong>
        </p>
        <p>
          My work established the foundational product direction for Zero’s next
          generation dash by delivering validated navigation models, a
          structured testing framework, and the first quantitative comparison of
          user performance across concepts. This early phase created alignment
          across UX, Engineering, and Product before full interface design
          began.
        </p>
        <br />
        <p>
          As the project transitioned to a dedicated UX designer, I delivered a
          complete research package that included usability criteria, concept
          rationale, prototype assets, test results, and a clear recommendation
          backed by data. This ensured a seamless handoff and allowed the design
          team to extend the work with confidence, using the validated model as
          the baseline for future iterations.
        </p>
      </div>
    </Page>
  );
}
