// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Header from "~/components/Blog/Sections/Header";
import ImageWithCaption from "~/components/Blog/Sections/ImageWithCaption";
import Paragraph from "~/components/Blog/Sections/Paragraph";
import BlogContainer from "~/components/Blog/Sections/BlogContainer";
import Divider from "~/components/Blog/Sections/Divider";

export const metadata: Metadata = {
  title: "5 Things You Can Do This Afternoon to Make Your Website Accessible",
  description:
    "Keyboard-only navigation, screen readers, alt text & ARIA, contrast, and tappable targets—practical steps to improve WCAG accessibility fast.",
  keywords: [
    "web accessibility",
    "WCAG",
    "ADA compliance",
    "keyboard navigation",
    "screen reader",
    "alt text",
    "ARIA labels",
    "contrast ratio",
    "target size",
  ],
  alternates: { canonical: "/articles/accessible-this-afternoon" },
  openGraph: {
    title: "5 Things You Can Do This Afternoon to Make Your Website Accessible",
    description:
      "Keyboard-only navigation, screen readers, alt text & ARIA, contrast, and tappable targets—practical steps to improve WCAG accessibility fast.",
    url: "/articles/accessible-this-afternoon",
    siteName: "Sites by Velzy",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Sites by Velzy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles — Web Design, SEO, Shopify & Analytics",
    description:
      "Guides and tutorials by Derek Velzy on web dev, SEO, Shopify, analytics, and accessibility.",
  },
  robots: { index: true, follow: true },
};

const blogInfo = {
  title: "5 Things You Can Do This Afternoon to Make Your Website Accessible",
  description:
    "If you grew up skateboarding or riding your scooter around the neighborhood, you've probably felt the frustration of...",
  date: "Sept 8, 2025",
  image:
    "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/Bart_tactile_paving.jpg",
  href: "https://medium.com/@dmvelzy/5-things-you-can-do-this-afternoon-to-make-your-website-accessible-6d8a989a1875",
};

