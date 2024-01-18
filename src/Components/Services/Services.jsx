import React from "react";
import Link from "next/link";

const services = [
  { name: "Web Development", link: "https://dotpotit.com/web-development/landing-page" },
  { name: "Software Development", link: "https://dotpotit.com/web-development/landing-page" },
  { name: "Mobile Application", link: "https://dotpotit.com/key-features/contact-center-support/#mobile-app" },
  { name: "UI/UX Design", link: "https://dotpotit.com/" },
  { name: "Digital Marketing", link: "https://dotpotit.com/" },
  { name: "AI Development", link: "https://dotpotit.com/key-features/ai-development/#object-recognition" },
  { name: "Contact Center", link: "https://dotpotit.com/contact" },
];

function Services() {
  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full lg:max-w-7xl mx-auto  transform -translate-y-16">
       <h2 className="text-center mb-11 text-2xl text-gray-200">Our Services</h2>
       <div
      className="grid grid-cols-2 lg:grid-cols-3 overflow-hidden px-3  lg:p-9 lg:px-3  gap-4 lg:gap-8 transform  lg:-translate-y-32 py-3 "
      style={containerStyle}
    >
      {services.map((service, index) => (
        <div key={index} className="rounded-lg lg:px-5 ">
          <a href={service.link} target="-blank">
            <p className="button-85 max-w-full h-[8vh] lg:h-auto" role="button">
              {service.name}
            </p>
          </a>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default Services;
