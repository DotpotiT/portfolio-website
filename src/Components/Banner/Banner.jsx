import Image from "next/image";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa6";
// import EarthCanvas from '../Canvas/Earth';

const pdfPath = "/dotpotit-portfolio.pdf"; // Adjust the path accordingly

function Banner() {
  const bannerText =
    "your premier destination for comprehensive digital solutions. We specialize in responsive web development, user-friendly app creation, and streamlined software development. Integrating AI for intelligent solutions and focusing on captivating UI/UX designs, we ensure a seamless digital presence. Boost your brand's visibility with our strategic digital marketing services. Partner with Dotpot iT for cutting-edge solutions, and let's shape the future of your digital journey together."; // Your text here

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayText = showMore ? bannerText : bannerText.slice(0, 200);

  // const downloadPDF = () => {
  //   const link = document.createElement("a");
  //   link.href = pdfPath;
  //   link.download = "dotpotit-portfolio.pdf";
  //   link.click();
  // };

  return (
    <div>
      <div className="max-w-7xl hero  mx-auto min-h-screen px-2 ">
        <div className=" flex flex-col-reverse lg:flex-row-reverse text-white justify-between gap-4 lg:gap-32">
          <Image
            width={400}
            height={300} 
            src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704366008/b-removebg-preview_nsrxcs.png"
            alt="Dotpot iT Banner bg image"  
            loading="lazy"
          />
          <div className="mx-2 transform -tanlate-y-2 lg:translate-y-16">
            <h1 className="py-2 text-xl lg:text-4xl">Welcome to Dotpot iT,</h1>
            <p className="max-w-2xl  lg:text-lg"   style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
              {displayText}
              {bannerText.length > 200 && (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={toggleShowMore}
                >
                  {showMore ? " See less" : " See more"}
                </span>
              )}
            </p>
            <button className="px-5 text-sm mt-6" >
             
              
                <span className="text-md   items-center">
                 <a href={pdfPath} className="flex flex-row" download="Dotpotit-portfolio">   Portfolio{" "}<span className="text-lg"><FaDownload /></span> {" "} </a>
                </span>
             
              <div className="liquid"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
