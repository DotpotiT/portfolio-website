"use client";

import About from "@/Components/About/About";
import Banner from "@/Components/Banner/Banner";
import Ceo from "@/Components/Ceo/Ceo";
import Contact from "@/Components/Contact/Contact";
import Faq from "@/Components/Faq/Faq";
import MissionVission from "@/Components/MissionVission/MissionVission";
import ParticleComponent from "@/Components/ParticleComponent/ParticleComponent";
import Partners from "@/Components/Partners/Partners";
import Products from "@/Components/Products/Products";
import ProvidedService from "@/Components/ProvidedService/ProvidedService";
import Services from "@/Components/Services/Services";
import TeamMembers from "@/Components/TeamMembers/TeamMembers";
import Testimonials from "@/Components/Testimonials/Testimonials";
// import StarsCanvas from "@/Components/ThemeScene/ThemeScene";
import WhyChooseUs from "@/Components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main >
   
    
        <div className='w-full static z-50 '>
        <Banner />
        <Services />
        <About />
        <MissionVission />
        <Products />
        <ProvidedService />
        <Testimonials />
        <Faq />
        <WhyChooseUs/>
        <Ceo />
<TeamMembers/>
        <Partners />
        <Contact />
       

      </div>
      <ParticleComponent/>
   
    </main>
  );
}
