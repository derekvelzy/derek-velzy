// Package imports
import type { Metadata } from "next";

// Custom imports
import Page from "~/components/Page/Page";
import Header from "~/components/Blog/Sections/Header";
import ImageWithCaption from "~/components/Blog/Sections/ImageWithCaption";
import Paragraph from "~/components/Blog/Sections/Paragraph";
import BlogContainer from "~/components/Blog/Sections/BlogContainer";

export const metadata: Metadata = {
  title:
    "Think Like a Product Manager, Not a Web Designer: Building Sites That Learn and Improve",
  description:
    "Why a product mindset helps you build smarter, data-driven websites that evolve, perform, and connect with real users.",
  keywords: [
    "product management for web design",
    "product thinking",
    "website optimization",
    "digital product strategy",
    "data-driven web design",
    "UX and performance",
    "conversion optimization",
    "marketing technology",
  ],
  alternates: {
    canonical: "/articles/think-like-a-product-manager-not-a-web-designer",
  },
  openGraph: {
    title:
      "Think Like a Product Manager, Not a Web Designer: Building Sites That Learn and Improve",
    description:
      "Why a product mindset helps you build smarter, data-driven websites that evolve, perform, and connect with real users.",
    url: "/articles/think-like-a-product-manager-not-a-web-designer",
    siteName: "Sites by Velzy",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1000,
        height: 1000,
        alt: "Think Like a Product Manager, Not a Web Designer",
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
  title:
    "Think Like a Product Manager, Not a Web Designer: Building Sites That Learn and Improve",
  description:
    "When I first started out in software development, I obsessed over the details like load times, layout grids, pixel alignment...",
  date: "November 12, 2025",
  image:
    "https://aywnqw1wyioophsr.public.blob.vercel-storage.com/think-like-a-pm_5.jpeg",
  href: "https://medium.com/@dmvelzy/think-like-a-product-manager-not-a-web-designer-building-sites-that-learn-and-improve-218246b67f82",
};

export default function LayoutsToFlow() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Think Like a Product Manager, Not a Web Designer: Building Sites That Learn and Improve",
    description:
      "Why a product management mindset helps you build smarter, data-driven websites that evolve, perform, and connect with real users.",
    datePublished: "2025-11-12T08:00:00Z", // set actual
    dateModified: "2025-11-12T08:00:00Z", // update on edits
    author: [{ "@type": "Person", name: "Derek Velzy" }],
    publisher: {
      "@type": "Organization",
      name: "Sites by Velzy",
      logo: {
        "@type": "ImageObject",
        url: "https://sitesbyvelzy.com/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://sitesbyvelzy.com/articles/think-like-a-product-manager-not-a-web-designer",
    },
    articleSection: [
      "Product Management",
      "Web Design",
      "Data-Driven",
      "User-Centered",
    ],
    keywords: [
      "product management for web design",
      "product thinking",
      "website optimization",
      "digital product strategy",
      "data-driven web design",
      "UX and performance",
      "conversion optimization",
      "marketing technology",
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
          caption="The feeling of opening Google Analytics to find your average session duration is lower than your page speed."
        />
        <h3>When I Stopped Designing and Started Thinking in Products</h3>
        <Paragraph text="When I first started out in software development, I obsessed over the details like load times, layout grids, pixel alignment. The UI was everything to me." />
        <Paragraph text="I was drawn to beautiful websites, the kind that made you stop and admire the craft. Apple’s product pages were my north star. I’d spend hours scrolling through Awwwards, studying the animation timings and subtle transitions, hoping to one day design something that felt that effortless." />
        <Paragraph text="But over the last year or so, something clicked. I realized that a beautiful website is only as good as it communicates and influences behavior. The sites I admired so much reflected my bias as a developer: I appreciated them because I understood the craftsmanship. The average visitor, though? They might spend ten seconds, get confused, and close the tab." />
        <Paragraph text="That realization hit hard. So I started diving deeper into analytics, watching how people actually used the websites I built. That’s when I discovered something powerful: great design isn’t just about looking good — it’s about learning. It’s about using design and data together to guide, test, and evolve. That’s when I stopped thinking like a web designer and started thinking like a product manager." />
        <h3>Most Websites are Built Like Projects, Not Products</h3>
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/think-like-a-pm_1.jpg"
          caption="Your site after 4 years and 0 maintenance."
        />
        <Paragraph text="A lot of websites — especially for small or local businesses — launch and then quietly drift into autopilot. They’re built once, pushed live, and left untouched for years until someone decides it’s time for a refresh. It’s the classic build-launch-forget cycle. For many developers and agencies, that’s the end of the job. The site’s live, the boxes are checked, the invoice is sent." />
        <Paragraph text="But that mindset misses the point. It’s like buying a new car, driving it off the lot, and then never changing the oil. Sure, it’ll run fine for a while — maybe even a few years — but eventually things start to break down, and you’re left wondering why performance dropped off." />
        <Paragraph text="The same goes for websites. On the surface, everything might seem fine. The homepage loads, the links work, the design looks sharp. But how do we know it’s actually performing?" />
        <Paragraph text="​​What if that floating button in the corner never gets clicked because it blends into the background? What if a form breaks silently on the latest Android device? Or what if people are dropping off your site halfway through the booking flow and you’d never know because no one’s looking at the data?" />
        <Paragraph text="Without measurement, iteration, or feedback, we’re just guessing. We’re like sailors out at sea without a compass — drifting, hoping we’re heading in the right direction." />
        <h3>Your Website is an Experiment</h3>
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/think-like-a-pm_2.jpg"
          caption=""
        />
        <Paragraph text="We need to start treating our web experience like an experiment." />
        <Paragraph text="That’s really the foundation of product thinking, or at least how I’ve come to think of it. It is basically the scientific method in a digital context. Don’t worry, there is no lab coat required. You will not have a lab report to turn in." />
        <Paragraph text="It’s the same process we all learned in school:" />
        <Paragraph text="You start with an observation, ask a question, do your research, form a hypothesis, test it, analyze the results, and draw a conclusion." />
        <Paragraph text="Then, if you’re serious about learning, you do it again." />
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/think-like-a-pm_3.png"
          caption="The Design Thinking process, from the Nielsen Norman Group."
        />
        <Paragraph text="Now, let’s contrast that with Design Thinking, which has shaped a lot of how we approach web design today. It’s an interactive (that is to say, we keep repeating the cycle) human-centered framework that focuses on understanding user needs, challenging assumptions, and testing ideas to reach better outcomes." />
        <Paragraph text="The steps look something like this:" />
        <Paragraph text="Understand, Observe, Define point of view, Ideate, Prototype, Test, and Reflect." />
        <Paragraph text="Sound familiar? That’s because Product and Design Thinking share the same DNA. They are iterative and curious. One leans more analytical while the other leans more empathetic, but both are about learning your way forward." />
        <Paragraph text="Without that iterative mindset, we might still think the earth was flat. And without it on a website, we’ll never know how much potential we’re leaving on the table in terms of views, leads, conversions, or customer experience." />
        <h3>Build Sites That Learn and Improve</h3>
        <ImageWithCaption
          imageSrc="https://aywnqw1wyioophsr.public.blob.vercel-storage.com/think-like-a-pm_4.jpg"
          caption="The Design Thinking process, from the Nielsen Norman Group."
        />
        <Paragraph text="Below is a simple framework that puts this experimental mindset into practice." />
        <Paragraph text="It’s not a full-blown process like a product roadmap or sprint cycle — it’s just a clear, repeatable way to keep your website learning and improving over time." />
        <Paragraph text="The Product-Minded Website Process:" />
        <h4>{"(1) Discover"}</h4>
        <Paragraph text="Start by clarifying your goals, audience, and KPIs (key performance indicators). Without clear goals, you have no way to measure progress — and without knowing your audience, you’re just designing for yourself." />
        <Paragraph text="Think of this phase as setting your compass:" />
        <Paragraph text="Who are we trying to reach? What do we want them to do? How will we know if it’s working?" />
        <Paragraph text="These answers guide every design and content decision moving forward." />
        <h4>{"(2) Build"}</h4>
        <Paragraph text="Next, build a lightweight, performant MVP (minimum viable product). The goal isn’t perfection, it’s traction." />
        <Paragraph text="If you load up your site with every feature idea right away, you’ll waste time and resources on things users might never touch. Build the essentials first, get it live, and gather feedback." />
        <h4>{"(3) Measure"}</h4>
        <Paragraph text="Now it’s time to listen." />
        <Paragraph text="Use your analytics tools to see how people are actually interacting with the site. Just a few of the metrics we could observe would be:" />
        <Paragraph text="Scroll depth, click-through rate on your main CTA, average session duration, bounce rate, page drop-offs or form abandonments." />
        <Paragraph text="Each metric is a clue. Together, they paint a picture about how your site communicates, converts, and performs in the real world." />
        <h4>{"(4) Improve"}</h4>
        <Paragraph text="Finally, take what you’ve learned and make small, focused tweaks." />
        <Paragraph text="Refine your copy, simplify user flows, optimize performance, or try new headlines or layouts. A/B testing is a great tool here because you can compare two versions of a page or element and actually see which performs better. The control group gets the original page format, and the experimental group gets the new layout." />
        <Paragraph text="Then, go back to step one. Wash, rinse, repeat, and keep improving." />
        <h4>Why This Works</h4>
        <Paragraph text="This process isn’t flashy, but it’s effective. It turns your website into a living system that adapts, rather than a static page that ages." />
        <Paragraph text="Thinking like a product manager means that every release (big or small) becomes a chance to learn something new about your users and your business." />
        <Paragraph text="For business owners, this means consistent improvement and a clearer understanding of what customers want." />
        <Paragraph text="For designers and developers, it’s a way to demonstrate value, build long-term client relationships, and show real results instead of just visuals." />
        <h3>Your Website Is Never Done, and That’s a Good Thing</h3>
        <Paragraph text="Shifting your mindset from developer to product manager means embracing the product process (the scientific method) by iteration and learning. These are worthwhile changes if you want your websites to actually deliver value for the people they are built for." />
        <Paragraph text="I used to measure success by how polished a site looked. Now I measure by how well it performs and how much it improves over time. That’s the difference between building a website and a digital product." />
      </BlogContainer>
    </Page>
  );
}
