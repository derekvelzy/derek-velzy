// Package imports

// Custom imports
import Hero from "~/components/Hero/Hero";
import LowPolyBg from "~/components/LowPolyBackground/LowPolyBackground";
import Services from "~/components/Services/Services";


export default function Home() {
  return (
    <div className="bg-[#F8F9FA]">
      <LowPolyBg />
      <Hero />
      <Services />
    </div>
  );
}
