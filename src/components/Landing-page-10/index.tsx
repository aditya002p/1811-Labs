import FeaturedOn from "./FeaturedOn";
import Hero from "./Hero";
import Features2 from "./Features2";
import Features from "./Features";
import Pricing from "./Pricing";
import Faq from "./FAQ";
import Footer from "./Footer";

export default function LandingPage10() {
  return (
    <div className="text-[#141414]">
      <div className="bg-custom-gradient text-white font-inter">
        <Hero />
        <FeaturedOn />
        <Features2 />
        <Features />
        <Pricing />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
