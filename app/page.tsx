import Craft from "@/components/landing/craft";
import Faqs from "@/components/landing/faqs";
import Feedback from "@/components/landing/feedback";
import Hero from "@/components/landing/hero";
import MarqueeCompany from "@/components/landing/marquee-company";
import Pricing from "@/components/landing/pricing";
import Productivity from "@/components/landing/productivity";
import WhatWeDo from "@/components/landing/what-we-do";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <MarqueeCompany />
      <WhatWeDo />
      <Productivity />
      <Craft />
      <Feedback />
      <Faqs />
      <Pricing />
    </div>
  );
}
