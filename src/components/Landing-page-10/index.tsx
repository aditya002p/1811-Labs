import FeaturedOn from "./FeaturedOn";
import Hero from "./Hero";
import Features2 from "./Features2";
import Features from "./Features";
import Pricing from "./Pricing";
import Faq from "./FAQ";
import Footer from "./Footer";
import "@fontsource/inter";
export default function LandingPage8() {
  return (
    <div className="text-[#090A18]">
      <div className="bg-[#1e202d] bg-gradient-to-tr from-[#1e202d]] to-[#01020b5d] text-white font-inter">
        <Hero />
        <FeaturedOn />
        <Features2 />
        <Features />
        <Pricing />
        <Faq />
        <hr className="border opacity-20 w-[100%]"></hr>
        <Footer />
      </div>
    </div>
  );
}

// #131313
