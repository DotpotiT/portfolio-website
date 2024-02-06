import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import {  FaLinkedin,  } from "react-icons/fa6";
import Image from "next/image";
function Ceo() {
  const emailAddress = "zakir@dotpotit.com";
 
  return (
    <div className="flex flex-col lg:flex-row justify-evenly gap-8 mt-10 max-w-7xl mx-auto px-4">
      <Image
        width={600}
        height={300}
        loading="lazy"
        src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1705147719/exzsd1nhnaz0z4fh9h9e.jpg" 
        alt="CEO & Founder-Dotpot iT"
      />
      <div>
        <h4 className="text-blue-400 text-lg">Message From CEO & Founder  </h4>
        <h2 className="text-2xl text-neutral-content">A Warm Hello to all,</h2>
        <p className="text-gray-400"   style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
          As the CEO & Founder of Dotpot iT, I spearhead a talented team
          delivering innovative IT solutions across diverse sectors. With over a
          decade of industry immersion, my passion lies in harnessing
          technology's potential to streamline business operations, steering
          companies towards their goals. My leadership ethos emphasizes
          collaboration, empowering teams to drive decisions and surpass client
          expectations, fostering enduring partnerships.
          <br />
          My academic journey includes completing degrees at Munster
          Technological University (Ireland), augmenting expertise in
          Decentralized Applications (DApps), Consensus Mechanisms, Cryptography
          and Security, Blockchain Platforms and Frameworks, Smart Contract
          Development, and profound Programming Proficiency. Past roles, notably
          as Chief Executive Officer at iProtocol Network Ltd and as a
          successful Business Owner at Taste of Spice, underline my diverse
          skill set and adaptability across domains. Beyond my professional
          journey, I'm committed to industry advancement, continually enhancing
          knowledge through active participation in conferences, workshops, and
          mentorship initiatives. This proactive approach ensures a cutting-edge
          perspective that permeates into the solutions we offer.
        </p>
        <h3 className="text-blue-400 text-xl pt-4">Zakir Hossain </h3>
        <h4 className="text-blue-400 text-sm">CEO & Founder  at Dotpot iT</h4>
        <div className="flex flex-row gap-3 pt-3">
          <a
            href={`mailto:${emailAddress}`} target="_blank"
            className="rounded-full border-dashed border-2 p-2"
            aria-label="Email Us"
          >
            <MdOutlineEmail className="rounded-full text-neutral-content text-4xl p-2" />
          </a>

          <a
            href="https://uk.linkedin.com/in/zakir-hossain-dotpotit?trk=profile-badg"
            className="rounded-full border-dashed border-2 p-2"
            aria-label="Connect with us on LinkedIn" target="_blank"
          >
            <FaLinkedin className="rounded-full text-neutral-content text-4xl  p-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ceo;
