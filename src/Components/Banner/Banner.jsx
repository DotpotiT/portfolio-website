import React, { useState } from 'react';
import wavejson from '../../../public/wave.svg'

function Banner() {
  const bannerText =
    "Welcome to Dotpot iT, your premier destination for comprehensive digital solutions. We specialize in responsive web development, user-friendly app creation, and streamlined software development. Integrating AI for intelligent solutions and focusing on captivating UI/UX designs, we ensure a seamless digital presence. Boost your brand's visibility with our strategic digital marketing services. Partner with Dotpot iT for cutting-edge solutions, and let's shape the future of your digital journey together.";

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayText = showMore ? bannerText : bannerText.slice(0, 200);

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://res.cloudinary.com/dgohi0iqm/image/upload/v1705236989/flipper.com.bd__rszjsr.jpg'; // Replace with the actual path to your PDF file
    link.download = 'portfolio.pdf';
    link.click();
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('https://tech-ai.vercel.app/_next/static/media/banner-one-bg.ad96c151.png')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col-reverse lg:flex-row-reverse text-white justify-between gap-4 lg:gap-64">
          <img
            src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704366008/b-removebg-preview_nsrxcs.png"
            alt="Dotpot iT Banner bg image"
          />
          <div className='px-2'>
            <h1 className="w-[250px] font-bold transform translate-y-2 lg:translate-y-9 ">
              <img
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704543228/vkahrznyuobgcnmnltq9.png"
                alt="Dotpot iT Logo"
              />
            </h1>
            <p className="py-6  max-w-xl">
              {displayText}
              {bannerText.length > 200 && (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={toggleShowMore}
                >
                  {showMore ? ' See less' : ' See more'}
                </span>
              )}
            </p>
         
            <button className="px-5" onClick={downloadPDF}>
              <span> Portfolio</span>
              <div className="liquid"></div>
            </button>
 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
