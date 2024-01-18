import Image from "next/image";
import React from "react";
function Navbar() {
  return (
    <div>
      <div className=" relative z-10 lg:flex py-2 lg:py-3 bg-black opacity-85 px-2 w-full lg:max-w-screen-full  md:px-2   lg:px-[240px] ">
        <div className="flex flex-row  justify-between gap-20  items-center md:gap-[50vh] lg:gap-[118vh]  ">
          <a href="/" className="font-semibold lg:font-bold  ">
          <Image
              width={200}
              height={180}
              loading="lazy"
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1704543228/vkahrznyuobgcnmnltq9.png"
              alt="Dotpot iT Logo"
            />
          </a>

          <a
            href="https://dotpotit.com/"
            className="btn-outline  h-10  lg:ml-2 w-[10vh] lg:w-[20vh] py-2 rounded-xl border-2 border-transparent text-black font-bold bg-gradient-to-r from-gray-600 to-orange-400 transform hover:rotate-y-3 hover:rotate-x-3 flex-row items-center lg:text-lg text-xs text-center"
          >Visit
          our Website
          </a>
        </div>
      </div>
    </div>  
  );
}

export default Navbar;
