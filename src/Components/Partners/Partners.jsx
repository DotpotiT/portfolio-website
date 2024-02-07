import Image from "next/image";
// import { useEffect, useRef } from "react";

// import Swiper from "swiper";
// import "swiper/css";

function Partners() {


  return (
    <div className=" pt-12  mx-auto" id="popular">
      <h2 className="text-center text-2xl py-8 text-gray-400 ">Our Partners</h2>

      <div className=" px-1 flex flex-row  justify-center flex-wrap gap-2 lg:max-w-7xl lg:mx-auto">
       <a href="https://cornerstripe.com/" target="_blank" rel="noopener noreferrer"> <Image className="z-10"
          width={300}
          height={20}
          src="https://portfolio.dotsoft.buzz/img/partnership/pt6.PNG"
          alt="corner stripe"
        /></a>
        <a href="https://brainstormsstation.com/" target="_blank" rel="noopener noreferrer"><Image className="z-10"
          width={300}
          height={20}
          src="https://portfolio.dotsoft.buzz/img/partnership/pt7.PNG"
          alt="Brain Storms station"
        /></a>
        <a href="https://sunnyil.com/" target="_blank" rel="noopener noreferrer"><Image className="z-10"
          width={300}
          height={20}
          src="https://portfolio.dotsoft.buzz/img/partnership/pt2.PNG"
          alt="Sunny International"
        />  </a>
       <a href="https://www.adonbd.com/" target="_blank" rel="noopener noreferrer"> <Image className="z-10"
          width={300}
          height={20}
          src="https://portfolio.dotsoft.buzz/img/partnership/pt1.PNG"
          alt="Adon"
        /></a>
       <a href="https://bitbytetechnology.com/" target="_blank" rel="noopener noreferrer"> <Image className="z-10"
          width={300}
          height={20}
          src="https://portfolio.dotsoft.buzz/img/partnership/pt-10.png"
          alt="bitbyte technology"
        /></a>
       <a href="https://audacityit.com/" target="_blank" rel="noopener noreferrer"> <Image className="z-10"
          width={300}
          height={20}
          src="https://portfolio.dotsoft.buzz/img/partnership/pt4.PNG"
          alt="Audacity"
        /></a>
      <a href="http://www.springsdev.com/" target="_blank" rel="noopener noreferrer">  <Image className="z-10"
          width={300}
          height={20}
          src="https://portfolio.dotsoft.buzz/img/partnership/pt8.PNG"
          alt="Spring Devs"
        /></a>
       <a href="http://www.shootingstar.com/" target="_blank" rel="noopener noreferrer"> <Image className="z-10"
          width={300}
          height={20}
          src="https://portfolio.dotsoft.buzz/img/partnership/pt3.PNG"
          alt="Shooting Star Ltd"
        /></a>
      </div>
    </div>
  );
}

export default Partners;
