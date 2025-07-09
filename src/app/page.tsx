// Package imports

// Custom imports
import About from "~/components/About/About";
import Blog from "~/components/Blog/Blog";
import Contact from "~/components/Contact/Contact";
import FloatingLinks from "~/components/FloatingLinks/FloatingLinks";
import Hero from "~/components/Hero/Hero";
import LowPolyBg from "~/components/LowPolyBackground/LowPolyBackground";
import LPGFooter from "~/components/LowPolyBackground/LPBFooter";
import Services from "~/components/Services/Services";
import Zero from "~/components/Work/Zero";

export default function Home() {
  return (
    <div className="bg-[#F8F9FA] relative">
      <LowPolyBg />
      <LPGFooter />
      <Hero />
      <FloatingLinks />
      <Services />
      <About />
      <Zero />
      <Blog />
      <Contact />
    </div>
  );
}
