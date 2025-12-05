"use client";

// Package imports

// Custom imports
import { Header, TextAndImageBlock } from "~/components/Page";
import BookCallCTA from "~/components/BookCallCTA/BookCallCTA";
import Skills from "~/components/Page/Skills";
import Page from "~/components/Page/Page";
import ImageWithCaption from "~/components/Page/ImageWithCaption";

export default function AdventureKitty() {
  return (
    <Page>
      <Header
        title="Adventure Kitty"
        href="https://adventurekittyshop.com/"
        src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/AK_Hero-w-logo.png"
        imgStyles={{ scale: "1.1" }}
      />
      <TextAndImageBlock
        title="Background"
        text={`
            <p>
              Adventure Kitty, a brand focused on making high-quality cat accessories for the outdoors, came to me with a website that wasn’t living up to its potential. The navigation was confusing, the brand identity wasn’t coming through strongly, and the mobile experience made browsing and shopping frustrating. These issues left both the customer journey and the brand story underdeveloped.
            </p>
            <br>

            <div class="overflow-hidden mb-4"><h3 class="text-and-img--flip">Objectives</h3></div>

            <p>Our project goals:</p>
            <ul>
              <li>Reinforce brand identity through design and storytelling</li>
              <li>Create a more intuitive navigation and improve product discoverability</li>
              <li>Deliver a mobile-first experience</li>
              <li>Provide the client with analytics tools for tracking and insights</li>
            </ul>

          `}
        images={[
          "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/AK_1.png",
          "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/AK_2.png",
          "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/AK_3.png",
        ]}
      />
      <ImageWithCaption
        src="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/AK_visionboard.png"
        alt="Adventure Kitty Vision Board"
        caption="Adventure Kitty Vision Board. Trying to achieve a slighly more retro-outdoorsy aesthetic, while still playful and fun to match the brand personality (cats!)"
        imgStyles={{position: "relative" }}
      />
      <TextAndImageBlock
        title="Research & Strategy"
        text={`
            <p>
              The existing feel felt uninspired and lacked a storytelling that their social media already had. I researched other outdoors and pet accessory brands to see what worked in terms of color, typography, and page layout. From there, I created a variety of color palettes, typography patterns, and a vision board to explore a more bold, playful, and “outdoorsy” side to the brand that wasn’t really coming through enough.
            </p>
            <br>

            <div class="overflow-hidden mb-4"><h3 class="text-and-img--flip">Design & Development Process</h3></div>

            <p>With the brand strategy in place, I moved to the re-design:</p>
            <ul>
              <li><strong>Wireframes:</strong> Organized the hompage to prioritize key products and storytelling elements.</li>
              <li><strong>Mobile-first approach:</strong> Optimized the layouts for readbility on mobile devices, especially for the "testimonials" section.</li>
              <li><strong>Custom components:</strong> Created a playful marquee, carousel focusing on the development of the Meowcat harness, and an improved reviews section.</li>
              <li><strong>Product discovery:</strong> Created product grids on homepage and product pages.</li>
            </ul>

          `}
        images={[
          "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/AK_5.png",
        ]}
        swap
      />
      <TextAndImageBlock
        title="Implementation & Tools"
        text={`
            <p>On the technical side, I integrated Google Analytics and Google Search Console so Adventure Kitty could monitor traffic and SEO performance, especially with the copy changes made during the redesign.</p>
          `}
      />
      <TextAndImageBlock
        title="Outcomes"
        text={`
            <p>The redesigned website gave Adventure Kitty:</p>
            <ul>
              <li>A stronger, more cohesive brand identity.</li>
              <li>Clearer storytelling and improved product discovery.</li>
              <li>Significantly better mobile experience.</li>
              <li>Data visibility through analytics integrations.</li>
            </ul>
          `}
      />
      <Skills
        skills={[
          "Shopify",
          "Google Analytics & Search Console",
          "Figma",
          "SEO",
        ]}
        id="container-tools"
        cn="tool"
      />
      {/* <Involved service="E-commerce Development" link="/services#e-commerce" /> */}
      <BookCallCTA
        smallPadding
        label="Want to launch or improve your online store?"
      />
    </Page>
  );
}
