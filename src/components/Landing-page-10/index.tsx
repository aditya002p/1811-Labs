import FeaturedOn from "./FeaturedOn";
import Hero from "./Hero";
import Features2 from "./Features2";
import Features from "./Features";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";

export default function LandingPage10() {
  return (
    <div className="text-white bg-[#141414] bg-gradient-to-bl from-[#313B8233] to-[#090A1833]">
      <Hero />
      <FeaturedOn />
      <Features2 />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