export default function AccessibleThisAfternoon() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "5 Quick Accessibility Fixes for Your Website",
    description:
      "Keyboard-only navigation, screen readers, alt text & ARIA, contrast, and tappable targets—practical steps to improve WCAG accessibility fast.",
    datePublished: "2025-09-24T08:00:00Z", // set actual
    dateModified: "2025-09-24T08:00:00Z", // update on edits
    author: [{ "@type": "Person", name: "Derek Velzy" }],
    publisher: {
      "@type": "Organization",
      name: "Sites by Velzy",
      logo: {
        "@type": "ImageObject",
        url: "https://sitesbyvelzy.com/favicon.png",
      },
    },
    image: ["https://sitesbyvelzy.com/favicon.png"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://sitesbyvelzy.com/articles/web-accessibility-quick-fixes",
    },
    articleSection: ["Accessibility", "UX", "Front-End"],
    keywords: [
      "web accessibility",
      "WCAG",
      "keyboard navigation",
      "screen reader",
      "alt text",
      "ARIA",
      "contrast ratio",
      "target size",
    ],
  };

  return (
    <Page>
      <BlogContainer jsonLd={jsonLd}>
        <Header
          text={blogInfo.title}
          date={blogInfo.date}
          href={blogInfo.href}
        />
        <ImageWithCaption
          imageSrc={blogInfo.image}
          caption="Tactile paving in a Bart station"
        />
        <Paragraph text="If you grew up skateboarding or riding your scooter around the neighborhood, you’ve probably felt the frustration of having to pick up your board at an intersection — or risk flying off when the curbside bumps abruptly stop your wheels. What you might not pay as much attention to are how the sidewalks are wide enough for you and your buddy to skate on them side-by-side. Those little bumps at intersection curbs, known as tactile paving, are there for a reason. For people who are blind or visually impaired, they’re a game-changer. They signal that a hazardous zone is near — such as a street, vehicle loading area, or the edge of a train platform." />
        <Paragraph text="Accessibility in public spaces often goes unnoticed by those who don’t rely on it. But for many people, it’s the difference between able to fully participate in society or being excluded. Features like curb ramps, wide sidewalks, accessible parking spaces, ramps, and elevators are just a few examples of accessibility in construction and architecture. This can be traced back to the Americans with Disabilities Act (ADA) first signed into law in 1990. These requirements ensure that public spaces work for everyone. But now that so much of our lives are online, shouldn’t the digital world — and your website design — be equally accessible? Following basic web accessibility guidelines helps ensure that it is." />
        <Paragraph text="Web accessibility is an often overlooked practice or afterthought when building a website. I’ve been guilty of this myself. With time and budget constraints, accessibility can seem optional or overly complex to developers or the project managers and key stakeholders that want to see a finished product ASAP. But just like with buildings, businesses can face legal risks if their websites are not accessible under the ADA. These ADA website compliance lawsuits such as Domino’s, Walmart, Target, Netflix, and many more have all faced lawsuits for ADA violations. Going beyond compliance, it’s also a matter of reach and impact. The World Health Organization estimates that about 16% of people on earth live with some form of disability. Disabilities including vision, hearing, motor, or cognitive differences can make accessing the web more difficult." />
        <Paragraph text="So, let’s take a little time this afternoon to widen the usability of your website overnight. Here are 5 simple, high-impact improvements you can make right now." />
        <h4>1: Check Your Site with Keyboard-Only Navigation</h4>
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/keyboard.jpeg"
          caption="Mechanical keyboard"
          captionHidden
        />
        <Paragraph text="Put your mouse aside and attempt to navigate your site by only using Tab, Shift+Tab, Enter, and Arrow keys. Are you able to traverse through your site in a clear, logical way? Do the buttons, links, and form fields appear differently when they are focused?" />
        <Paragraph text="Think of how you might use a Smart TV remote — you don’t use a mouse, so the interface must clearly highlight where you are. For people with motor and visual disabilities, keyboard navigation is the primary way they interact with the web, making it a core part of WCAG accessibility testing." />
        <Paragraph text="If you can’t tell where you are on your site or it starts to fall apart, that could indicate that it’s time for some HTML restructuring." />
        <h4>2: Download a Screen Reader and Try It</h4>
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/headphones.jpeg"
          caption="Headphones"
          captionHidden
        />

        <Paragraph text="This is a highly overlooked website accessibility checklist item. Macs have a built-in screen reader called VoiceOver, which you can enable in System Settings > Accessibility > VoiceOver > On. Windows PCs also have a pre-installed screen reader called Narrator, but the 2 industry-standard screen readers for PC are NVDA (NonVisual Desktop Access) and JAWS (Job Access With Speech)." />
        <Paragraph text="When I worked on Visa’s Design System team, I used all three and found they each had quirks. Screen readers allow people who are blind or have low vision to understand where they’re focused on a page and what elements do." />
        <Paragraph text="For an accessible link on a website, a screen reader would read out something like “Pricing, Link, View our pricing plans”, which would tell the user where they are, what the element is, and what its purpose is." />

        <h4>3: Add Alt Tags ARIA Labels</h4>
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/ariatag.jpeg"
          caption="Graphic of an Alt tag"
          captionHidden
        />
        <h5>Alt Tags</h5>
        <Paragraph text="Images on the web are HTML elements, just like titles (<h1>), links (<a>), or paragraphs (<p>). The simplest, bare-bones image could be written like this:" />
        <Paragraph text="<img src=“dog.jpg” />" />
        <Paragraph text="But without a description, screen readers won’t communicate what’s being shown. All images need to include at least 2 attributes: src and alt. The src attribute specifies a path to the image, where the alt attribute shares to a screen reader what the image is:" />
        <Paragraph text="<img src=“dog.jpg” alt=“Golden retriever running after a tennis ball” />" />
        <h5>ARIA Labels</h5>
        <Paragraph text="If you found the screen reader test giving confusing results, you may need to add ARIA (Accessible Rich Internet Applications) attributes in the HTML as well. There are several aria attributes we could use in an application to give it top-notch accessibility, but I will focus on 3:" />
        <Paragraph text="1. aria-label: Adds a text label for screen readers when visible text isn’t clear:" />
        <Paragraph text="<button aria-label=“Close menu”> <span class=”x-close-icon” /> <button" />
        <Paragraph text="This would be an HTML element for a button where there is no text inside, but instead an “X” icon. The aria-label of “Close menu” is what is read aloud on the screen reader." />
        <Paragraph text="2. aria-hidden: Hides decorative elements from screen readers so they don’t clutter the output:" />
        <Paragraph text="<span class=“bell-icon” aria-hidden=“true” > <svg /> </span>" />
        <Paragraph text="3. aria-expanded: Indicates whether dropdowns, accordions, or modals are open or closed. This is a dynamic attribute, which switches between true and false. An example would be a button that expands a drawer in a navigation component:" />
        <Paragraph text="<nav id=“main-nav”> <button aria-expanded=“true” aria-controls=“main-nav”>Accessories</button> </nav>" />
        <h4>4: Make Sure Your Contrast Works</h4>
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/contrast.jpeg"
          caption="Contrast circles"
          captionHidden
        />
        <Paragraph text="Good contrast improves readability for everyone, especially people who are colorblind or have low vision." />
        <Paragraph text="Contrast is measured as a ratio: black-on-black or white-on-white would be 1:1, which is the lowest and most unreadable contrast. While black-on-white is 21:1 — the maximum contrast (though not always the most comfortable for readability). According to WCAG (Web Content Accessibility Guidelines), we should stick to at least a 4.5:1 contrast ratio." />
        <Paragraph text="That gives a wide range of ratios to still be creative with while still being accessible. There are many free browser extensions that will check your site’s contrast." />
        <h4>5: Give Buttons Breathing Room</h4>
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/buttons_a11y.jpeg"
          caption="Example of spaced-out buttons"
          captionHidden
        />
        <Paragraph text="Clickable elements should be large enough and spaced far enough apart to avoid frustration. This is especially important for people with limited dexterity or motor impairments, but also improves usability for everyone. Nobody enjoys “fat-fingering” the wrong button on a mobile site." />
        <Paragraph text="WCAG requires a link or button to be at least 24 by 24 pixels to be fully accessible. Exceptions can be made if the link/button has enough spacing around it." />
        <Divider />
        <h4>Final Thoughts</h4>
        <Paragraph text="Web accessibility covers far more than mentioned above. WCAG includes things like time limits, gestures, forms, errors, and everything in between. Accessibility research is a profession of its own because of how critical it is — legally, ethically, and practically." />
        <Paragraph text="That being said, these quick accessibility fixes are a great place to start, and a practical way to move toward an accessible website design. Even small improvements can open your site up to more people and give a better user experience for everyone." />
      </BlogContainer>
    </Page>
  );
}
