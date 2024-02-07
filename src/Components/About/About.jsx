import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="max-w-7xl mx-auto flex mb-7 transform lg:-translate-y-32">
      <div className="px-1">
        <div className="hero-content flex-col lg:flex-row max-w-7xl mx-auto  gap-5">
          <Image 
            width={700}
            height={600}
            src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704383070/dkzystq9alhecixuhafi.png"
            alt="about"
            className=" w-[45vh] lg:max-w-xl  rounded-lg shadow-2xl z-10"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-400">About Company!</h1>
            <p className="py-6 lg:w-[700px] text-gray-400"   style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
              Dotpot iT Ltd. is a multi-faceted technology company that offers a
              range of services to meet the needs of businesses of all sizes.
              Whether you're looking to create a website, develop software,
              implement AI, or build a mobile app, Dotpot iT has the expertise
              and resources to help you achieve your goals. In addition, we
              offer call center services, SEO and digital marketing, networking,
              cloud services, cyber security, IT support office, game
              development, and Web3 development and blockchain engineering. Our
              team of experts is dedicated to providing high-quality and
              reliable services that can help you grow your business and reach
              your target audience. At Dotpot iT, we use the latest technologies
              and best practices to ensure that our clients receive the most
              innovative and effective solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
