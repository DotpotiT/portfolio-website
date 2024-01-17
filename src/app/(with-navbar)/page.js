"use client";

import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Ceo from "@/Components/Ceo/Ceo";
import Contact from "@/Components/Contact/Contact";
import Faq from "@/Components/Faq/Faq";
import MissionVission from "@/Components/MissionVission/MissionVission";
import Partners from "@/Components/Partners/Partners";
import Products from "@/Components/Products/Products";
import ProvidedService from "@/Components/ProvidedService/ProvidedService";
import Services from "@/Components/Services/Services";
import Testimonials from "@/Components/Testimonials/Testimonials";
import StarsCanvas from "@/Components/ThemeScene/ThemeScene";

export default function Home() {
  return (
    <main>
      <div className="relative z-0">
        <StarsCanvas />
        <Banner />
        <Services />
        <About />
        <MissionVission />
        <Products />
        <ProvidedService />
        <Testimonials />
        <Faq />
        <Ceo />

        <Partners />
        <Contact />
      </div>
    </main>
  );
}
